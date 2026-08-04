import styles from "./DigitalPurchaseGuide.module.css";

type GuideKind = "drive-course" | "hotmart-course" | "pdf-book";

interface DigitalPurchaseGuideProps {
  kind: GuideKind;
}

const content = {
  "drive-course": {
    intro:
      "Conoce el proceso completo antes de comprar: pago seguro, confirmación automática y acceso digital mediante Google Drive.",
    steps: [
      ["Realiza el pago", "Paga de forma segura con Wompi usando las opciones disponibles: tarjeta, transferencia, Nequi, PSE, Daviplata, billetera o QR."],
      ["Espera la confirmación", "Wompi valida la transacción. No pagues nuevamente si aparece como pendiente; algunas transferencias pueden tardar un poco más."],
      ["Recibe tu acceso", "Cuando el pago sea aprobado, recibirás en el correo registrado un enlace personal para consultar el curso en Google Drive."],
    ],
    noticeTitle: "Este es un producto 100 % digital",
    noticeText:
      "No recibirás material físico. Escribe correctamente tu correo y utiliza una cuenta de Google para abrir el contenido compartido.",
    faqs: [
      ["¿Cómo puedo pagar?", "Wompi mostrará las opciones disponibles para tu compra, como tarjeta débito o crédito, transferencia, Nequi, PSE, Daviplata, billeteras digitales o QR."],
      ["¿Dónde puedo ver el curso?", "El contenido está alojado en Google Drive y puedes consultarlo desde celular, tableta o computador iniciando sesión con una cuenta de Google."],
      ["¿Cuándo recibiré el acceso?", "El acceso se genera después de que Wompi marque la transacción como aprobada. Recibirás un correo con el enlace personal; revisa también la carpeta de correo no deseado."],
      ["¿Qué sucede si el pago aparece pendiente?", "No pagues nuevamente. Wompi todavía está procesando la transacción y la entrega se realizará cuando el pago sea confirmado."],
      ["¿Puedo compartir el enlace?", "No. El acceso es personal y se concede al correo registrado durante la compra."],
      ["¿Qué hago si pagué y no recibí el correo?", "Revisa correo no deseado y confirma que estés consultando la dirección usada en la compra. Si no aparece, solicita ayuda por WhatsApp con la referencia de la transacción."],
    ],
  },
  "hotmart-course": {
    intro:
      "Conoce el proceso completo antes de comprar: pago seguro, confirmación y acceso al curso mediante la plataforma Hotmart.",
    steps: [
      ["Realiza el pago", "El botón de compra te llevará a Hotmart, donde podrás consultar los medios de pago disponibles para tu país."],
      ["Espera la confirmación", "Hotmart procesará la transacción y te informará cuando el pago haya sido aprobado."],
      ["Recibe tu acceso", "Las instrucciones para ingresar al curso llegarán al correo que registres durante la compra en Hotmart."],
    ],
    noticeTitle: "Este es un curso 100 % digital",
    noticeText:
      "No recibirás material físico. Verifica que tu correo esté bien escrito, porque allí recibirás las instrucciones de acceso de Hotmart.",
    faqs: [
      ["¿Cómo puedo pagar?", "Hotmart mostrará los medios de pago disponibles según tu ubicación y la moneda aplicable al momento de la compra."],
      ["¿Dónde puedo ver el curso?", "El acceso y el contenido se administran desde la plataforma Hotmart. Las instrucciones llegarán a tu correo después de aprobarse el pago."],
      ["¿Cuándo recibiré el acceso?", "Hotmart enviará el acceso cuando confirme el pago. Algunas formas de pago pueden tardar más que una tarjeta."],
      ["¿Qué hago si no recibo el correo?", "Revisa la carpeta de correo no deseado y confirma la dirección usada en Hotmart. Si necesitas ayuda, contáctanos por WhatsApp."],
      ["¿Recibiré un producto físico?", "No. Respirar para vivir mejor es un curso digital."],
    ],
  },
  "pdf-book": {
    intro:
      "Conoce cómo comprar y recibir tu libro digital de forma segura, sin envíos físicos ni esperas innecesarias.",
    steps: [
      ["Realiza el pago", "Paga de forma segura con Wompi usando las opciones disponibles: tarjeta, transferencia, Nequi, PSE, Daviplata, billetera o QR."],
      ["Espera la confirmación", "Wompi valida la transacción. Si aparece pendiente, no pagues nuevamente."],
      ["Descarga tu libro", "Cuando el pago sea aprobado, la página mostrará un botón seguro para descargar el archivo PDF."],
    ],
    noticeTitle: "Este libro se entrega en formato PDF",
    noticeText:
      "No recibirás un ejemplar impreso. Después del pago debes volver al comercio para obtener tu enlace seguro de descarga.",
    faqs: [
      ["¿Cómo puedo pagar?", "Wompi mostrará las opciones habilitadas, como tarjeta débito o crédito, transferencia, Nequi, PSE, Daviplata, billeteras digitales o QR."],
      ["¿Cómo recibo el libro?", "Al aprobarse el pago, volverás al sitio y aparecerá un botón seguro para descargar el archivo PDF."],
      ["¿El precio incluye un libro físico?", "No. La compra corresponde exclusivamente a una edición digital en formato PDF."],
      ["¿Qué pasa si el pago queda pendiente?", "No pagues nuevamente. Espera la confirmación de Wompi y conserva la referencia de la transacción."],
      ["¿Qué hago si pagué y no aparece la descarga?", "Usa el botón de ayuda por WhatsApp y comparte la referencia de la transacción para verificar el pago."],
    ],
  },
} satisfies Record<GuideKind, {
  intro: string;
  steps: string[][];
  noticeTitle: string;
  noticeText: string;
  faqs: string[][];
}>;

export default function DigitalPurchaseGuide({ kind }: DigitalPurchaseGuideProps) {
  const guide = content[kind];

  return (
    <section className={styles.section} aria-labelledby={`purchase-guide-${kind}`}>
      <div className={styles.shell}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>Compra clara y segura</p>
          <h2 id={`purchase-guide-${kind}`}>¿Cómo funciona?</h2>
          <p className={styles.intro}>{guide.intro}</p>
        </header>

        <div className={styles.steps}>
          {guide.steps.map(([title, description], index) => (
            <article className={styles.step} key={title}>
              <span className={styles.number} aria-hidden="true">{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <aside className={styles.notice} aria-label="Información importante antes de comprar">
          <span className={styles.noticeIcon} aria-hidden="true">i</span>
          <div>
            <strong>{guide.noticeTitle}</strong>
            <p>{guide.noticeText}</p>
          </div>
        </aside>

        <h2 className={styles.faqTitle}>Preguntas frecuentes</h2>
        <div className={styles.faq}>
          {guide.faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <div className={styles.answer}><p>{answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
