import type { Metadata } from "next";
import Image from 'next/image';

import { getProduct, isProductReady } from "@/lib/products";

export const metadata: Metadata = {
  title: "Dialogo Con Mi Cerebro | Carlos Alberto Jimenez",
  description: "Libro PDF Dialogo Con Mi Cerebro de Carlos Alberto Jimenez.",
};

export default function DialogoConMiCerebro() {
  const product = getProduct("dialogo-con-mi-cerebro");
  const ready = product ? isProductReady(product) : false;

  return (
    <section className="product-page">
      <div className="container product-page__grid">
        <Image src="/assets/img/libro-dialogo-real.png" alt="Dialogo Con Mi Cerebro" width={400} height={600} />
        <div>
          <p className="product-tag">Libro PDF</p>
          <h1>Dialogo Con Mi Cerebro</h1>
          <p>Una publicacion sobre pensamiento, cerebro y experiencia interior para lectores interesados en comprender la mente desde una mirada educativa y humana.</p>
          <ul className="product-list">
            <li>Formato digital PDF.</li>
            <li>Producto individual listo para Wompi.</li>
            <li>Precio base del catalogo actual.</li>
          </ul>
          <div className="product-buy product-buy--wide">
            <span className="product-price">$20.000 COP</span>
            {ready ? (
              <>
                <form action="/api/wompi/checkout/dialogo-con-mi-cerebro" method="get">
                  <button className="button button--primary" type="submit">Comprar con Wompi</button>
                </form>
                <p className="purchase-instructions">
                  <strong>Después de pagar:</strong> pulsa <em>Volver al comercio</em> en Wompi para descargar tu libro.
                </p>
              </>
            ) : (
              <span className="button button--disabled">Proximamente</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
