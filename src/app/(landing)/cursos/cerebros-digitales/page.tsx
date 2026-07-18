import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getProduct, isProductReady } from "@/lib/products";

import styles from "./page.module.css";

const WHATSAPP_URL =
  "https://wa.me/573104534160?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20la%20Biblioteca%20Interactiva%20Cerebros%20Digitales.";

const inclusions = [
  {
    icon: "▶",
    title: "Videos explicativos",
    copy: "Explicaciones claras y visuales para comprender cada concepto.",
  },
  {
    icon: "◉",
    title: "Conversaciones tipo podcast",
    copy: "Diálogos para profundizar, conectar ideas y reflexionar.",
  },
  {
    icon: "▤",
    title: "Libro digital",
    copy: "Consulta el texto de Cerebros digitales siempre que lo necesites.",
  },
  {
    icon: "✦",
    title: "Diagnósticos interactivos",
    copy: "Reconoce cómo aprende tu cerebro con recursos diseñados por el autor.",
    href: "/diagnosticos/cerebros-digitales",
  },
];

const steps = [
  {
    number: "01",
    title: "Realiza el pago",
    copy: "Wompi procesa la compra de forma segura y confirma la transacción.",
  },
  {
    number: "02",
    title: "Recibe tu acceso",
    copy: "La invitación llega al mismo correo de Google utilizado durante el pago.",
  },
  {
    number: "03",
    title: "Aprende a tu ritmo",
    copy: "Ingresa desde computador, tableta o celular y avanza por cada recurso.",
  },
];

const courseModules = [
  {
    number: "00",
    title: "Introducción",
    copy: "Una bienvenida para entrar en la experiencia y ubicar las ideas centrales del recorrido.",
    lessons: ["Presentación de Cerebros digitales"],
  },
  {
    number: "01",
    title: "El cerebro digital",
    copy: "Comprende los cambios en la forma de aprender, relacionarnos y vivir en la cultura digital.",
    lessons: ["Introducción al capítulo", "El cerebro digital", "Nativos digitales", "El cerebro digital del adolescente"],
  },
  {
    number: "02",
    title: "Revolución digital y consumo",
    copy: "Conecta la transformación tecnológica con el neuromarketing, las neuronas espejo y los estilos de consumo.",
    lessons: ["Introducción al capítulo", "Revolución digital", "Neuromarketing digital", "Neuronas espejo", "Desarrollo y estilos de consumo"],
  },
  {
    number: "03",
    title: "Lúdica y juego digital",
    copy: "Explora el juego como lenguaje, experiencia de aprendizaje y herramienta de transformación.",
    lessons: ["Introducción al capítulo", "La lúdica digital", "Ludoterapias digitales", "Teorías del juego"],
  },
  {
    number: "04",
    title: "Educación digital y artística",
    copy: "Mira las posibilidades educativas y creativas que se abren cuando comprendemos la cultura digital.",
    lessons: ["Introducción al capítulo", "Educación digital", "Educación artística"],
  },
  {
    number: "05",
    title: "Diagnósticos cerebrales",
    copy: "Cierra el recorrido aplicando lo aprendido con una mirada práctica y orientativa sobre el cerebro.",
    lessons: ["Diagnósticos cerebrales"],
  },
];

export const metadata: Metadata = {
  title: "Cerebros digitales | Biblioteca interactiva",
  description:
    "Una experiencia interactiva de Carlos Alberto Jiménez para comprender cómo aprende el cerebro en la era digital y de la inteligencia artificial.",
};

