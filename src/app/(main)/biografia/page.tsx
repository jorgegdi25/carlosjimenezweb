import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biografía | Carlos Alberto Jimenez",
  description: "Biografía de Carlos Alberto Jimenez Velez, investigador, escritor y consultor en lúdica, neuroeducación y neuromarketing.",
};

export default function Biografia() {
  return (
    <>
      <section className="inner-hero">
        <div className="container inner-hero__grid">
          <div>
            <p className="eyebrow">Biografia</p>
            <h1>Carlos Alberto Jimenez</h1>
            <p>Investigador, escritor y consultor en ludica, neuroeducacion, neuromarketing y procesos de aprendizaje.</p>
          </div>
          <Image src="/assets/img/carlos-2.png" alt="Carlos Alberto Jimenez" width={600} height={400} />
        </div>
      </section>

      <section className="section">
        <div className="container content-grid">
          <article className="content-panel">
            <h2>Perfil profesional</h2>
            <p>El doctor Carlos Alberto Jimenez Velez es investigador y escritor de libros alrededor de la ludica, la neuroeducacion y el neuromarketing. Magister en Comunicacion y Educacion, ha desarrollado procesos de asesoria y formacion para instituciones educativas y empresas.</p>
            <p>Su trabajo integra juego, creatividad, emociones, aprendizaje y conocimiento del cerebro para proponer nuevas formas de comprender la educacion, la cultura y el comportamiento humano.</p>
            <p>Como consultor acompaña cursos, seminarios, conferencias y asesorias personales orientadas a fortalecer procesos educativos, empresariales y de bienestar.</p>
            <div className="content-actions">
              <Link className="button button--primary" href="/tienda#libros">Ver libros</Link>
              <Link className="button button--primary" href="/blog">Leer blog</Link>
            </div>
          </article>
          <aside className="content-aside">
            <h2>Temas</h2>
            <Link className="text-link" href="/servicios/ludica-y-juego">Ludica y juego</Link>
            <Link className="text-link" href="/servicios/neuromarketing">Neuromarketing</Link>
            <Link className="text-link" href="/servicios/neuropedagogia">Neuropedagogia ludica</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
