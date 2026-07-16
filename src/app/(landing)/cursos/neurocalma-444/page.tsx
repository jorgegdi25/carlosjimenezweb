"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Neurocalma444() {
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
              <Image className={`${styles['brand-mark']} ${styles['reveal-hero']}`} src="/images/landing-neurocalma/logo-nuerocalma.svg" alt="Neurocalma" width={180} height={40} />
              <p className={`${styles.eyebrow} ${styles['reveal-hero']}`}>Curso Online</p>
              <h1 className={styles['reveal-hero']}>
                <span>Neurocalma</span>
                <strong>444</strong>
              </h1>
              <p className={`${styles.subtitle} ${styles['reveal-hero']}`}>
                Guía práctica para disminuir el estrés y la ansiedad.
              </p>
              <p className={`${styles.promise} ${styles['reveal-hero']}`}>Más calma, más enfoque, mejor vida.</p>
            </div>

            <div
              className={`${styles['video-card']} ${styles['reveal-hero']} ${styles['has-video']}`}
              style={{ margin: '0 auto' }}
              aria-label="Video principal del curso"
              ref={videoCardRef}
            >
              <iframe
                id="course-video"
                title="Video del curso Neurocalma 444"
                src="https://www.youtube.com/embed/BSAG2MqW6f8?rel=0"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className={`${styles['cta-group']} ${styles['reveal-hero']}`} aria-label="Comprar o consultar por WhatsApp">
              <a
                className={`${styles.button} ${styles['button--buy']} ${styles['hotmart-link']}`}
                href="https://www.hotmart.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.button__icon} aria-hidden="true">
                  <Image src="/images/landing-neurocalma/YVbMwUeWeC.svg" alt="Hotmart Logo" width={24} height={24} />
                </span>
                <span>
                  <strong>Comprar ahora - $7 USD</strong>
                  <small>Pago 100% seguro a través de Hotmart</small>
                </span>
              </a>

              <a
                className={`${styles.button} ${styles['button--whatsapp']} ${styles['whatsapp-link']}`}
                href="https://wa.me/573104534160?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20el%20curso%20Neurocalma%20444."
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
            <h2 id="benefits-title">Este curso te ayudará a:</h2>
            <div className={styles.benefits__grid}>
              <article className={styles['benefit-card']}>
                <Image className={styles['benefit-badge']} src="/images/landing-neurocalma/benefit-reduce-green.png" alt="" width={64} height={64} />
                <h3>Reducir el estrés y la ansiedad</h3>
                <p>Técnicas sencillas para calmar tu sistema nervioso y recuperar tranquilidad.</p>
              </article>
              <article className={styles['benefit-card']}>
                <Image className={styles['benefit-badge']} src="/images/landing-neurocalma/benefit-calm-green.png" alt="" width={64} height={64} />
                <h3>Encontrar más calma y equilibrio</h3>
                <p>Prácticas accesibles para pausar, respirar y volver a tu centro.</p>
              </article>
              <article className={styles['benefit-card']}>
                <Image className={styles['benefit-badge']} src="/images/landing-neurocalma/benefit-focus-green.png" alt="" width={64} height={64} />
                <h3>Mejorar tu enfoque y productividad</h3>
                <p>Entrena tu mente para responder con claridad en lugar de reaccionar con tensión.</p>
              </article>
              <article className={styles['benefit-card']}>
                <Image className={styles['benefit-badge']} src="/images/landing-neurocalma/duerme.png" alt="" width={64} height={64} />
                <h3>Dormir mejor cada noche</h3>
                <p>Rutinas simples para descansar profundo y recuperar energía.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.author} aria-label="Autor del curso">
          <div className={`${styles['section-shell']} ${styles.author__card}`}>
            <Image className={styles.author__photo} src="/images/landing-neurocalma/logo-caj.png.webp" alt="Carlos Alberto Jiménez" width={120} height={120} />
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
              Neurocalma 444 reúne herramientas prácticas para vivir con menos estrés, más claridad
              y mayor bienestar emocional.
            </blockquote>
          </div>

          <div className={`${styles['section-shell']} ${styles['final-cta']}`}>
            <a
              className={`${styles.button} ${styles['button--buy']} ${styles['hotmart-link']}`}
              href="https://www.hotmart.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.button__icon} aria-hidden="true">
                <Image src="/images/landing-neurocalma/YVbMwUeWeC.svg" alt="Hotmart Logo" width={24} height={24} />
              </span>
              <span>
                <strong>Comprar ahora - $7 USD</strong>
                <small>Acceso inmediato al curso online</small>
              </span>
            </a>
            <a
              className={`${styles.button} ${styles['button--whatsapp']} ${styles['whatsapp-link']}`}
              href="https://wa.me/573104534160?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20el%20curso%20Neurocalma%20444."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.button__icon} aria-hidden="true">
                <Image src="/images/landing-neurocalma/WM5D7vLcXe.svg" alt="WhatsApp Icon" width={24} height={24} />
              </span>
              <span>
                <strong>Resolver dudas por WhatsApp</strong>
                <small>Te explicamos cómo funciona el curso</small>
              </span>
            </a>
          </div>
        </section>

        <section className={styles.trust} aria-label="Información de confianza">
          <div className={`${styles['section-shell']} ${styles.trust__grid}`}>
            <div>
              <Image src="/images/landing-neurocalma/kLnsBmT16B.svg" alt="Seguridad" width={24} height={24} />
              <p>Pago 100% seguro a través de Hotmart</p>
            </div>
            <div>
              <Image src="/images/landing-neurocalma/DBjo4kDpcl.svg" alt="Reloj" width={24} height={24} />
              <p>Acceso inmediato al curso</p>
            </div>
            <div>
              <Image src="/images/landing-neurocalma/rlWg8lQxtc.svg" alt="Garantía" width={24} height={24} />
              <p>Garantía de satisfacción</p>
            </div>
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
          href="https://www.hotmart.com/"
          className={`${styles.button} ${styles['button--buy']}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.button__icon}>
            <Image src="/images/landing-neurocalma/YVbMwUeWeC.svg" alt="" width={24} height={24} />
          </span>
          <strong>Comprar ahora - $7 USD</strong>
        </a>
      </div>
    </div>
  );
}
