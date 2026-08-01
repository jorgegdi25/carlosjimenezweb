import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Conoce la web de Carlos Alberto Jiménez | Neurociencia aplicada",
  description:
    "Descubre cursos, libros y recursos sobre neuroeducación, neuromarketing, lúdica, juego y bienestar emocional de Carlos Alberto Jiménez.",
};

const resources = [
  {
    number: "01",
    title: "Cursos para tu bienestar",
    description: "Programas prácticos para manejar el estrés, respirar mejor y recuperar la calma.",
    href: "/tienda#curso",
    icon: "course",
  },
  {
    number: "02",
    title: "26 libros publicados",
    description: "Obras sobre cerebro, educación, lúdica, creatividad y comportamiento humano.",
    href: "/tienda#libros",
    icon: "book",
  },
  {
    number: "03",
    title: "Lúdica y juego",
    description: "Ideas y experiencias para aprender, crear y transformar desde el juego.",
    href: "/servicios/ludica-y-juego",
    icon: "spark",
  },
  {
    number: "04",
    title: "Neuromarketing",
    description: "Conocimiento del cerebro aplicado a las marcas, las decisiones y las empresas.",
    href: "/servicios/neuromarketing",
    icon: "brain",
  },
  {
    number: "05",
    title: "Neuroeducación",
    description: "Herramientas para comprender cómo aprendemos y enriquecer la práctica educativa.",
    href: "/servicios/neuropedagogia",
    icon: "education",
  },
];

function ResourceIcon({ name }: { name: string }) {
  if (name === "book") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 9h11c3 0 5 2 5 5v25c0-3-2-5-5-5H8V9Zm32 0H29c-3 0-5 2-5 5v25c0-3 2-5 5-5h11V9Z" />
      </svg>
    );
  }

  if (name === "spark") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="m24 5 3.7 10.3L38 19l-10.3 3.7L24 33l-3.7-10.3L10 19l10.3-3.7L24 5Zm13 24 1.8 5.2L44 36l-5.2 1.8L37 43l-1.8-5.2L30 36l5.2-1.8L37 29Z" />
      </svg>
    );
  }

  if (name === "brain") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 12a8 8 0 0 0-15 4 7 7 0 0 0-2 12 8 8 0 0 0 8 10c4 0 7-3 9-6m0-20a8 8 0 0 1 15 4 7 7 0 0 1 2 12 8 8 0 0 1-8 10c-4 0-7-3-9-6m0-20v26M14 20c4 0 7 2 10 6m10-6c-4 0-7 2-10 6" />
      </svg>
    );
  }

  if (name === "education") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="m5 17 19-9 19 9-19 9L5 17Zm8 6v10c6 5 16 5 22 0V23m8-6v14" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M9 13h30v22H9V13Zm8 22v5m14-5v5M18 21h12m-12 7h7" />
    </svg>
  );
}

export default function ConoceMiWebPage() {
  return (
    <div className={styles.page}>
      <main>
        <section className={styles.hero} aria-labelledby="landing-title">
          <div className={styles.shell}>
            <div className={styles.brand}>
              <Image
                src="/assets/img/logo-carlos-alberto-jimenez.png"
                alt="Carlos Alberto Jiménez"
                width={64}
                height={64}
                priority
              />
              <div>
                <strong>Carlos Alberto Jiménez</strong>
                <span>Neurociencia, educación y bienestar</span>
              </div>
            </div>

            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>Conocimiento para transformar</p>
                <h1 id="landing-title">
                  <span>Neurociencia</span> para el bienestar, la educación y el éxito empresarial
                </h1>
                <p className={styles.lead}>
                  Ideas y herramientas sobre neuroeducación, neuromarketing, lúdica y desarrollo
                  emocional.
                </p>
                <div className={styles.heroActions}>
                  <Link className={styles.primaryButton} href="/">
                    Visitar mi web
                    <span aria-hidden="true">→</span>
                  </Link>
                  <a className={styles.secondaryButton} href="#video">
                    Ver video
                    <span aria-hidden="true">▶</span>
                  </a>
                </div>
                <p className={styles.proof}>26 libros publicados</p>
              </div>

              <div className={styles.heroFigure}>
                <Image
                  src="/assets/img/carlos-hero-clean.png"
                  alt="Carlos Alberto Jiménez sosteniendo un modelo de cerebro"
                  width={1024}
                  height={1024}
                  priority
                  sizes="(max-width: 760px) 92vw, 520px"
                />
                <p>Carlos Alberto Jiménez</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.resources} aria-labelledby="resources-title">
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Todo en un solo lugar</p>
              <h2 id="resources-title">¿Qué encontrarás en mi web?</h2>
              <p>
                Contenidos para comprender el cerebro y aplicar ese conocimiento a la vida, la
                educación y las organizaciones.
              </p>
            </div>

            <div className={styles.resourceGrid}>
              {resources.map((resource) => (
                <Link className={styles.resourceCard} href={resource.href} key={resource.title}>
                  <span className={styles.cardNumber}>{resource.number}</span>
                  <span className={styles.cardIcon}>
                    <ResourceIcon name={resource.icon} />
                  </span>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <span className={styles.cardLink}>Conocer más →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.videoSection} id="video" aria-labelledby="video-title">
          <div className={`${styles.shell} ${styles.videoGrid}`}>
            <div className={styles.videoCopy}>
              <p className={styles.eyebrow}>Conoce mi trayectoria</p>
              <h2 id="video-title">Neurociencia para aprender, vivir y transformar</h2>
              <p>
                Te invito a conocer mi trabajo, mis publicaciones y las herramientas que he creado
                para aportar al bienestar emocional y a una educación más humana.
              </p>
              <Link className={styles.primaryButton} href="/">
                Explorar la web
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className={styles.videoFrame}>
              <iframe
                src="https://www.youtube.com/embed/pRpPmaLtJy8?start=2&rel=0"
                title="Presentación de la web de Carlos Alberto Jiménez"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className={styles.finalCta} aria-label="Visitar la página web">
          <div className={styles.shell}>
            <p>Aprender sobre el cerebro puede cambiar la forma en que vivimos y educamos.</p>
            <h2>Te invito a descubrir mi web</h2>
            <Link className={styles.lightButton} href="/">
              Visitar carlosjimenez.vercel.app
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
