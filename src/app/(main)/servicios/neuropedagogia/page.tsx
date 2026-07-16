import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neuropedagogia Ludica | Carlos Alberto Jimenez",
  description: "Asesorias de neuropedagogia ludica, neuroeducacion y procesos educativos basados en juego y cerebro.",
};

export default function Neuropedagogia() {
  return (
    <>
      <section className="inner-hero inner-hero--image">
        <div className="container inner-hero__grid">
          <div>
            <p className="eyebrow">Servicio</p>
            <h1>Neuropedagogia Ludica</h1>
            <p>Formacion y asesorias para integrar neuroeducacion, ludica, juego, emociones y aprendizaje significativo.</p>
          </div>
          <img src="/assets/img/neuropedagogia.jpg" alt="Neuropedagogia ludica" />
        </div>
      </section>
      <section className="section">
        <div className="container content-grid">
          <article className="content-panel">
            <h2>Neuroeducacion aplicada</h2>
            <p>La neuropedagogia ludica propone comprender el aprendizaje desde la relacion entre cerebro, emociones, juego, creatividad y contexto social.</p>
            <p>Desarrollamos consultorias y asesorias para instituciones educativas a traves de cursos, seminarios y acompañamientos que buscan transformar practicas pedagogicas y ambientes de aprendizaje.</p>
            <p>El servicio puede orientarse a docentes, directivos, equipos de formacion y organizaciones interesadas en procesos educativos mas humanos, creativos y significativos.</p>
            
            <div className="grid gap-4 my-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div className="relative h-0 overflow-hidden rounded-lg pb-[56.25%]">
                <iframe 
                  src="https://www.youtube.com/embed/CIcWkebwYJE" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative h-0 overflow-hidden rounded-lg pb-[56.25%]">
                <iframe 
                  src="https://www.youtube.com/embed/-1Y9OqSJKCc" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="content-actions">
              <a className="button button--primary" href="mailto:carlosjimenez575@gmail.com">Solicitar asesoria</a>
              <Link className="button button--primary" href="/tienda#libros">Ver libros</Link>
            </div>
          </article>
          <aside className="content-aside">
            <h2>Otros servicios</h2>
            <Link className="text-link" href="/servicios/neuromarketing">Neuromarketing</Link>
            <Link className="text-link" href="/servicios/ludica-y-juego">Ludica y juego</Link>
            <Link className="text-link" href="/blog">Articulos</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
