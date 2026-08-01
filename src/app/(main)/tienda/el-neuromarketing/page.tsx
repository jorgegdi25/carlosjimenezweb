import type { Metadata } from "next";
import Image from 'next/image';
import styles from '../product.module.css';
import { getProduct, isProductReady } from "@/lib/products";
import BookPurchaseSection from "../BookPurchaseSection";
import BookTestimonialsSection from "../BookTestimonialsSection";

export const metadata: Metadata = {
  title: "El neuromarketing y el consumidor | Carlos Alberto Jiménez",
  description: "Libro PDF El neuromarketing y el consumidor de Carlos Alberto Jiménez.",
};

export default function ElNeuromarketing() {
  const product = getProduct("el-neuromarketing");
  const ready = product ? isProductReady(product) : false;

  return (
    <article>
      {/* 1. Hero Banner */}
      <section className={styles.hero}>
        <div className={`container ${styles.hero__grid}`}>
          <Image 
            className={styles.hero__image}
            src="/assets/img/libro-neuromarketing-real.png" 
            alt="El Neuromarketing y el consumidor" 
            width={400} 
            height={600} 
          />
          <div>
            <h1 className={styles.hero__title}>Neuromarketing</h1>
            <p className={styles.hero__subtitle}>La mejor estrategia para captar clientes</p>
          </div>
        </div>
      </section>

      {/* 2. Info and Video */}
      <section className={styles.info}>
        <div className={`container ${styles.info__grid}`}>
          <div>
            <h2 className={styles.info__heading}>
              ¡Un libro que te llevará a aprender sobre la mente del consumidor!
            </h2>
            <p className={styles.info__text}>
              El Neuromarketing como herramienta de análisis emergente de la Neuroeconomía, pretende explicar como el cerebro humano se encuentra implicado en los diferentes usos y consumos del ser humano, bien sea para maximizar ganancias en forma lógica, racional, o también, por placer impulsivo, producto de todas las emociones que invaden el cerebro humano, y toda la corporalidad.
              <br /><br />
              En este libro, conocerás todo lo que necesitas saber para mejorar tus ventas físicas o en línea.
            </p>
          </div>
          <div>
            <iframe 
              className={styles.info__video}
              src="https://www.youtube.com/embed/PtfCcUYKyqs" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      {/* 3. Learnings */}
      <section className={styles.learnings}>
        <div className="container">
          <ul className={styles.learnings__list}>
            <li className={styles.learnings__item}>
              Comprenderás cómo venderle a la mente de los consumidores.
            </li>
            <li className={styles.learnings__item}>
              Aumentarás tus ventas utilizando los diagnósticos de consumo de este libro.
            </li>
            <li className={styles.learnings__item}>
              Generarás estrategias de marketing 4.0 para aumentar la productividad de tu empresa.
            </li>
          </ul>
        </div>
      </section>

      {/* 4. Testimonials */}
      <BookTestimonialsSection />

      {/* 5. Purchase */}
      <BookPurchaseSection ready={ready} checkoutPath="/api/wompi/checkout/el-neuromarketing" />
    </article>
  );
}
