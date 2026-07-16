import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neuromarketing | Carlos Alberto Jimenez",
  description: "Asesorias, cursos y seminarios de neuromarketing para empresas e instituciones educativas.",
};

export default function Neuromarketing() {
  return (
    <>
      <section className="inner-hero inner-hero--image">
        <div className="container inner-hero__grid">
          <div>
            <p className="eyebrow">Servicio</p>
            <h1>Neuromarketing</h1>
            <p>Consultorias y asesorias para comprender emociones, decisiones, marcas y comportamiento del consumidor desde el conocimiento del cerebro.</p>
          </div>
          <img src="/assets/img/neuromarketing.jpg" alt="Neuromarketing" />
        </div>
      </section>
      <section className="section">
        <div className="container content-grid">
          <article className="content-panel">
            <h2>¿Qué es Neuromarketing?</h2>
            <p>El neuromarketing es una herramienta de la neuroeconomía que estudia cómo el cerebro humano influye en el consumo, ya sea por decisiones racionales para maximizar ganancias o por impulsos emocionales. A diferencia de la economía clásica, el consumo humano no siempre es lógico ni predecible.</p>
            
            <div className="relative h-0 overflow-hidden my-8 rounded-lg pb-[56.25%]">
              <iframe 
                src="https://www.youtube.com/embed/s0JRVuXEuto" 
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            
            <h2>Neurociencia, economía y biología</h2>
            <p>La neuroeconomía combina economía, neurociencia y biología para entender mejor los procesos de oferta y consumo. Desde una perspectiva biológica, el comportamiento humano está influenciado por la selección natural, donde las decisiones microeconómicas están marcadas por emociones, incertidumbre y la interacción con competidores inteligentes, como lo describe la teoría de Juegos.</p>
            
            <p>Lejos de ser una herramienta para manipular, el neuromarketing busca entender por qué las personas consumen de manera emocional o impulsiva. Esto implica integrar teorías económicas, modelos cerebrales y tecnologías avanzadas para analizar cómo las emociones influyen en el consumo. El cerebro humano procesa emociones atravesadas por significados al consumir, destacando el aprendizaje lúdico como una de las formas preferidas del nativo digital para adquirir información.</p>

            <h2>Consultorías empresariales</h2>
            <p>Desarrollamos para las empresas e instituciones educativas consultorías y asesorías a través de cursos, seminarios y asesorías personales en: <strong>Neuromarketing, Neuroemprendimiento, Neuroliderazgo, Neuroeducación y Branding</strong>.</p>
            
            <blockquote>
              <p><em>&ldquo;Si uno no conoce el cerebro humano del consumidor, difícilmente podrá vender un producto o servicio.&rdquo;</em></p>
            </blockquote>
            
            <div className="content-actions">
              <Link className="button button--primary" href="/contacto">Solicitar asesoría</Link>
              <Link className="button button--light" href="/blog/el-neuromarketing-y-los-nativos-digitales">Leer artículo</Link>
            </div>
          </article>
          <aside className="content-aside">
            <h2>Otros servicios</h2>
            <Link className="text-link" href="/servicios/ludica-y-juego">Ludica y juego</Link>
            <Link className="text-link" href="/servicios/neuropedagogia">Neuropedagogia ludica</Link>
            <Link className="text-link" href="/tienda#libros">Libros PDF</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
