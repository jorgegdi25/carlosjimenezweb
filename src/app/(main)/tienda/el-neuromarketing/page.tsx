import type { Metadata } from "next";
import Image from 'next/image';
import styles from '../product.module.css';
import { getProduct, isProductReady } from "@/lib/products";

export const metadata: Metadata = {
  title: "El Neuromarketing y el consumidor | Carlos Alberto Jimenez",
  description: "Libro PDF El Neuromarketing y el consumidor de Carlos Alberto Jimenez.",
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

      {/* 3. Learnings and CTA */}
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
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            {ready ? (
              <form action="/api/wompi/checkout/el-neuromarketing" method="get">
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
            "Este libro lo guiará para mejorar sus ventas y le ayudará a alcanzar la libertad financiera que anhela. Muy detallado y bien explicado. ¡Fue de gran utilidad para mi empresa!"
          </p>
          <p className={styles.testimonials__author}>Londonred - Carlos Londoño</p>
        </div>
      </section>
    </article>
  );
}
