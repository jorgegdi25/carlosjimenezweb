import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Neuropedagogía lúdica | Carlos Alberto Jiménez",
  description: "Asesorías de neuropedagogía lúdica, neuroeducación y procesos educativos basados en juego y cerebro.",
};

export default function Neuropedagogia() {
  return (
    <>
      <section className="inner-hero inner-hero--image">
        <div className="container inner-hero__grid">
          <div>
            <p className="eyebrow">Servicio</p>
            <h1>Neuropedagogía Lúdica</h1>
            <p>Formación y asesorías para integrar neuroeducación, lúdica, juego, emociones y aprendizaje significativo.</p>
          </div>
          <Image src="/assets/img/neuropedagogia.jpg" alt="Neuropedagogía lúdica" width={600} height={400} />
        </div>
      </section>
      <section className="section">
        <div className="container content-grid">
          <article className="content-panel">
            <h2>Desarrollamos para empresas e instituciones educativas</h2>
            <p>Consultorías y asesorías a través de cursos, seminarios y asesorías personales en:</p>
            <p><strong>Neuromarketing, Neuroemprendimiento, Neuroliderazgo, Neuroeducación y Branding.</strong></p>

            <h2>¿Qué es la Neuropedagogía lúdica?</h2>
            <p>La neuropedagogía es una disciplina interdisciplinaria que integra conocimientos de la neurociencia, la pedagogía y la psicología para comprender cómo el cerebro humano aprende y se desarrolla en contextos educativos. Su objetivo principal es aplicar el conocimiento científico sobre el funcionamiento cerebral para mejorar los procesos de enseñanza y aprendizaje, teniendo en cuenta factores biológicos, sociales, emocionales y culturales.</p>

            <h2>Pilares de la neuropedagogía</h2>
            <ul className="mb-8" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
              <li className="mb-2"><strong>El cerebro como órgano social</strong>: Reconoce que el cerebro humano es moldeado por la interacción social y el contexto cultural, siendo un procesador de significados que conecta emociones, mente y cuerpo.</li>
              <li className="mb-2"><strong>La importancia de las emociones</strong>: Destaca el papel de las emociones en el aprendizaje, ya que las moléculas de la emoción (como la dopamina y la serotonina) afectan directamente la atención, la memoria y la motivación.</li>
              <li className="mb-2"><strong>El aprendizaje lúdico</strong>: Promueve el uso del juego y experiencias culturales como herramientas para estimular el cerebro, fomentando el desarrollo cognitivo y emocional en un ambiente significativo y placentero.</li>
              <li className="mb-2"><strong>Automodificación y neuroplasticidad</strong>: Aprovecha la capacidad del cerebro para reorganizarse y adaptarse a nuevas experiencias, mejorando los métodos pedagógicos para potenciar esta plasticidad cerebral.</li>
            </ul>

            <div className="relative h-0 overflow-hidden my-8 rounded-lg pb-[56.25%]">
              <iframe 
                src="https://www.youtube.com/embed/CIcWkebwYJE" 
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            <h2>Un enfoque práctico y transformador</h2>
            <p>La neuropedagogía busca no solo enseñar, sino transformar la forma en que se aprende, adaptando los métodos educativos a las necesidades únicas de cada estudiante. Esto implica diseñar experiencias que integren la ciencia y la creatividad, garantizando un aprendizaje integral, significativo y humano.</p>
            
            <h2>El juego como motor educativo</h2>
            <p>La neuropedagogía lúdica transforma la enseñanza al integrar el juego como una experiencia cultural que no solo estimula el desarrollo cognitivo, sino que también activa emociones positivas esenciales para el aprendizaje. Este enfoque fomenta una educación más humana, basada en la creatividad, la interacción social y el bienestar emocional, contribuyendo a un desarrollo integral del ser humano.</p>
            
            <div className="relative h-0 overflow-hidden my-8 rounded-lg pb-[56.25%]">
              <iframe 
                src="https://www.youtube.com/embed/-1Y9OqSJKCc" 
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            <div className="book-promo">
              <Image src="/assets/img/libro-dialogo-real.png" alt="Libro Diálogo con mi cerebro" width={150} height={200} className="book-promo__image" />
              <div className="book-promo__content">
                <h3>Adquiera aquí mi libro</h3>
                <Link className="button button--primary" href="/tienda/dialogo-con-mi-cerebro">
                  Adquirir el libro
                </Link>
              </div>
            </div>

            <h2>Diagnósticos</h2>
            <p>Si uno no conoce el cerebro humano del consumidor, difícilmente podrá vender un producto o servicio.</p>
            <p>Le invitamos a realizar los siguientes diagnósticos y, si tiene alguna duda, contáctenos.</p>
            <ul className="service-list">
              <li>Diagnóstico de consumo</li>
              <li>Diagnóstico del cerebro total</li>
            </ul>

            <ContactForm service="Neuropedagogía lúdica" />
          </article>
          <aside className="content-aside">
            <h2>Otros servicios</h2>
            <Link className="text-link" href="/servicios/neuromarketing">Neuromarketing</Link>
            <Link className="text-link" href="/servicios/ludica-y-juego">Lúdica y juego</Link>
            <Link className="text-link" href="/blog">Artículos</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
