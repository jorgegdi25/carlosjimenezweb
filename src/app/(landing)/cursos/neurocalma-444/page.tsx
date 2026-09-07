import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  ChevronDown,
  Clock3,
  HeartPulse,
  Layers3,
  Mail,
  MessageCircle,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Wind,
} from "lucide-react";
import VisitorCounter from "@/components/VisitorCounter";
import styles from "./page.module.css";

const checkoutUrl = "/api/wompi/checkout/neurocalma-444";
const whatsappUrl =
  "https://wa.me/573104534160?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20la%20gu%C3%ADa%20Neurocalma%20444.";

const learningItems = [
  {
    icon: Wind,
    title: "Respiración y meditación",
  },
  {
    icon: HeartPulse,
    title: "Instrumentos para la relajación",
  },
  {
    icon: Sparkles,
    title: "Tapping cerebral",
  },
  {
    icon: Brain,
    title: "Estimulación del nervio vago",
  },
];

const modules = [
  "Comprender el estrés y el sistema nervioso",
  "Nervio vago y estimulación corporal",
  "Tapping y observación emocional",
  "Respiración consciente",
  "Neurotransmisores, alimentación y bienestar",
];

export default function Neurocalma444() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.topbar}>
        <div className={styles.shell}>
          <nav className={styles.nav} aria-label="Contenido de la guía">
            <a href="#aprendizajes">Qué aprenderás</a>
            <a href="#contenido">Contenido</a>
            <a href="#preguntas">Preguntas</a>
          </nav>
        </div>
      </header>

      <main>
        <section className={styles.hero} id="inicio">
          <div className={`${styles.shell} ${styles.heroCentered}`}>
            <Link href="#inicio" className={styles.heroLogo} aria-label="Volver al inicio de Neurocalma 444">
              <Image
                src="/images/landing-neurocalma/logo-nuerocalma.svg"
                alt="Neurocalma"
                width={210}
                height={96}
                priority
              />
            </Link>
            <h1>
              <span>Neurocalma</span>
              <strong>444</strong>
            </h1>
            <p className={styles.heroQuestion}>¿Sientes que el estrés domina tu vida?</p>
            <p className={styles.heroLead}>
              Aprende prácticas guiadas para calmar tus pensamientos, manejar mejor el estrés y
              recuperar momentos de tranquilidad.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href={checkoutUrl}>
                Comprar Neurocalma 444 por $30.000 COP
                <ArrowRight aria-hidden="true" />
              </a>
              <a className={styles.textLink} href="#aprendizajes">
                Ver qué aprenderás
              </a>
            </div>

            <p className={styles.paymentNote}>
              <ShieldCheck aria-hidden="true" /> Pago seguro con Wompi · Acceso digital inmediato
            </p>
          </div>
        </section>

        <section className={styles.courseFacts} aria-label="Resumen de la guía">
          <div className={`${styles.shell} ${styles.factGrid}`}>
            <div>
              <PlayCircle aria-hidden="true" />
              <span><strong>9 videos</strong> con guía paso a paso</span>
            </div>
            <div>
              <Clock3 aria-hidden="true" />
              <span><strong>1 h 44 min</strong> de contenido</span>
            </div>
            <div>
              <Layers3 aria-hidden="true" />
              <span><strong>5 módulos</strong> para aprender a tu ritmo</span>
            </div>
          </div>
        </section>

        <section className={styles.videoSection} aria-label="Video de presentación de Neurocalma 444">
          <div className={`${styles.shell} ${styles.videoWrap}`}>
            <div className={styles.videoPanel}>
              <div className={styles.videoFrame}>
                <iframe
                  title="Presentación de la guía Neurocalma 444"
                  src="https://www.youtube.com/embed/BSAG2MqW6f8?rel=0"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className={styles.videoCaption}>
                <PlayCircle aria-hidden="true" />
                <div>
                  <strong>Conoce Neurocalma 444</strong>
                  <span>
                    Mira el video y descubre cómo esta guía lleva las prácticas a tu día a día.
                  </span>
                </div>
              </div>
            </div>
            <a
              className={styles.videoWhatsapp}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden="true" />
              ¿Tienes dudas? Hablemos por WhatsApp
            </a>
          </div>
        </section>

        <section className={styles.learning} id="aprendizajes" aria-labelledby="learning-title">
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>Contenido práctico y claro</p>
              <h2 id="learning-title">Con esta guía aprenderás</h2>
            </div>

            <div className={styles.learningGrid}>
              {learningItems.map(({ icon: Icon, title }) => (
                <article className={styles.learningCard} key={title}>
                  <span className={styles.iconWrap}>
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.program} id="contenido" aria-labelledby="program-title">
          <div className={`${styles.shell} ${styles.programGrid}`}>
            <div className={styles.programContent}>
              <p className={styles.sectionEyebrow}>Una ruta fácil de seguir</p>
              <h2 id="program-title">Cinco módulos para pasar de la explicación a la práctica</h2>
              <ol className={styles.moduleList}>
                {modules.map((module, index) => (
                  <li key={module}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {module}
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </section>

        <section className={styles.author} aria-labelledby="author-title">
          <div className={`${styles.shell} ${styles.authorCard}`}>
            <div className={styles.authorPhoto}>
              <Image
                src="/images/landing-neurocalma/logo-caj.png.webp"
                alt="Carlos Alberto Jiménez, autor de Neurocalma 444"
                width={230}
                height={230}
              />
            </div>
            <div className={styles.authorCopy}>
              <p className={styles.sectionEyebrow}>Tu guía en este proceso</p>
              <h2 id="author-title">Carlos Alberto Jiménez</h2>
              <p>
                Magíster en comunicación educativa, conferencista internacional y autor de 26
                libros sobre neuroeducación, juego y neuromarketing.
              </p>
              <Link className={styles.authorWebsite} href="/">
                Visitar página web
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.faq} id="preguntas" aria-labelledby="faq-title">
          <div className={styles.shell}>
            <div className={styles.faqGrid}>
              <div className={styles.faqIntro}>
                <p className={styles.sectionEyebrow}>Antes de comenzar</p>
                <h2 id="faq-title">Preguntas frecuentes</h2>
                <p>Resolvemos las dudas más importantes para que sepas exactamente qué recibirás.</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden="true" /> ¿Tienes otra pregunta? Escríbenos
                </a>
              </div>

              <div className={styles.faqList}>
                <details>
                  <summary>
                    ¿Cómo funciona la compra y el acceso?
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <div className={styles.processSteps}>
                    <div>
                      <span>1</span>
                      <p>
                        <strong>Realiza el pago</strong>
                        Pulsa “Comprar Neurocalma 444” y paga de forma segura con las opciones
                        disponibles en Wompi.
                      </p>
                    </div>
                    <div>
                      <span>2</span>
                      <p>
                        <strong>Espera la confirmación</strong>
                        Wompi valida la transacción. Si aparece como pendiente, no pagues
                        nuevamente; algunas transferencias pueden tardar un poco más.
                      </p>
                    </div>
                    <div>
                      <span>3</span>
                      <p>
                        <strong>Recibe tu acceso</strong>
                        Cuando el pago sea aprobado, recibirás por correo el enlace personal para
                        abrir Neurocalma 444 en Google Drive.
                      </p>
                    </div>
                  </div>
                </details>
                <details>
                  <summary>
                    ¿Qué correo debo registrar para recibir el acceso?
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <p>
                    Registra el correo de tu cuenta de Google. Puede ser Gmail, Yahoo, Outlook u
                    otro, siempre que esté asociado a Google. Para abrir la guía, inicia sesión con
                    exactamente esa misma cuenta.
                  </p>
                </details>
                <details>
                  <summary>
                    ¿Cuánto dura y qué incluye?
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <p>
                    La guía incluye 9 videos organizados en 5 módulos, con una duración total
                    aproximada de 1 hora y 44 minutos. Encontrarás explicaciones y ejercicios de
                    respiración, tapping, visualización y estimulación corporal.
                  </p>
                </details>
                <details>
                  <summary>
                    ¿Esta guía sustituye la atención profesional?
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <p>
                    No. Neurocalma 444 es una guía educativa orientada al bienestar general. No
                    sustituye la valoración, el diagnóstico ni el tratamiento de un profesional de
                    la salud. Si presentas síntomas intensos o persistentes, consulta con un
                    profesional calificado.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.finalOffer}>
          <div className={`${styles.shell} ${styles.offerCard}`}>
            <div>
              <p className={styles.sectionEyebrow}>Empieza hoy</p>
              <h2>Regálate un espacio para comprender, respirar y practicar</h2>
              <p>Acceso inmediato a la guía completa por una inversión única.</p>
            </div>
            <div className={styles.offerAction}>
              <span>Guía completa en video</span>
              <strong>$30.000 COP</strong>
              <a className={styles.primaryButton} href={checkoutUrl}>
                Quiero comprar Neurocalma 444
                <ArrowRight aria-hidden="true" />
              </a>
              <small>
                <Mail aria-hidden="true" /> Recibirás las instrucciones de acceso por correo
              </small>
            </div>
          </div>
        </section>

        <p className={`${styles.shell} ${styles.disclaimer}`}>
          Esta guía tiene fines educativos y de bienestar general. No reemplaza la atención de
          profesionales de la salud.
        </p>
      </main>

      <footer className={styles.footer}>
        <div className={styles.shell}>
          <Link href="/">www.carlosalbertojimenez.com.co</Link>
          <VisitorCounter />
        </div>
      </footer>

      <div className={styles.mobilePurchase}>
        <div>
          <small>Acceso inmediato</small>
          <strong>$30.000 COP</strong>
        </div>
        <a href={checkoutUrl}>Comprar ahora</a>
      </div>
    </div>
  );
}
