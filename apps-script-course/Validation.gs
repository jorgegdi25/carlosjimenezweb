function normalizeEmail(value) {
  const email = String(value || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    throw new Error("El correo del comprador no es valido.");
  }
  return email;
}

function getNestedProperty(source, path) {
  return String(path).split(".").reduce(function (value, key) {
    if (!value || typeof value !== "object") return undefined;
    return value[key];
  }, source);
}

function sha256Hex(value) {
  return Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    String(value),
    Utilities.Charset.UTF_8
  ).map(function (byte) {
    const unsigned = byte < 0 ? byte + 256 : byte;
    return ("0" + unsigned.toString(16)).slice(-2);
  }).join("");
}

function buildWompiSignatureString(payload, eventsSecret) {
  const signature = payload && payload.signature;
  if (!signature || !Array.isArray(signature.properties)) {
    throw new Error("El evento no contiene signature.properties.");
  }
  if (payload.timestamp === undefined || payload.timestamp === null) {
    throw new Error("El evento no contiene timestamp.");
  }

  const values = signature.properties.map(function (path) {
    const value = getNestedProperty(payload.data, path);
    if (value === undefined || value === null) {
      throw new Error("No existe la propiedad firmada " + path + ".");
    }
    return String(value);
  });

  return values.join("") + String(payload.timestamp) + eventsSecret;
}

function validateWompiSignature(payload, eventsSecret) {
  const received = payload && payload.signature && payload.signature.checksum;
  if (!received) throw new Error("El evento no contiene checksum.");

  const calculated = sha256Hex(buildWompiSignatureString(payload, eventsSecret));
  if (calculated.toLowerCase() !== String(received).toLowerCase()) {
    throw new Error("La firma del evento Wompi no es valida.");
  }
  return true;
}

function validateTransaction(payload) {
  if (!payload || payload.event !== "transaction.updated") {
    return { ignored: true, reason: "Evento no soportado" };
  }

  const expectedEnvironment = getOptionalProperty("WOMPI_ENVIRONMENT", "test");
  if (payload.environment !== expectedEnvironment) {
    throw new Error("El ambiente Wompi no coincide.");
  }

  const transaction = payload.data && payload.data.transaction;
  if (!transaction || !transaction.id || !transaction.reference) {
    throw new Error("La transaccion no tiene la estructura esperada.");
  }
  if (transaction.status !== "APPROVED") {
    return { ignored: true, reason: "Pago no aprobado" };
  }
  if (!String(transaction.reference).startsWith(COURSE_CONFIG.referencePrefix)) {
    return { ignored: true, reason: "La referencia no pertenece al curso" };
  }
  if (transaction.currency !== COURSE_CONFIG.currency) {
    throw new Error("La moneda de la compra no coincide.");
  }
  if (Number(transaction.amount_in_cents) !== getCoursePriceInCents()) {
    throw new Error("El valor de la compra no coincide.");
  }

  return {
    ignored: false,
    transaction: transaction,
    email: normalizeEmail(transaction.customer_email),
  };
}
