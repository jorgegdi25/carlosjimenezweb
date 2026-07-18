"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function CerebrosDigitalesLanding() {
  const heroRef = useRef<HTMLElement>(null);
  const videoCardRef = useRef<HTMLDivElement>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
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

    const revealItems = document.querySelectorAll(
      `.${styles.benefits} h2, .${styles['benefit-card']}, .${styles.author__photo}, .${styles.author__bio}, .${styles.author} blockquote, .${styles['final-cta']}, .${styles.trust__grid}, .${styles.footer}, .${styles['reveal-hero']}`
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
          <div className={styles.hero__shade}></div>
          <div className={styles.hero__content} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className={styles.hero__intro}>
              <Image className={`${styles['brand-mark']} ${styles['reveal-hero']}`} src="/assets/img/logo-carlos-alberto-jimenez.png" alt="Cerebros Digitales" width={80} height={80} style={{ objectFit: 'contain' }} />
              <p className={`${styles.eyebrow} ${styles['reveal-hero']}`}>Libro interactivo</p>
              <h1 className={styles['reveal-hero']}>
                <span>CEREBROS</span>
                <strong>DIGITALES</strong>
              </h1>
              <p className={`${styles.subtitle} ${styles['reveal-hero']}`}>
                e inteligencia artificial
              </p>
              <p className={`${styles.promise} ${styles['reveal-hero']}`}>Comprende cómo aprende el cerebro en la era digital.</p>
            </div>

            <div
              className={`${styles['video-card']} ${styles['reveal-hero']} ${styles['has-video']}`}
              style={{ margin: '0 auto' }}
              aria-label="Video principal del curso"
              ref={videoCardRef}
            >
              <iframe
                id="course-video"
                title="Video Cerebros Digitales"
                src="https://www.youtube.com/embed/bYX50jlhGng?rel=0"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className={`${styles['cta-group']} ${styles['reveal-hero']}`} aria-label="Comprar o consultar por WhatsApp">
              <Link
                className={`${styles.button} ${styles['button--buy']}`}
                href="/api/wompi/checkout/cerebros-digitales-interactivo"
              >
                <span className={styles.button__icon} aria-hidden="true">
                  <Image src="/images/landing-neurocalma/kLnsBmT16B.svg" alt="" width={24} height={24} />
                </span>
                <span>
                  <strong>Comprar ahora - $30.000 COP</strong>
                  <small>Pago seguro con Wompi y acceso inmediato</small>
                </span>
              </Link>

              <a
                className={`${styles.button} ${styles['button--whatsapp']} ${styles['whatsapp-link']}`}
                href="https://wa.me/573104534160?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20la%20Biblioteca%20Interactiva%20Cerebros%20Digitales."
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.button__icon} aria-hidden="true">
                  <Image src="/images/landing-neurocalma/WM5D7vLcXe.svg" alt="WhatsApp Icon" width={24} height={24} />
                </span>
                <span>
                  <strong>¿Tienes dudas? Hablamos por WhatsApp</strong>
                  <small>Te ayudamos antes de comprar</small>
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.benefits} aria-labelledby="benefits-title">
          <div className={styles['section-shell']}>
            <h2 id="benefits-title">El curso Cerebros Digitales incluye:</h2>
            <div className={styles.benefits__grid}>
              <article className={styles['benefit-card']}>
                <div className={styles['benefit-badge']}>
                  <Image src="/images/landing-cerebros/badge_videos.png" alt="18 videos" width={120} height={120} />
                </div>
                <h3>18 videos organizados en 5 capítulos.</h3>
              </article>
              <article className={styles['benefit-card']}>
                <div className={styles['benefit-badge']}>
                  <Image src="/images/landing-cerebros/badge_podcast.png" alt="3 podcasts" width={120} height={120} />
                </div>
                <h3>3 conversaciones tipo podcast.</h3>
              </article>
              <article className={styles['benefit-card']}>
                <div className={styles['benefit-badge']}>
                  <Image src="/images/landing-cerebros/badge_libro.png" alt="Libro PDF" width={120} height={120} />
                </div>
                <h3>El libro completo en PDF.</h3>
              </article>
              <article className={styles['benefit-card']}>
                <div className={styles['benefit-badge']}>
                  <Image src="/images/landing-cerebros/badge_diagnostico.png" alt="Diagnóstico interactivo" width={120} height={120} />
                </div>
                <h3>Diagnóstico interactivo.</h3>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.author} aria-label="Autor del curso">
          <div className={`${styles['section-shell']} ${styles.author__card}`}>
            <Image className={styles.author__photo} src="/assets/img/carlos-hero.webp" alt="Carlos Alberto Jiménez" width={120} height={120} style={{ objectFit: 'cover' }} />
            <div className={styles.author__bio}>
              <h2>Carlos Alberto Jiménez</h2>
              <p>
                Magíster en comunicación educativa, químico egresado de la Universidad Tecnológica
                de Pereira y licenciado en áreas técnicas con formación en tecnología química.
              </p>
              <p>
                Asesor de proyectos, conferencista internacional y autor de 26 libros sobre
                neuroeducación lúdica, juego y neuromarketing.
              </p>
            </div>
            <blockquote>
              Cerebros Digitales reúne el libro interactivo, videos y recursos para comprender profundamente el aprendizaje en la era de la inteligencia artificial.
            </blockquote>
          </div>

          <div className={`${styles['section-shell']} ${styles['final-cta']}`}>
            <Link
              className={`${styles.button} ${styles['button--buy']}`}
              href="/api/wompi/checkout/cerebros-digitales-interactivo"
            >
              <span className={styles.button__icon} aria-hidden="true">
                <Image src="/images/landing-neurocalma/kLnsBmT16B.svg" alt="" width={24} height={24} />
              </span>
              <span>
                <strong>Comprar ahora - $30.000 COP</strong>
                <small>Acceso inmediato al curso online</small>
              </span>
            </Link>
            <a
              className={`${styles.button} ${styles['button--whatsapp']} ${styles['whatsapp-link']}`}
              href="https://wa.me/573104534160?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20la%20Biblioteca%20Interactiva%20Cerebros%20Digitales."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.button__icon} aria-hidden="true">
                <Image src="/images/landing-neurocalma/WM5D7vLcXe.svg" alt="WhatsApp Icon" width={24} height={24} />
              </span>
              <span>
                <strong>Resolver dudas por WhatsApp</strong>
                <small>Te explicamos cómo funciona</small>
              </span>
            </a>
          </div>
        </section>
      </main>

      <div className={`${styles['sticky-cta']} ${isStickyVisible ? styles['is-visible'] : ''}`} aria-hidden={!isStickyVisible}>
        <div className={styles['sticky-cta__inner']}>
          <div className={styles['sticky-cta__content']}>
            <div className={styles['sticky-cta__price']}>
              <span>Biblioteca interactiva Cerebros Digitales</span>
              <strong>$30.000 COP</strong>
            </div>
            <Link
              className={`${styles.button} ${styles['button--buy']} ${styles['button--small']}`}
              href="/api/wompi/checkout/cerebros-digitales-interactivo"
            >
              Comprar ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
