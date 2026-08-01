import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer" id="contactos">
      <div className="container footer__grid">
        <div>
          <Image src="/assets/img/logo-amarillo.png" alt="Carlos Alberto Jiménez" className="footer__logo" width={200} height={100} />
          <p>Asesorías educativas y empresariales para aprender, crear y transformar desde el juego, la lúdica y el conocimiento del cerebro.</p>
          <div className="footer__social" aria-label="Redes sociales de Carlos Alberto Jiménez">
            <a
              href="https://www.linkedin.com/in/ludica/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 8.5V18M6.5 5.6v.1M10.5 18v-5.2c0-2.2 1.4-3.6 3.4-3.6s3.6 1.3 3.6 4.2V18M10.5 9.5V18" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/195E51dj7y/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.5 7.2h3V3.5h-3c-3.5 0-5.5 2.1-5.5 5.7v2.3H6v3.8h3V21h4.2v-5.7h3.5l.6-3.8h-4.1V9.4c0-1.5.5-2.2 1.3-2.2Z" />
              </svg>
            </a>
            <a
              href="https://x.com/ludrico?s=11&t=VZabe3Cqrh4EpIS_sbrKMw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              title="X"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4.5 10.2 13 4.4 19.5h2.7l4.4-5 3.6 5h4.9l-6.5-8.9 5.4-6.1h-2.7l-4 4.6-3.3-4.6H4Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/carlosal.jimenez?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.4" cy="6.8" r=".8" className="footer__social-dot" />
              </svg>
            </a>
          </div>
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
