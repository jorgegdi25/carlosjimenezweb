function runUnitTests() {
  testEquals(getNestedProperty({ transaction: { id: "abc" } }, "transaction.id"), "abc", "nested property");
  testEquals(normalizeEmail(" Test@Gmail.com "), "test@gmail.com", "normalize email");
  testEquals(sha256Hex("abc"), "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad", "sha256");

  const payload = {
    data: { transaction: { id: "123", status: "APPROVED", amount_in_cents: 2000000 } },
    timestamp: 1530291411,
    signature: {
      properties: ["transaction.id", "transaction.status", "transaction.amount_in_cents"],
    },
  };
  testEquals(
    buildWompiSignatureString(payload, "secret"),
    "123APPROVED20000001530291411secret",
    "signature string"
  );
  console.log("Pruebas unitarias completadas.");
}

function testEquals(actual, expected, label) {
  if (actual !== expected) {
    throw new Error("Fallo " + label + ": " + actual + " !== " + expected);
  }
}
