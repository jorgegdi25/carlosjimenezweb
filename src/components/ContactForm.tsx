"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "573104534160";

const interests = [
  "Curso",
  "Seminario",
  "Asesoría personal",
  "Diagnóstico empresarial",
  "Investigación de mercado",
];

type ContactFormProps = {
  service?: string;
};

export default function ContactForm({ service }: ContactFormProps) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const lines = [
      "Hola, Carlos Alberto Jiménez.",
      "",
      `Quiero solicitar información${service ? ` sobre ${service}` : ""}.`,
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      `Correo electrónico: ${email}`,
      `Interesado(a) en: ${interest}`,
      "",
      `Mensaje: ${message}`,
    ];

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!whatsappWindow) {
      window.location.assign(whatsappUrl);
    }

    setStatus("Tu consulta está lista en WhatsApp. Revisa el mensaje y pulsa Enviar.");
  }

  return (
    <section className="contact-form-section" aria-labelledby="contact-form-title">
      <h2 id="contact-form-title">Formulario de contactos para asesorías y consultorías</h2>
      <p>
        Llene el formulario correspondiente y le contestaremos a la mayor brevedad, de acuerdo con sus necesidades.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__grid">
          <label>
            <span>Nombre</span>
            <input type="text" name="name" autoComplete="name" required />
          </label>

          <label>
            <span>Teléfono</span>
            <input type="tel" name="phone" autoComplete="tel" required />
          </label>

          <label className="contact-form__wide">
            <span>Correo electrónico</span>
            <input type="email" name="email" autoComplete="email" required />
          </label>

          <label className="contact-form__wide">
            <span>Interesado(a) en</span>
            <select name="interest" defaultValue="" required>
              <option value="" disabled>Seleccione una opción</option>
              {interests.map((interest) => (
                <option key={interest} value={interest}>{interest}</option>
              ))}
            </select>
          </label>

          <label className="contact-form__wide">
            <span>Mensaje</span>
            <textarea name="message" rows={5} required />
          </label>
        </div>

        <button className="button button--primary" type="submit">
          Enviar consulta
        </button>
        <p className="contact-form__privacy">
          Al continuar, abriremos WhatsApp con su consulta. Ningún dato se guarda en esta página.
        </p>
        <p className="contact-form__status" aria-live="polite">{status}</p>
      </form>
    </section>
  );
}
