import type { Metadata } from "next";
import Image from 'next/image';

import { getProduct, isProductReady } from "@/lib/products";

export const metadata: Metadata = {
  title: "Cerebros digitales | Carlos Alberto Jimenez",
  description: "Libro PDF Cerebros digitales de Carlos Alberto Jimenez.",
};

export default function CerebrosDigitales() {
  const product = getProduct("cerebros-digitales");
  const ready = product ? isProductReady(product) : false;

  return (
    <section className="product-page">
      <div className="container product-page__grid">
        <Image src="/assets/img/libro-cerebros-real.png" alt="Cerebros digitales" width={400} height={600} />
        <div>
          <p className="product-tag">Libro PDF</p>
          <h1>Cerebros digitales</h1>
          <p>Reflexiones sobre cultura digital, aprendizaje, atencion y nuevas formas de pensamiento en generaciones conectadas.</p>
          <ul className="product-list">
            <li>Formato digital PDF.</li>
            <li>Conecta con articulos del blog sobre nativos digitales.</li>
            <li>Producto individual listo para Wompi.</li>
          </ul>
          <div className="product-buy product-buy--wide">
            <span className="product-price">$20.000 COP</span>
            {ready ? (
              <>
                <form action="/api/wompi/checkout/cerebros-digitales" method="get">
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
