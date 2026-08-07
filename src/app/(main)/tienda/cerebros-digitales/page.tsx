import type { Metadata } from "next";
import Image from 'next/image';
import styles from '../product.module.css';
import { getProduct, isProductReady } from "@/lib/products";
import BookPurchaseSection from "../BookPurchaseSection";
import BookTestimonialsSection from "../BookTestimonialsSection";
import DigitalPurchaseGuide from "@/components/DigitalPurchaseGuide";

export const metadata: Metadata = {
  title: "Cerebros Digitales | Libro interactivo de Carlos Alberto Jiménez",
  description: "Libro PDF Cerebros digitales de Carlos Alberto Jiménez.",
};

export default function CerebrosDigitales() {
  const product = getProduct("cerebros-digitales");
  const ready = product ? isProductReady(product) : false;

  return (
    <article>
      {/* 1. Hero Banner */}
      <section className={styles.hero}>
        <div className={`container ${styles.hero__grid}`}>
          <Image 
            className={styles.hero__image}
            src="/assets/img/libro-cerebros-real.png" 
            alt="Cerebros digitales" 
            width={400} 
            height={600} 
          />
          <div>
            <h1 className={styles.hero__title}>Cerebros digitales</h1>
            <p className={styles.hero__subtitle}>La mente humana un poder infinito</p>
          </div>
        </div>
      </section>

      {/* 2. Info and Video */}
      <section className={styles.info}>
        <div className={`container ${styles.info__grid}`}>
          <div>
            <h2 className={styles.info__heading}>
              ¡Un libro que te llevará a entender la Neuroeducación y la lúdica!
            </h2>
            <p className={styles.info__text}>
              En este libro, conocerás todas las teorías cerebrales sobre el cerebro humano, estrategias lúdicas y diagnósticos de estilos de pensamiento a partir de las teorías del cerebro total. En este sentido, es importante conocer como los nativos digitales procesan multitareas (5 o más), mientras que los adultos solo dos. También, prefieren los gráficos y las imágenes en 3D, en vez de textos y lo más fascinante es que escanean los textos (arriba y abajo) y no como nosotros lo hacemos de izquierda a derecha. Lo anterior es fundamental para comprender qué es la Neuroeducación.
            </p>
          </div>
          <div>
            <iframe 
              className={styles.info__video}
              src="https://www.youtube.com/embed/bYX50jlhGng" 
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
              Comprenderás cómo funciona la mente de las nuevas generaciones.
            </li>
            <li className={styles.learnings__item}>
              Utilizarás estrategias lúdicas como herramienta básica para el aprendizaje.
            </li>
            <li className={styles.learnings__item}>
              Realizarás diagnósticos cerebrales utilizando la teoría del cerebro total.
            </li>
          </ul>
        </div>
      </section>

      <DigitalPurchaseGuide kind="pdf-book" />

      {/* 4. Testimonials */}
      <BookTestimonialsSection />

      {/* 5. Purchase */}
      <BookPurchaseSection ready={ready} checkoutPath="/api/wompi/checkout/cerebros-digitales" />
    </article>
  );
}
