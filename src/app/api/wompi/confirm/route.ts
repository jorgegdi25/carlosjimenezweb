import { issueSignedToken, presignUrl } from "@vercel/blob";
import { NextResponse, type NextRequest } from "next/server";

import {
  getProductBlobPath,
  getProductFromReference,
} from "@/lib/products";
import {
  getWompiTransaction,
  transactionMatchesProduct,
  verifyPurchaseSession,
} from "@/lib/wompi";

export async function GET(request: NextRequest) {
  const transactionId = request.nextUrl.searchParams.get("id") ?? "";
  const session = verifyPurchaseSession(
    request.cookies.get("caj_purchase")?.value,
  );

  if (!session) {
    return NextResponse.json(
      { error: "La sesion de compra vencio o no pertenece a este navegador." },
      { status: 401 },
    );
  }

  const transaction = await getWompiTransaction(transactionId);
  if (!transaction || transaction.reference !== session.reference) {
    return NextResponse.json(
      { error: "No fue posible verificar esta transaccion." },
      { status: 404 },
    );
  }

  const product = getProductFromReference(transaction.reference);
  if (!product || !transactionMatchesProduct(transaction, product)) {
    return NextResponse.json(
      { error: "Los datos de la compra no coinciden con el producto." },
      { status: 400 },
    );
  }

  if (transaction.status !== "APPROVED") {
    return NextResponse.json({
      status: transaction.status,
      productName: product.name,
    });
  }

  const pathname = getProductBlobPath(product);
  if (!pathname) {
    return NextResponse.json(
      { error: "El archivo de este producto no esta configurado." },
      { status: 503 },
    );
  }

  try {
    const validUntil = Date.now() + 15 * 60 * 1000;
    const signedToken = await issueSignedToken({
      pathname,
      operations: ["get"],
      validUntil,
    });
    const { presignedUrl } = await presignUrl(signedToken, {
      access: "private",
      operation: "get",
      pathname,
      validUntil,
    });

    return NextResponse.json({
      status: transaction.status,
      productName: product.name,
      downloadUrl: presignedUrl,
      downloadFilename: product.downloadFilename,
      expiresInMinutes: 15,
    });
  } catch (error) {
    console.error("No fue posible firmar la descarga", error);
    return NextResponse.json(
      { error: "El pago fue aprobado, pero no pudimos preparar la descarga." },
      { status: 503 },
    );
  }
}
