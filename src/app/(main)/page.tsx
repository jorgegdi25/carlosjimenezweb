import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import StatsSection from '../../components/StatsSection';

export const metadata: Metadata = {
  title: 'Carlos Alberto Jiménez | Neurociencia y neuroeducación',
  description:
    'Neurociencia aplicada al bienestar emocional, la educación, el neuromarketing y el éxito empresarial. Conoce los libros, cursos y servicios de Carlos Alberto Jiménez.',
};

const heroLinks = [
  {
    title: 'Compra mis cursos',
    href: '/tienda#curso',
    image: '/assets/img/mis-cursos.png',
    alt: 'Cursos sobre el cerebro y el bienestar',
  },
  {
    title: 'Compra mis libros',
    href: '/tienda#libros',
    image: '/assets/img/mis-libros.png',
    alt: 'Libros de Carlos Alberto Jiménez',
  },
  {
    title: 'Lúdica y juego',
    href: '/servicios/ludica-y-juego',
    image: '/assets/img/ludica.png',
    alt: 'Lúdica y juego',
  },
  {
    title: 'Neuromarketing',
    href: '/servicios/neuromarketing',
    image: '/assets/img/neuromarketing-icon.png',
    alt: 'Redes neuronales para neuromarketing',
  },
  {
    title: 'Neuropedagogía lúdica',
    href: '/servicios/neuropedagogia',
    image: '/assets/img/neuropedagogia.png',
    alt: 'Estudiantes en una actividad de neuropedagogía lúdica',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-label="Presentacion">
        <div className="hero__overlay"></div>
        <div className="hero__inner">
          <div className="hero__stage">
            <div className="hero__content">
              <h1>
                <span>Neurociencia</span> para el bienestar, la educación y el éxito empresarial
              </h1>
              <span className="hero__accent" aria-hidden="true"></span>
              <p className="hero__intro-copy">
                Ideas y herramientas sobre neuroeducación, neuromarketing, lúdica y desarrollo
                emocional.
              </p>
              <p className="hero__proof">26 libros publicados</p>
            </div>
            <div className="hero__figure">
              <Image
                src="/assets/img/carlos-hero-clean.png"
                alt="Carlos Alberto Jiménez sosteniendo un modelo de cerebro"
                width={1024}
                height={1024}
                priority
                sizes="(max-width: 760px) 88vw, 500px"
              />
              <p className="hero__name">Carlos Alberto Jiménez</p>
            </div>
          </div>
          <nav className="hero-links" aria-label="Accesos destacados">
            {heroLinks.map((item) => (
              <Link className="hero-link" href={item.href} key={item.title}>
                <span className="hero-link__image">
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 42vw, 170px" />
                </span>
                <strong>{item.title}</strong>
                <span className="hero-link__more">Ver mas</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <StatsSection />

      <section className="bio section" id="biografia">
        <div className="container bio__grid">
          <div className="bio__copy">
            <p className="eyebrow">Biografia</p>
            <h2>Carlos Alberto Jiménez</h2>
            <p>El doctor Carlos Alberto Jiménez Vélez es consultor y asesor en lúdica, juego, neuromarketing, neuroeducación y branding empresarial. Magíster en comunicación y educación y autor de 26 libros.</p>
            <Link className="button button--primary" href="/biografia">Biografia</Link>
          </div>
          <div className="bio__video">
            <iframe
              src="https://www.youtube.com/embed/pRpPmaLtJy8?rel=0"
              title="Presentación de Carlos Alberto Jiménez"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="section" id="cursos" style={{ backgroundColor: '#c9d5e8', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Aprende a tu ritmo</p>
            <h2>Mis Cursos Online</h2>
            <p>Programas diseñados para potenciar tu bienestar y desarrollo personal.</p>
          </div>

          <div className="service-grid">
            <article className="course-card">
              <Image className="course-card__image" src="/assets/img/respirar-para-vivir.jpg" alt="Respirar para vivir mejor" width={600} height={400} />
              <div className="course-card__content">
                <h3>Respirar para vivir mejor</h3>
                <p>De la ansiedad a la tranquilidad. Recupera tu calma y presencia.</p>
                <Link className="button button--course" href="/cursos/respirar-para-vivir-mejor">Ir al curso</Link>
              </div>
            </article>

            <article className="course-card">
              <Image className="course-card__image" src="/assets/img/neurocalma-card.png" alt="Neurocalma 444" width={600} height={400} />
              <div className="course-card__content">
                <h3>Neurocalma 444</h3>
                <p>Guía práctica para disminuir el estrés y la ansiedad cotidiana.</p>
                <Link className="button button--course" href="/cursos/neurocalma-444">Ir al curso</Link>
              </div>
            </article>

            <article className="course-card">
              <Image className="course-card__image" src="/assets/img/cerebro-digital-fondo.png" alt="Cerebros digitales e inteligencia artificial" width={600} height={400} />
              <div className="course-card__content">
                <h3>CEREBROS DIGITALES e inteligencia artificial</h3>
                <p>Libro, videos, conversaciones y recursos para comprender el aprendizaje en la era de la inteligencia artificial.</p>
                <Link className="button button--course" href="/cursos/cerebros-digitales">Ir al libro interactivo</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--banner" id="servicios">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Consultorias</p>
            <h2>Servicios especializados</h2>
            <p>Desarrollamos consultorias y asesorias para empresas e instituciones educativas por medio de cursos, seminarios y reuniones personales.</p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <Image src="/assets/img/neuromarketing.jpg" alt="Neuromarketing" width={800} height={500} />
              <div>
                <h3>Neuromarketing</h3>
                <Link className="text-link" href="/servicios/neuromarketing">Haz clic aqui</Link>
              </div>
            </article>
            <article className="service-card">
              <Image src="/assets/img/ludica.jpg" alt="Lúdica y juego" width={800} height={500} />
              <div>
                <h3>Lúdica y juego</h3>
                <Link className="text-link" href="/servicios/ludica-y-juego">Haz clic aqui</Link>
              </div>
            </article>
            <article className="service-card">
              <Image src="/assets/img/neuropedagogia.jpg" alt="Neuropedagogía lúdica" width={800} height={500} />
              <div>
                <h3>Neuropedagogía lúdica</h3>
                <Link className="text-link" href="/servicios/neuropedagogia">Haz clic aqui</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section books" id="libros">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Publicaciones destacadas</p>
            <h2>Libros en PDF</h2>
          </div>

          <div className="book-grid">
            <article className="book-card">
              <Image src="/assets/img/libro-neuromarketing-real.png" alt="Libro El neuromarketing" width={400} height={600} />
              <Link className="button button--small" href="/tienda#libros">Ver mas informacion</Link>
            </article>
            <article className="book-card">
              <Image src="/assets/img/libro-cerebros-real.png" alt="Libro Cerebros digitales" width={400} height={600} />
              <Link className="button button--small" href="/tienda#libros">Ver mas informacion</Link>
            </article>
            <article className="book-card">
              <Image src="/assets/img/libro-dialogo-real.png" alt="Libro Dialogo con mi cerebro" width={400} height={600} />
              <Link className="button button--small" href="/tienda#libros">Ver mas informacion</Link>
            </article>
          </div>

          <div className="section-heading section-heading--compact">
            <h2>Mis libros en forma fisica</h2>
            <Link className="text-link" href="/tienda#libros">Ver mas</Link>
          </div>
          <div className="shelf">
            <Image src="/assets/img/libros-1.png" alt="Libro fisico 1" width={300} height={400} />
            <Image src="/assets/img/libros-2.png" alt="Libro fisico 2" width={300} height={400} />
            <Image src="/assets/img/libros-3.png" alt="Libro fisico 3" width={300} height={400} />
            <Image src="/assets/img/libros-4.png" alt="Libro fisico 4" width={300} height={400} />
            <Image src="/assets/img/libros-5.png" alt="Libro fisico 5" width={300} height={400} />
          </div>
        </div>
      </section>

      <section className="youtube section section--blue" id="recursos">
        <div className="container youtube-showcase">
          <div className="youtube-player">
            <div className="youtube-player__frame">
              <iframe
                src="https://www.youtube.com/embed/eiAYXJqRopI?rel=0"
                title="Lúdica y juego con Carlos Alberto Jiménez"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="youtube-panel">
            <h3>Bienvenido a mi canal</h3>
            <p>Videos sobre lúdica, neuropedagogía, neuromarketing y reflexiones para educación, empresa y bienestar.</p>
            <div className="youtube-panel__brand">
              <Image src="/assets/img/youtube-logo.png" alt="YouTube" width={100} height={70} />
            </div>
            <a className="button button--primary" href="https://www.youtube.com/channel/UCb3wQOP_oDblvA9XplkiGKw" target="_blank" rel="noopener noreferrer" aria-label="Ir al canal de YouTube">
              Ver canal completo
            </a>
          </div>
        </div>
      </section>

      <section className="section section--light" id="blog">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Articulos</p>
            <h2>Mi blog</h2>
          </div>
          <div className="blog-grid">
            <article className="post-card">
              <Image src="/assets/img/blog-orgasmo.jpg" alt="Articulo El orgasmo" width={600} height={400} />
              <div>
                <h3>El orgasmo</h3>
                <p>La sexualidad humana forma parte de nuestra existencia humana, como seres racionales, emotivos e instintivos que somos.</p>
                <Link className="text-link" href="/blog/el-orgasmo">Leer mas</Link>
              </div>
            </article>
            <article className="post-card">
              <Image src="/assets/img/blog-juego.jpg" alt="Artículo El juego y la lúdica desde el vientre materno" width={600} height={400} />
              <div>
                <h3>El juego y la lúdica desde el vientre materno</h3>
                <p>Para la construcción del concepto de inteligencia lúdica, se requiere comprender el juego desde sus primeras manifestaciones.</p>
                <Link className="text-link" href="/blog/el-juego-y-la-ludica-desde-el-vientre-materno">Leer mas</Link>
              </div>
            </article>
            <article className="post-card">
              <Image src="/assets/img/blog-neuromarketing.jpg" alt="Articulo El neuromarketing y los nativos digitales" width={600} height={400} />
              <div>
                <h3>El neuromarketing y los nativos digitales</h3>
                <p>Los cerebros de los nativos digitales tienen capacidad de procesar multitareas y nuevas formas de atencion.</p>
                <Link className="text-link" href="/blog/el-neuromarketing-y-los-nativos-digitales">Leer mas</Link>
              </div>
            </article>
          </div>
          <div className="center">
            <Link className="button button--primary" href="/blog">Ver mas</Link>
          </div>
        </div>
      </section>
    </>
  );
}
