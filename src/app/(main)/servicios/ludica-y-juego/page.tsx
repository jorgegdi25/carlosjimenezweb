import Link from 'next/link';
import Image from 'next/image';
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
          <Image src="/assets/img/ludica.jpg" alt="Ludica y juego" width={600} height={400} />
        </div>
      </section>
      <section className="section">
        <div className="container content-grid">
          <article className="content-panel">
            <h2>La lúdica: el puente entre posibilidad y libertad</h2>
            <p>La lúdica es una experiencia cultural que trasciende actividades específicas o modas pasajeras. Es un proceso esencial del desarrollo humano en sus dimensiones psíquica, social, cultural y biológica, ligado a la creatividad y al sentido de la vida cotidiana.</p>
            
            <h2>Lúdica como proceso humano integral</h2>
            <p>Más que juegos, la lúdica implica actitudes y predisposiciones que atraviesan nuestra corporalidad y mente. Actividades como el arte, el humor, el amor, el baile, e incluso actos simples como “mirar vitrinas” o “sentarse en una banca”, generan emociones profundas sin buscar otra recompensa que la gratitud y la felicidad.</p>
            
            <div className="relative h-0 overflow-hidden my-8 rounded-lg pb-[56.25%]">
              <iframe 
                src="https://www.youtube.com/embed/Ck9rZKfXIsE" 
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            <h2>El impacto biológico de la lúdica</h2>
            <p>La lúdica estimula la producción de endorfinas, dopamina y serotonina, moléculas asociadas al placer, la felicidad y la creatividad. Estas sustancias son fundamentales en la búsqueda del sentido de la vida y el bienestar humano.</p>
            
            <h2>Un cambio de perspectiva</h2>
            <p>Ampliar nuestra comprensión de la lúdica permite transformar nuestra manera de mirar el mundo, integrando el aprendizaje y el disfrute en una experiencia natural y placentera. La lúdica es mucho más que juego; es una herramienta para conectar con nuestra esencia y disfrutar del viaje de la vida.</p>
            
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

            <p>En esta sección encontrará la relación que hay entre la Neuropedagogía y la Lúdica, la cual es fundamental para poder comprender mejor el proceso de enseñanza - aprendizaje.</p>
            <p>De esta forma es prioritario elaborar diagnósticos cerebrales para iniciar cualquier proceso educativo.</p>

            <div className="book-promo">
              <Image src="/assets/img/libro-cerebros-real.png" alt="Libro Cerebros Digitales" width={140} height={200} className="book-promo__image" />
              <div className="book-promo__content">
                <h3>Adquiera aquí mi libro</h3>
                <Link className="button button--primary" href="/tienda/cerebros-digitales">
                  Adquirir el libro
                </Link>
              </div>
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
