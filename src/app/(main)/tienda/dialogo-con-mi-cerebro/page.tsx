import type { Metadata } from "next";
import Image from 'next/image';
import styles from '../product.module.css';
import { getProduct, isProductReady } from "@/lib/products";

export const metadata: Metadata = {
  title: "Dialogo Con Mi Cerebro | Carlos Alberto Jimenez",
  description: "Libro PDF Dialogo Con Mi Cerebro de Carlos Alberto Jimenez.",
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

      {/* 3. Learnings and CTA */}
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
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            {ready ? (
              <form action="/api/wompi/checkout/dialogo-con-mi-cerebro" method="get">
                <button className={styles.cta__button} type="submit">
                  🛒 Adquirir el libro
                </button>
              </form>
            ) : (
              <span className={styles.cta__button} style={{ opacity: 0.5, cursor: 'not-allowed' }}>Próximamente</span>
            )}
            
            <div className={styles.checkoutWarning}>
              <p><span>Advertencia:</span></p>
              <ul>
                <li><strong>Después de pagar:</strong> pulsa <em>Volver al comercio</em> en Wompi para descargar tu libro.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section className={styles.testimonials}>
        <div className="container">
          <h2 className={styles.testimonials__heading}>+1000 Lectores Felices</h2>
          <p className={styles.testimonials__text}>
            "Nos encontramos muy agradecidos con la obra de Carlos Jimenez, pudimos realizar dos libros para nuestra especialización (Pedagogía Lúdica, Pedagogía de la Lúdica y la Creatividad)."
          </p>
          <p className={styles.testimonials__author}>Universidad Juan de Castellanos</p>
        </div>
      </section>
    </article>
  );
}
