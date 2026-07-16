import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Carlos Alberto Jimenez",
  description: "Contacto de Carlos Alberto Jimenez para asesorias, cursos, libros y conferencias.",
};

export default function Contacto() {
  return (
    <>
      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow">Contacto</p>
          <h1>Hablemos</h1>
          <p>Escribe para solicitar asesorias, cursos, seminarios, libros o informacion sobre productos digitales.</p>
        </div>
      </section>
      <section className="section section--light">
        <div className="container contact-grid">
          <article className="contact-card">
            <h2>Datos de contacto</h2>
            <a href="mailto:carlosjimenez575@gmail.com">carlosjimenez575@gmail.com</a>
            <a href="tel:+573104534160">+(57) 310 453 4160</a>
            <a href="https://wa.me/573104534160" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <span>Pereira, Risaralda - Colombia</span>
          </article>
          <article className="contact-card">
            <h2>Temas frecuentes</h2>
            <Link className="text-link" href="/servicios/neuromarketing">Asesoria en neuromarketing</Link>
            <Link className="text-link" href="/servicios/ludica-y-juego">Ludica y juego</Link>
            <Link className="text-link" href="/tienda">Comprar libros o curso</Link>
          </article>
        </div>
      </section>
    </>
  );
}
