import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Cerebros digitales | Carlos Alberto Jimenez",
  description: "Libro PDF Cerebros digitales de Carlos Alberto Jimenez.",
};

export default function CerebrosDigitales() {
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
            <a className="button button--primary" href="#" data-wompi-product="cerebros-digitales">Comprar con Wompi</a>
          </div>
        </div>
      </div>
    </section>
  );
}
