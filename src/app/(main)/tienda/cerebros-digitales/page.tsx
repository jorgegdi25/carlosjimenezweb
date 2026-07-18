import type { Metadata } from "next";
import Image from 'next/image';
import styles from '../product.module.css';
import { getProduct, isProductReady } from "@/lib/products";

export const metadata: Metadata = {
  title: "Cerebros digitales | Carlos Alberto Jimenez",
  description: "Libro PDF Cerebros digitales de Carlos Alberto Jimenez.",
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

      {/* 3. Learnings and CTA */}
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
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            {ready ? (
              <form action="/api/wompi/checkout/cerebros-digitales" method="get">
                <button className={styles.cta__button} type="submit">
                  🛒 Adquirir el libro
                </button>
              </form>
            ) : (
              <span className={styles.cta__button} style={{ opacity: 0.5, cursor: 'not-allowed' }}>Próximamente</span>
            )}
            
            <p style={{ color: 'var(--muted)', fontSize: '14px', maxWidth: '400px', margin: '0 auto' }}>
              <strong>Después de pagar:</strong> pulsa <em>Volver al comercio</em> en Wompi para descargar tu libro.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section className={styles.testimonials}>
        <div className="container">
          <h2 className={styles.testimonials__heading}>+1000 Lectores Felices</h2>
          <p className={styles.testimonials__text}>
            "El libro Pedagogía de la práctica educativa del siglo xxi dentro de sus autores contó con los aportes teóricos del Dr. Carlos Alberto Jiménez para el capitulo 1 los cuales han sido de gran utilidad para nuera editorial en México."
          </p>
          <p className={styles.testimonials__author}>Editorial MAP porrúa - Universidad Autónoma de México</p>
        </div>
      </section>
    </article>
  );
}
