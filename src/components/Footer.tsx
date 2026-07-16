import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" id="contactos">
      <div className="container footer__grid">
        <div>
          <img src="/assets/img/logo-amarillo.png" alt="Carlos Alberto Jimenez" className="footer__logo" />
          <p>Asesorías educativas y empresariales para aprender, crear y transformar desde el juego, la lúdica y el conocimiento del cerebro.</p>
        </div>
        <nav aria-label="Secciones">
          <Link href="/servicios/neuromarketing">Neuromarketing</Link>
          <Link href="/servicios/ludica-y-juego">Lúdica y juego</Link>
          <Link href="/servicios/neuropedagogia">Neuropedagogía</Link>
          <Link href="/tienda#libros">Libros</Link>
        </nav>
        <address>
          <a href="mailto:carlosjimenez575@gmail.com">carlosjimenez575@gmail.com</a>
          <a href="tel:+573104534160">+(57) 310 453 4160</a>
          <span>Pereira, Risaralda - Colombia</span>
        </address>
      </div>
    </footer>
  );
}
