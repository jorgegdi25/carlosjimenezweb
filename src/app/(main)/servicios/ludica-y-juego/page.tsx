import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ludica y juego | Carlos Alberto Jimenez",
  description: "Consultorias, cursos y seminarios sobre ludica, juego, neuroludica y aprendizaje.",
};

export default function LudicaYJuego() {
  return (
    <>
      <section className="inner-hero inner-hero--image">
        <div className="container inner-hero__grid">
          <div>
            <p className="eyebrow">Servicio</p>
            <h1>Ludica y juego</h1>
            <p>Procesos de asesoria sobre ludica, juego, neuroludica y creatividad para instituciones educativas y empresas.</p>
          </div>
          <img src="/assets/img/ludica.jpg" alt="Ludica y juego" />
        </div>
      </section>
      <section className="section">
        <div className="container content-grid">
          <article className="content-panel">
            <h2>Juego, creatividad y aprendizaje</h2>
            <p>Desarrollamos consultorias y asesorias a traves de cursos, seminarios y reuniones personales sobre ludica, juego, neuroludica, neuropedagogia, creatividad y procesos de aprendizaje.</p>
            <p>El juego se entiende como una dimension vital de la experiencia humana: permite crear, simbolizar, relacionarse, aprender y transformar ambientes educativos y organizacionales.</p>
            <p>Este servicio puede adaptarse a talleres docentes, programas institucionales, seminarios empresariales y acompañamientos de formacion.</p>
            
            <div className="grid gap-4 my-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div className="relative h-0 overflow-hidden rounded-lg pb-[56.25%]">
                <iframe 
                  src="https://www.youtube.com/embed/3xDVON1FyNU" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative h-0 overflow-hidden rounded-lg pb-[56.25%]">
                <iframe 
                  src="https://www.youtube.com/embed/3I0RrWvFy5s" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="content-actions">
              <a className="button button--primary" href="mailto:carlosjimenez575@gmail.com">Solicitar asesoria</a>
              <Link className="button button--primary" href="/blog/el-juego-y-la-ludica-desde-el-vientre-materno">Leer articulo</Link>
            </div>
          </article>
          <aside className="content-aside">
            <h2>Otros servicios</h2>
            <Link className="text-link" href="/servicios/neuromarketing">Neuromarketing</Link>
            <Link className="text-link" href="/servicios/neuropedagogia">Neuropedagogia ludica</Link>
            <Link className="text-link" href="/blog/la-ludica-y-juego">Articulo sobre ludica</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
