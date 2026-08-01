import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biografía | Carlos Alberto Jiménez",
  description: "Biografía de Carlos Alberto Jiménez Vélez, investigador, escritor y consultor en lúdica, neuroeducación y neuromarketing.",
};

export default function Biografia() {
  return (
    <>
      <section className="inner-hero">
        <div className="container inner-hero__grid">
          <div>
            <p className="eyebrow">Biografia</p>
            <h1>Carlos Alberto Jiménez</h1>
            <p>Investigador, escritor y consultor en lúdica, neuroeducación, neuromarketing y procesos de aprendizaje.</p>
          </div>
          <Image src="/assets/img/carlos-2.png" alt="Carlos Alberto Jiménez" width={600} height={400} />
        </div>
      </section>

      <section className="section">
        <div className="container content-grid">
          <article className="content-panel">
            <h2>Perfil profesional</h2>
            <p>El doctor Carlos Alberto Jiménez Vélez es investigador y escritor de libros alrededor de la lúdica, la neuroeducación y el neuromarketing. Magíster en Comunicación y Educación, ha desarrollado procesos de asesoría y formación para instituciones educativas y empresas.</p>
            <p>Su trabajo integra juego, creatividad, emociones, aprendizaje y conocimiento del cerebro para proponer nuevas formas de comprender la educacion, la cultura y el comportamiento humano.</p>
            <p>Como consultor acompaña cursos, seminarios, conferencias y asesorias personales orientadas a fortalecer procesos educativos, empresariales y de bienestar.</p>
            <div className="content-actions">
              <Link className="button button--primary" href="/tienda#libros">Ver libros</Link>
              <Link className="button button--primary" href="/blog">Leer blog</Link>
            </div>
          </article>
          <aside className="content-aside">
            <h2>Temas</h2>
            <Link className="text-link" href="/servicios/ludica-y-juego">Lúdica y juego</Link>
            <Link className="text-link" href="/servicios/neuromarketing">Neuromarketing</Link>
            <Link className="text-link" href="/servicios/neuropedagogia">Neuropedagogía lúdica</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