export default function CerebrosDigitalesLanding() {
  const product = getProduct("cerebros-digitales-interactivo");
  const ready = product ? isProductReady(product) : false;
  const purchaseHref = ready
    ? "/api/wompi/checkout/cerebros-digitales-interactivo"
    : WHATSAPP_URL;
  const purchaseLabel = ready
    ? "Quiero comenzar ahora"
    : "Solicitar activación";

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="#inicio" aria-label="Biblioteca interactiva Cerebros digitales">
          <Image
            className={styles.brandMark}
            src="/assets/img/logo-carlos-alberto-jimenez.png"
            alt=""
            width={76}
            height={76}
            priority
          />
          <span>
            <strong>Biblioteca interactiva</strong>
            <small>Carlos Alberto Jiménez</small>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Navegación de la biblioteca">
          <a href="#inicio">Inicio</a>
          <a href="#contenido">Contenido</a>
          <a href="#incluye">¿Qué incluye?</a>
          <a href="#funciona">Cómo funciona</a>
          <a href="#autor">Autor</a>
          <Link href="/diagnosticos/cerebros-digitales">Diagnóstico</Link>
          <a href="#acceso">Acceso</a>
        </nav>

        <details className={styles.mobileMenu}>
          <summary aria-label="Abrir menú">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <nav aria-label="Navegación móvil">
            <a href="#inicio">Inicio</a>
            <a href="#contenido">Contenido</a>
            <a href="#incluye">¿Qué incluye?</a>
            <a href="#funciona">Cómo funciona</a>
            <a href="#autor">Autor</a>
            <Link href="/diagnosticos/cerebros-digitales">Diagnóstico</Link>
            <a href="#acceso">Acceso</a>
          </nav>
        </details>

        <a
          className={styles.headerCta}
          href="#acceso"
          aria-label="Ver opciones de acceso"
        >
          <span aria-hidden="true">▣</span>
          Acceso ilimitado
        </a>
      </header>

      <main>
        <section className={styles.hero} id="inicio">
          <div className={styles.shell}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>Libro + experiencia multimedia</p>
                <h1>
                  Cerebros
                  <span>digitales</span>
                </h1>
                <p className={styles.heroSubtitle}>e inteligencia artificial</p>
                <span className={styles.titleRule} aria-hidden="true"></span>
                <p className={styles.heroLead}>
                  Comprende cómo aprende el cerebro con una experiencia
                  interactiva basada en la obra de{" "}
                  <strong>Carlos Alberto Jiménez.</strong>
                </p>
                <div className={styles.heroActions}>
                  <a className={styles.primaryButton} href="#acceso">
                    Comenzar ahora <span aria-hidden="true">→</span>
                  </a>
                  <a className={styles.secondaryButton} href="#incluye">
                    <span className={styles.playMini} aria-hidden="true">▶</span>
                    Descubre la experiencia
                  </a>
                </div>
                <div className={styles.proof}>
                  <div className={styles.proofFaces} aria-hidden="true">
                    <Image src="/assets/img/carlos-2.png" alt="" width={42} height={42} />
                    <Image src="/assets/img/logo-carlos-alberto-jimenez.png" alt="" width={42} height={42} />
                    <Image src="/assets/img/carlos-hero.webp" alt="" width={42} height={42} />
                  </div>
                  <p>Una propuesta construida a partir de décadas de investigación, escritura y docencia.</p>
                </div>
              </div>

              <div className={styles.videoColumn}>
                <div className={styles.videoFrame}>
                  <iframe
                    src="https://www.youtube.com/embed/s0JRVuXEuto?rel=0"
                    title="Presentación de Carlos Alberto Jiménez"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className={styles.videoCaption}>
                  <span className={styles.captionArrow} aria-hidden="true">↗</span>
                  <p>
                    <strong>Video de bienvenida de Carlos Alberto Jiménez</strong>
                    Conoce al autor y el enfoque de esta experiencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.curriculum} id="contenido">
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <p>Una ruta completa de aprendizaje</p>
              <h2>¿Qué vas a encontrar dentro?</h2>
              <span className={styles.headingLine} aria-hidden="true"></span>
            </div>
            <div className={styles.curriculumIntro}>
              <p>
                La biblioteca está organizada para que avances desde la
                introducción hasta la aplicación práctica, con contenidos que
                puedes volver a consultar cuando lo necesites.
              </p>
              <div className={styles.curriculumStats} aria-label="Resumen del contenido">
                <span><strong>18</strong> videos</span>
                <span><strong>5</strong> capítulos</span>
                <span><strong>3</strong> podcasts</span>
                <span><strong>1</strong> libro PDF</span>
              </div>
            </div>
            <div className={styles.moduleGrid}>
              {courseModules.map((module) => (
                <article className={styles.moduleCard} key={module.number}>
                  <div className={styles.moduleHeader}>
                    <span>{module.number}</span>
                    <p>{module.lessons.length} {module.lessons.length === 1 ? "recurso" : "recursos"}</p>
                  </div>
                  <h3>{module.title}</h3>
                  <p className={styles.moduleCopy}>{module.copy}</p>
                  <ul>
                    {module.lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <div className={styles.resourceStrip}>
              <div>
                <span className={styles.resourceIcon} aria-hidden="true">◉</span>
                <p><strong>Podcast</strong> Tres conversaciones para escuchar y profundizar.</p>
              </div>
              <div>
                <span className={styles.resourceIcon} aria-hidden="true">▤</span>
                <p><strong>Libro digital</strong> La obra completa como material de consulta.</p>
              </div>
              <div>
                <span className={styles.resourceIcon} aria-hidden="true">✦</span>
                <p><strong>Diagnóstico</strong> Una experiencia interactiva para aplicar lo aprendido.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={styles.experience}
          aria-label="La biblioteca se adapta a computador, tableta y celular"
        >
          <div className={styles.shell}>
            <div className={styles.experienceScene}>
              <Image
                className={styles.experienceImage}
                src="/assets/img/biblioteca-cerebros-dispositivos.webp"
                alt="Biblioteca interactiva Cerebros Digitales disponible en computador, tableta y celular"
                width={1536}
                height={1024}
                sizes="(max-width: 620px) calc(100vw - 28px), (max-width: 1240px) calc(100vw - 40px), 1180px"
              />
            </div>
          </div>
        </section>

        <section className={styles.includes} id="incluye">
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <p>Todo en un solo acceso</p>
              <h2>¿Qué incluye la biblioteca?</h2>
            </div>
            <div className={styles.inclusionGrid}>
              {inclusions.map((item) => (
                <article key={item.title}>
                  <span className={styles.featureIcon} aria-hidden="true">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  {item.href && (
                    <Link className={styles.featureLink} href={item.href}>
                      Hacer diagnóstico <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.howItWorks} id="funciona">
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <p>Ingreso sencillo</p>
              <h2>Del pago al aprendizaje en tres pasos</h2>
            </div>
            <div className={styles.stepsGrid}>
              {steps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.author} id="autor">
          <div className={`${styles.shell} ${styles.authorGrid}`}>
            <div className={styles.authorPortrait}>
              <Image
                src="/assets/img/carlos-hero.webp"
                alt="Carlos Alberto Jiménez"
                width={500}
                height={537}
                sizes="(max-width: 760px) 78vw, 360px"
              />
            </div>
            <div className={styles.authorCopy}>
              <p className={styles.eyebrow}>Conoce al autor</p>
              <h2>Carlos Alberto Jiménez</h2>
              <p className={styles.authorRole}>
                Escritor, investigador y neuropedagogo
              </p>
              <p className={styles.authorBio}>
                Magíster en comunicación educativa y conferencista
                internacional. Su trabajo conecta la neuroeducación, la lúdica,
                el juego y la cultura digital para explicar cómo aprendemos.
              </p>
              <div className={styles.authorFacts} aria-label="Trayectoria del autor">
                <p><strong>26</strong><span>libros publicados</span></p>
                <p><strong>40+</strong><span>años de experiencia</span></p>
              </div>
              <blockquote>
                <p>
                  “Aprender sobre el cerebro también es aprender a observar cómo
                  vivimos, pensamos y nos relacionamos con la tecnología.”
                </p>
                <cite>Carlos Alberto Jiménez</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <section className={styles.access} id="acceso">
          <div className={`${styles.shell} ${styles.accessBand}`}>
            <div className={styles.accessSummary}>
              <span className={styles.lockIcon} aria-hidden="true">▣</span>
              <div>
                <p>Acceso completo</p>
                <ul>
                  <li>Acceso personal mediante Google Drive</li>
                  <li>Disponible desde cualquier dispositivo</li>
                  <li>Pago único y seguro</li>
                </ul>
              </div>
            </div>
            <div className={styles.price}>
              <strong>$50.000</strong>
              <span>COP · pago único</span>
              <small>Pago 100% seguro con Wompi</small>
            </div>
            <div className={styles.buyColumn}>
              <a
                className={styles.purchaseButton}
                href={purchaseHref}
                target={ready ? undefined : "_blank"}
                rel={ready ? undefined : "noopener noreferrer"}
              >
                {purchaseLabel} <span aria-hidden="true">→</span>
              </a>
              <p>
                {ready
                  ? "Google Drive habilitará el acceso al correo utilizado en la compra."
                  : "La venta se activará cuando Google Drive esté conectado."}
              </p>
            </div>
          </div>
        </section>

        <section className={styles.trust}>
          <div className={`${styles.shell} ${styles.trustGrid}`}>
            <p><span aria-hidden="true">◇</span> Más de 40 años de investigación y experiencia</p>
            <p><span aria-hidden="true">✓</span> Contenido basado en la obra del autor</p>
            <p><span aria-hidden="true">▣</span> Disponible en computador, tableta y celular</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.shell} ${styles.footerGrid}`}>
          <Link className={styles.footerBrand} href="/">
            <Image
              src="/assets/img/logo-carlos-alberto-jimenez.png"
              alt=""
              width={54}
              height={54}
            />
            <span>
              <strong>Biblioteca interactiva</strong>
              <small>Carlos Alberto Jiménez</small>
            </span>
          </Link>
          <nav aria-label="Información legal">
            <Link href="/contacto">Contacto</Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
