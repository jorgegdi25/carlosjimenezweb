"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function RespirarParaVivirMejor() {
  const heroRef = useRef<HTMLElement>(null);
  const videoCardRef = useRef<HTMLDivElement>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    // 1. Intersection Observer for Sticky CTA
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsStickyVisible(!entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // 2. Scroll Reveal Logic
    const revealItems = document.querySelectorAll(
      `.${styles.benefits} h2, .${styles['benefit-card']}, .${styles.author__photo}, .${styles.author__bio}, .${styles.author} blockquote, .${styles.author__cta}, .${styles.footer}`
    );

    revealItems.forEach((item, index) => {
      item.classList.add(styles.reveal);
      (item as HTMLElement).style.setProperty(
        "--reveal-delay",
        `${Math.min(index * 70, 420)}ms`
      );
    });

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add(styles['is-visible']));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles['is-visible']);
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.18 }
      );

      revealItems.forEach((item) => revealObserver.observe(item));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <main>
        <section className={styles.hero} id="hero" ref={heroRef}>
          <div className={styles.hero__overlay}></div>
          <div className={styles.hero__content} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className={styles.hero__eyebrow}>Curso Online</p>
            <h1>
              <span>Respirar para</span>
              <span>vivir mejor</span>
              <strong>No más estrés</strong>
            </h1>
            <p className={styles.hero__subtitle}>
              Aprende a reducir el estrés y recuperar tu bienestar en minutos al día.
            </p>

            <div
              className={`${styles['video-card']} ${styles['has-video']}`}
              style={{ margin: '0 auto' }}
              aria-label="Video principal del curso"
              ref={videoCardRef}
            >
              <iframe
                id="course-video"
                title="Video del curso Respirar para vivir mejor"
                src="https://www.youtube.com/embed/uVIuv57-kBQ?rel=0"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className={styles['cta-group']} aria-label="Opciones de compra y ayuda">
              <a
                className={`${styles.button} ${styles['button--hotmart']} ${styles['hotmart-link']}`}
                id="hotmart-button"
                href="https://pay.hotmart.com/B88850286E?off=1xu83ubq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.button__icon} aria-hidden="true">
                  <Image src="/images/landing-respirar/YVbMwUeWeC.svg" alt="Hotmart Logo" width={24} height={24} />
                </span>
                <span>
                  <strong>Comprar ahora - $20 USD</strong>
                  <small>Pago 100% seguro a través de Hotmart</small>
                </span>
              </a>

              <a
                className={`${styles.button} ${styles['button--whatsapp']} ${styles['whatsapp-link']}`}
                id="whatsapp-button"
                href="https://wa.me/573104534160?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20curso%20Respirar%20para%20vivir%20mejor."
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.button__icon} aria-hidden="true">
                  <Image src="/images/landing-respirar/WM5D7vLcXe.svg" alt="WhatsApp Icon" width={24} height={24} />
                </span>
                <span>
                  <strong>¿Tienes dudas? Te ayudamos por WhatsApp</strong>
                  <small>Escríbenos y te explicamos cómo funciona el curso</small>
                </span>
              </a>
            </div>

            <div className={styles['trust-strip']} aria-label="Beneficios de compra">
              <div className={styles['trust-strip__item']}>
                <span aria-hidden="true">
                  <Image src="/images/landing-respirar/kLnsBmT16B.svg" alt="Seguridad" width={24} height={24} />
                </span>
                <p>Pago 100% seguro a través de Hotmart</p>
              </div>
              <div className={styles['trust-strip__item']}>
                <span aria-hidden="true">
                  <Image src="/images/landing-respirar/DBjo4kDpcl.svg" alt="Reloj" width={24} height={24} />
                </span>
                <p>Acceso inmediato al curso</p>
              </div>
              <div className={styles['trust-strip__item']}>
                <span aria-hidden="true">
                  <Image src="/images/landing-respirar/rlWg8lQxtc.svg" alt="Garantía" width={24} height={24} />
                </span>
                <p>Garantía de satisfacción</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.benefits} aria-labelledby="benefits-title">
          <div className={styles['section-shell']}>
            <h2 id="benefits-title">Este curso te ayudará a:</h2>
            <div className={styles.benefits__grid}>
              <article className={styles['benefit-card']}>
                <span className={styles['benefit-card__icon']} aria-hidden="true">
                  <Image className={styles['benefit-badge']} src="/images/landing-respirar/benefit-reduce-blue.png" alt="" width={64} height={64} />
                </span>
                <h3>Reducir el estrés de forma natural</h3>
                <p>Técnicas de respiración simples para calmar tu mente y volver a tu centro.</p>
              </article>
              <article className={styles['benefit-card']}>
                <span className={styles['benefit-card__icon']} aria-hidden="true">
                  <Image className={styles['benefit-badge']} src="/images/landing-respirar/benefit-focus-blue.png" alt="" width={64} height={64} />
                </span>
                <h3>Mejorar tu concentración y descanso</h3>
                <p>Más claridad mental durante el día y mejor calidad de sueño por la noche.</p>
              </article>
              <article className={styles['benefit-card']}>
                <span className={styles['benefit-card__icon']} aria-hidden="true">
                  <Image className={styles['benefit-badge']} src="/images/landing-respirar/benefit-calm-blue.png" alt="" width={64} height={64} />
                </span>
                <h3>Técnicas simples que puedes aplicar hoy</h3>
                <p>Ejercicios prácticos, fáciles de seguir y pensados para tu vida diaria.</p>
              </article>
              <article className={styles['benefit-card']}>
                <span className={styles['benefit-card__icon']} aria-hidden="true">
                  <Image className={styles['benefit-badge']} src="/images/landing-respirar/duerme.png" alt="" width={64} height={64} />
                </span>
                <h3>Resultados reales en tu bienestar</h3>
                <p>Más tranquilidad, equilibrio emocional y bienestar en pocos minutos al día.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.author} aria-label="Autor del curso">
          <div className={`${styles['section-shell']} ${styles.author__card}`}>
            <Image className={styles.author__photo} src="/images/landing-respirar/logo-caj.png.webp" alt="Carlos Alberto Jiménez" width={120} height={120} />
            <div className={styles.author__bio}>
              <h2>Carlos Alberto Jiménez</h2>
              <p>
                Magíster en comunicación educativa, químico egresado de la Universidad Tecnológica
                de Pereira y licenciado en áreas técnicas con formación en tecnología química.
              </p>
              <p>
                Ha sido asesor de proyectos, conferencista internacional y autor de 26 libros sobre
                neuroeducación lúdica, juego y neuromarketing.
              </p>
            </div>
            <blockquote>
              Este curso reúne herramientas prácticas para ayudarte a respirar mejor, manejar el
              estrés y recuperar bienestar en tu vida diaria.
            </blockquote>
          </div>
          <div className={`${styles['section-shell']} ${styles.author__cta}`}>
            <a
              className={`${styles.button} ${styles['button--hotmart']} ${styles['hotmart-link']}`}
              href="https://pay.hotmart.com/B88850286E?off=1xu83ubq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.button__icon} aria-hidden="true">
                <Image src="/images/landing-respirar/YVbMwUeWeC.svg" alt="Hotmart Logo" width={24} height={24} />
              </span>
              <span>
                <strong>Comprar ahora - $20 USD</strong>
                <small>Acceso inmediato al curso online</small>
              </span>
            </a>
            <a
              className={`${styles.button} ${styles['button--whatsapp']} ${styles['whatsapp-link']}`}
              href="https://wa.me/573104534160?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20curso%20Respirar%20para%20vivir%20mejor."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.button__icon} aria-hidden="true">
                <Image src="/images/landing-respirar/WM5D7vLcXe.svg" alt="WhatsApp Icon" width={24} height={24} />
              </span>
              <span>
                <strong>Resolver dudas por WhatsApp</strong>
                <small>Te explicamos cómo funciona el curso</small>
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="/" rel="noopener noreferrer">
          www.carlosalbertojimenez.com.co
        </Link>
      </footer>

      <div className={`${styles['sticky-cta']} ${isStickyVisible ? styles['is-visible'] : ''}`}>
        <a
          href="https://pay.hotmart.com/B88850286E?off=1xu83ubq"
          className={`${styles.button} ${styles['button--hotmart']}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.button__icon}>
            <Image src="/images/landing-respirar/YVbMwUeWeC.svg" alt="" width={24} height={24} />
          </span>
          <strong>Comprar ahora - $20 USD</strong>
        </a>
      </div>
    </div>
  );
}
