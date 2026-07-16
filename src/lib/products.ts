export type DigitalProduct = {
  slug: string;
  referenceCode: string;
  name: string;
  amountInCents: number;
  currency: "COP";
  blobPathEnv: string;
  downloadFilename: string;
};

const products: DigitalProduct[] = [
  {
    slug: "el-neuromarketing",
    referenceCode: "NEURO",
    name: "El Neuromarketing",
    amountInCents: 2_000_000,
    currency: "COP",
    blobPathEnv: "BLOB_NEUROMARKETING_PATH",
    downloadFilename: "el-neuromarketing-carlos-alberto-jimenez.pdf",
  },
  {
    slug: "dialogo-con-mi-cerebro",
    referenceCode: "DIALOGO",
    name: "Dialogo Con Mi Cerebro",
    amountInCents: 2_000_000,
    currency: "COP",
    blobPathEnv: "BLOB_DIALOGO_PATH",
    downloadFilename: "dialogo-con-mi-cerebro-carlos-alberto-jimenez.pdf",
  },
  {
    slug: "cerebros-digitales",
    referenceCode: "CEREBROS",
    name: "Cerebros digitales",
    amountInCents: 2_000_000,
    currency: "COP",
    blobPathEnv: "BLOB_CEREBROS_PATH",
    downloadFilename: "cerebros-digitales-carlos-alberto-jimenez.pdf",
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
  return process.env[product.blobPathEnv]?.trim();
}

export function isProductReady(product: DigitalProduct) {
  return Boolean(getProductBlobPath(product));
}
