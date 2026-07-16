import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Respirar para vivir mejor | Carlos Alberto Jimenez",
  description: "Curso digital Respirar para vivir mejor, de la ansiedad a la tranquilidad.",
};

export default function RespirarParaVivirMejor() {
  return (
    <section className="product-page">
      <div className="container product-page__grid">
        <Image src="/assets/img/respirar-para-vivir.jpg" alt="Respirar para vivir mejor" width={400} height={600} />
        <div>
          <p className="product-tag">Curso digital</p>
          <h1>Respirar para vivir mejor</h1>
          <p>De la ansiedad a la tranquilidad. Un curso practico para trabajar respiracion consciente, reducir estres y recuperar calma en la vida cotidiana.</p>
          <ul className="product-list">
            <li>Enfoque practico y aplicable.</li>
            <li>Orientado al bienestar emocional.</li>
            <li>Preparado para pago individual con Wompi.</li>
          </ul>
          <div className="product-buy product-buy--wide">
            <span className="product-price">USD 10</span>
            <a className="button button--primary" href="#" data-wompi-product="respirar-para-vivir-mejor">Comprar con Wompi</a>
          </div>
        </div>
      </div>
    </section>
  );
}
