import Link from 'next/link';
import Image from 'next/image';
import StatsSection from '../../components/StatsSection';

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
    alt: 'Libros de Carlos Alberto Jimenez',
  },
  {
    title: 'Ludica y juego',
    href: '/servicios/ludica-y-juego',
    image: '/assets/img/ludica.png',
    alt: 'Ludica y juego',
  },
  {
    title: 'Neuromarketing',
    href: '/servicios/neuromarketing',
    image: '/assets/img/neuromarketing-icon.png',
    alt: 'Redes neuronales para neuromarketing',
  },
  {
    title: 'Neuropedagogia ludica',
    href: '/servicios/neuropedagogia',
    image: '/assets/img/neuropedagogia.png',
    alt: 'Estudiantes en una actividad de neuropedagogia ludica',
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
              <h1>Carlos Alberto<br />Jimenez</h1>
              <span className="hero__accent" aria-hidden="true"></span>
              <p>Consultor, asesor y escritor en ludica, juego, neuromarketing y neuroeducacion.</p>
            </div>
            <div className="hero__figure">
              <Image
                src="/assets/img/carlos-hero.webp"
                alt="Carlos Alberto Jimenez, escritor y neuropedagogo"
                width={500}
                height={537}
                priority
                sizes="(max-width: 760px) 78vw, 430px"
              />
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
            <h2>Carlos Alberto Jimenez</h2>
            <p>El doctor Carlos Alberto Jimenez Velez es consultor y asesor en ludica, juego, neuromarketing, neuroeducacion y branding empresarial. Magister en comunicacion y educacion y autor de 26 libros.</p>
            <Link className="button button--primary" href="/biografia">Biografia</Link>
          </div>
          <div className="bio__video">
            <iframe
              src="https://www.youtube.com/embed/s0JRVuXEuto?rel=0"
              title="Presentacion de Carlos Alberto Jimenez"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="section" id="cursos" style={{ backgroundColor: 'var(--soft)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
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
              <Image className="course-card__image" src="/assets/img/blog-los-cerebros-digitales.jpg" alt="Biblioteca interactiva Cerebros digitales" width={600} height={400} />
              <div className="course-card__content">
                <h3>Biblioteca interactiva Cerebros digitales</h3>
                <p>Libro, videos, conversaciones y recursos para comprender el aprendizaje en la era de la inteligencia artificial.</p>
                <Link className="button button--course" href="/cursos/cerebros-digitales">Conocer la biblioteca</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--light" id="servicios">
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
              <Image src="/assets/img/ludica.jpg" alt="Ludica y juego" width={800} height={500} />
              <div>
                <h3>Ludica y juego</h3>
                <Link className="text-link" href="/servicios/ludica-y-juego">Haz clic aqui</Link>
              </div>
            </article>
            <article className="service-card">
              <Image src="/assets/img/neuropedagogia.jpg" alt="Neuropedagogia ludica" width={800} height={500} />
              <div>
                <h3>Neuropedagogia ludica</h3>
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
                src="https://www.youtube.com/embed/3xDVON1FyNU?rel=0"
                title="Ludica y juego con Carlos Alberto Jimenez"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="youtube-panel">
            <p className="eyebrow">Recursos</p>
            <h2>Bienvenido a mi canal</h2>
            <p>Videos sobre ludica, neuropedagogia, neuromarketing y reflexiones para educacion, empresa y bienestar.</p>
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
              <Image src="/assets/img/blog-juego.jpg" alt="Articulo El juego y la ludica desde el vientre materno" width={600} height={400} />
              <div>
                <h3>El juego y la ludica desde el vientre materno</h3>
                <p>Para la construccion del concepto de inteligencia ludica, se requiere comprender el juego desde sus primeras manifestaciones.</p>
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
