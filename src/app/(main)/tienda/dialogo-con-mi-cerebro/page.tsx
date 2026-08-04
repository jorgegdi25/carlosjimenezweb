import type { Metadata } from "next";
import Image from 'next/image';
import styles from '../product.module.css';
import { getProduct, isProductReady } from "@/lib/products";
import BookPurchaseSection from "../BookPurchaseSection";
import BookTestimonialsSection from "../BookTestimonialsSection";
import DigitalPurchaseGuide from "@/components/DigitalPurchaseGuide";

export const metadata: Metadata = {
  title: "Diálogo con mi cerebro | Carlos Alberto Jiménez",
  description: "Libro PDF Diálogo con mi cerebro de Carlos Alberto Jiménez.",
};

export default function DialogoConMiCerebro() {
  const product = getProduct("dialogo-con-mi-cerebro");
  const ready = product ? isProductReady(product) : false;

  return (
    <article>
      {/* 1. Hero Banner */}
      <section className={styles.hero}>
        <div className={`container ${styles.hero__grid}`}>
          <Image 
            className={styles.hero__image}
            src="/assets/img/libro-dialogo-real.png" 
            alt="Dialogo Con Mi Cerebro" 
            width={400} 
            height={600} 
          />
          <div>
            <h1 className={styles.hero__title}>Diálogo con mi cerebro</h1>
            <p className={styles.hero__subtitle}>Comprendiendo la complejidad del cerebro</p>
          </div>
        </div>
      </section>

      {/* 2. Info and Video */}
      <section className={styles.info}>
        <div className={`container ${styles.info__grid}`}>
          <div>
            <h2 className={styles.info__heading}>
              Hoy en día la pedagogía actúa sobre la mente, no sobre el cerebro.
            </h2>
            <p className={styles.info__text}>
              Este libro te permitirá entender la complejidad del cerebro humano utilizando un lenguaje didáctico y sencillo. Es así como <strong>«Dialogo con mi cerebro»</strong> recurre a una estrategia pedagógica y comunicativa, casi que esquizofrénica para que a través de un diálogo entre la mente y el cerebro cualquier persona o profesional pueda acceder al maravilloso mundo del cerebro y de esta forma pueda generar múltiples aplicaciones especialmente en el campo de la Neuroeducación.
            </p>
          </div>
          <div>
            <iframe 
              className={styles.info__video}
              src="https://www.youtube.com/embed/hLBo7dJsPIA" 
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
              Comprenderás las diferentes teorías cerebrales para que las puedas aplicar de una forma sencilla y didáctica a tus prácticas de aula.
            </li>
            <li className={styles.learnings__item}>
              Utilizarás estrategias desde las neurociencias y la lúdica como herramienta básica para el aprendizaje.
            </li>
            <li className={styles.learnings__item}>
              Realizarás diagnósticos cerebrales y en especial las teorías del cerebro total.
            </li>
          </ul>
        </div>
      </section>

      {/* 4. Testimonials */}
      <DigitalPurchaseGuide kind="pdf-book" />

      <BookTestimonialsSection />

      {/* 5. Purchase */}
      <BookPurchaseSection ready={ready} checkoutPath="/api/wompi/checkout/dialogo-con-mi-cerebro" />
    </article>
  );
}
