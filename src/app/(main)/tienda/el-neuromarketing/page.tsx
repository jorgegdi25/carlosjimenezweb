import type { Metadata } from "next";
import Image from 'next/image';

import { getProduct, isProductReady } from "@/lib/products";

export const metadata: Metadata = {
  title: "El Neuromarketing | Carlos Alberto Jimenez",
  description: "Libro PDF El Neuromarketing de Carlos Alberto Jimenez.",
};

export default function ElNeuromarketing() {
  const product = getProduct("el-neuromarketing");
  const ready = product ? isProductReady(product) : false;

  return (
    <section className="product-page">
      <div className="container product-page__grid">
        <Image src="/assets/img/libro-neuromarketing-real.png" alt="El Neuromarketing" width={400} height={600} />
        <div>
          <p className="product-tag">Libro PDF</p>
          <h1>El Neuromarketing</h1>
          <p>Un acercamiento a las emociones, el cerebro, el branding y las decisiones de consumo desde la mirada de Carlos Alberto Jimenez.</p>
          <ul className="product-list">
            <li>Formato digital PDF.</li>
            <li>Ideal para educadores, consultores y equipos de mercadeo.</li>
            <li>Producto individual listo para Wompi.</li>
          </ul>
          <div className="product-buy product-buy--wide">
            <span className="product-price">$20.000 COP</span>
            {ready ? (
              <form action="/api/wompi/checkout/el-neuromarketing" method="get">
                <button className="button button--primary" type="submit">Comprar con Wompi</button>
              </form>
            ) : (
              <span className="button button--disabled">Proximamente</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
