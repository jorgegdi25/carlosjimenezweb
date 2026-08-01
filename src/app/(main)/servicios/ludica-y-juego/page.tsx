import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Lúdica y juego | Carlos Alberto Jiménez",
  description: "Consultorías, cursos y seminarios sobre lúdica, juego, neurolúdica y aprendizaje.",
};

const ludicaResources = [
  {
    title: 'Bichos lúdicos',
    type: 'Video',
    image: '/assets/img/ludica-recursos/bichos-ludicos.webp',
    href: 'https://www.youtube.com/watch?v=3xDVON1FyNU',
  },
  {
    title: 'Cristales de agua',
    type: 'Video',
    image: '/assets/img/ludica-recursos/cristales-de-agua.webp',
    href: 'https://www.youtube.com/watch?v=3I0RrWvFy5s',
  },
  {
    title: 'Canal Conexión Lúdica',
    type: 'YouTube',
    image: '/assets/img/ludica-recursos/canal-youtube.webp',
    href: 'https://www.youtube.com/user/CONEXIONLUDICA',
  },
  {
    title: 'La educación prohibida',
    type: 'Película',
    image: '/assets/img/ludica-recursos/educacion-prohibida.webp',
    href: 'https://www.youtube.com/watch?v=-1Y9OqSJKCc',
  },
  {
    title: 'Conferencias del autor',
    type: 'Videoteca',
    image: '/assets/img/ludica-recursos/conferencias.webp',
    href: 'https://ludicacolombia.com/videos/',
  },
  {
    title: 'Prácticas universitarias',
    type: 'Experiencias',
    image: '/assets/img/ludica-recursos/practicas-universitarias.webp',
    href: 'https://www.ludicacolombia.com/practicas-universitarias',
  },
];

export default function LudicaYJuego() {
  return (
    <>
      <section className="inner-hero inner-hero--image">
        <div className="container inner-hero__grid">
          <div>
            <p className="eyebrow">Servicio</p>
            <h1>Lúdica y juego</h1>
            <p>Procesos de asesoría sobre lúdica, juego, neurolúdica y creatividad para instituciones educativas y empresas.</p>
          </div>
          <Image src="/assets/img/ludica.jpg" alt="Lúdica y juego" width={600} height={400} />
        </div>
      </section>
      <section className="section">
        <div className="container content-grid">
          <article className="content-panel">
            <h2>Desarrollamos para empresas e instituciones educativas</h2>
            <p>Consultorías y asesorías a través de cursos, seminarios y asesorías personales sobre:</p>
            <p><strong>Lúdica, Juego, Neurolúdica, Neuropedagogía y Ludoterapias.</strong></p>

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

            <section className="ludica-resources" aria-labelledby="ludica-resources-title">
              <div className="ludica-resources__heading">
                <p className="eyebrow">Recursos recomendados</p>
                <h2 id="ludica-resources-title">Explora la lúdica en acción</h2>
                <p>Videos, experiencias y espacios del autor para profundizar en la lúdica y el juego.</p>
              </div>
              <div className="ludica-resources__grid">
                {ludicaResources.map((resource) => (
                  <a
                    className="ludica-resource-card"
                    href={resource.href}
                    key={resource.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      width={200}
                      height={200}
                      sizes="(max-width: 520px) 80vw, 220px"
                    />
                    <span className="ludica-resource-card__content">
                      <span className="ludica-resource-card__type">{resource.type}</span>
                      <strong>{resource.title}</strong>
                      <span className="ludica-resource-card__action">
                        Explorar recurso <span aria-hidden="true">↗</span>
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </section>

            <div className="book-promo">
              <Image src="/assets/img/libro-cerebros-real.png" alt="Libro Cerebros Digitales" width={150} height={200} className="book-promo__image" />
              <div className="book-promo__content">
                <h3>Adquiera aquí mi libro</h3>
                <Link className="button button--primary" href="/tienda/cerebros-digitales">
                  Adquirir el libro
                </Link>
              </div>
            </div>

            <h2>Diagnósticos</h2>
            <p>En esta sección encontrará la relación que hay entre la Neuropedagogía y la Lúdica, la cual es fundamental para comprender mejor el proceso de enseñanza-aprendizaje.</p>
            <p>De esta forma, es prioritario elaborar diagnósticos cerebrales para iniciar cualquier proceso educativo.</p>
            <ul className="service-list">
              <li>Diagnósticos cerebrales para adultos</li>
              <li>Diagnósticos cerebrales para niños y adolescentes</li>
              <li>Diagnósticos cerebrales para recreacionistas</li>
            </ul>

            <ContactForm service="Lúdica y juego" />
          </article>
          <aside className="content-aside">
            <h2>Otros servicios</h2>
            <Link className="text-link" href="/servicios/neuromarketing">Neuromarketing</Link>
            <Link className="text-link" href="/servicios/neuropedagogia">Neuropedagogía lúdica</Link>
            <Link className="text-link" href="/blog/la-ludica-y-juego">Artículo sobre lúdica</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
