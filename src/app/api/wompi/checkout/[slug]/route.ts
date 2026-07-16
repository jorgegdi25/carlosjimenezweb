import { randomUUID } from "node:crypto";

import { NextResponse, type NextRequest } from "next/server";

import { getProduct, getProductBlobPath } from "@/lib/products";
import { createPurchaseSession, wompiCheckoutUrl } from "@/lib/wompi";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return NextResponse.json({ error: "Producto no encontrado." }, { status: 404 });
  }

  if (!getProductBlobPath(product)) {
    return NextResponse.json(
      { error: "Este producto todavia no esta habilitado para venta." },
      { status: 503 },
    );
  }

  try {
    const reference = `CAJ-${product.referenceCode}-${randomUUID()}`;
    const expiration = new Date(Date.now() + 30 * 60 * 1000);
    const configuredSiteUrl = process.env.SITE_URL?.replace(/\/$/, "");
    const siteUrl = configuredSiteUrl || request.nextUrl.origin;
    const checkoutUrl = wompiCheckoutUrl({
      product,
      reference,
      redirectUrl: `${siteUrl}/pago/resultado`,
      expirationTime: expiration.toISOString(),
    });
    const response = NextResponse.redirect(checkoutUrl);

    response.cookies.set(
      "caj_purchase",
      createPurchaseSession({
        reference,
        expiresAt: Date.now() + 2 * 60 * 60 * 1000,
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 2 * 60 * 60,
      },
    );

    return response;
  } catch (error) {
    console.error("No fue posible crear el checkout de Wompi", error);
    return NextResponse.json(
      { error: "La pasarela de pago aun no esta configurada." },
      { status: 503 },
    );
  }
}
