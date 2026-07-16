export type DigitalProduct = {
  slug: string;
  referenceCode: string;
  name: string;
  amountInCents: number;
  currency: "COP";
  delivery: "download" | "course";
  blobPathEnv?: string;
  downloadFilename?: string;
};

const products: DigitalProduct[] = [
  {
    slug: "el-neuromarketing",
    referenceCode: "NEURO",
    name: "El Neuromarketing",
    amountInCents: 2_000_000,
    currency: "COP",
    delivery: "download",
    blobPathEnv: "BLOB_NEUROMARKETING_PATH",
    downloadFilename: "el-neuromarketing-carlos-alberto-jimenez.pdf",
  },
  {
    slug: "dialogo-con-mi-cerebro",
    referenceCode: "DIALOGO",
    name: "Dialogo Con Mi Cerebro",
    amountInCents: 2_000_000,
    currency: "COP",
    delivery: "download",
    blobPathEnv: "BLOB_DIALOGO_PATH",
    downloadFilename: "dialogo-con-mi-cerebro-carlos-alberto-jimenez.pdf",
  },
  {
    slug: "cerebros-digitales",
    referenceCode: "CEREBROS",
    name: "Cerebros digitales",
    amountInCents: 2_000_000,
    currency: "COP",
    delivery: "download",
    blobPathEnv: "BLOB_CEREBROS_PATH",
    downloadFilename: "cerebros-digitales-carlos-alberto-jimenez.pdf",
  },
  {
    slug: "curso-prueba",
    referenceCode: "CURSO-TEST",
    name: "Curso de prueba",
    amountInCents: 2_000_000,
    currency: "COP",
    delivery: "course",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductFromReference(reference: string) {
  return products.find((product) =>
    reference.startsWith(`CAJ-${product.referenceCode}-`),
  );
}

export function getProductBlobPath(product: DigitalProduct) {
  if (!product.blobPathEnv) return undefined;
  return process.env[product.blobPathEnv]?.trim();
}

export function isProductReady(product: DigitalProduct) {
  if (product.delivery === "course") {
    return Boolean(
      process.env.COURSE_APPS_SCRIPT_URL?.trim() &&
      process.env.COURSE_AUTOMATION_SECRET?.trim(),
    );
  }
  return Boolean(getProductBlobPath(product));
}
