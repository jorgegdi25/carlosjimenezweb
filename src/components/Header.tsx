'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // We had some scroll logic in main.js, let's replicate the header glassmorphism here
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} id="inicio">
      <Link href="/" className="brand" aria-label="Carlos Alberto Jimenez">
        <Image src="/assets/img/logo-amarillo.png" alt="Carlos Alberto Jimenez" width={500} height={188} priority />
      </Link>
      
      <button 
        className="nav-toggle" 
        type="button" 
        aria-expanded={isOpen} 
        aria-controls="site-nav"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span className="sr-only">Menu</span>
      </button>

      <nav className={`site-nav ${isOpen ? 'is-open' : ''}`} id="site-nav" aria-label="Navegacion principal">
        <Link href="/#inicio" onClick={() => setIsOpen(false)}>Inicio</Link>
        <Link href="/tienda#libros" onClick={() => setIsOpen(false)}>Mis libros</Link>
        <Link href="/#cursos" onClick={() => setIsOpen(false)}>Cursos</Link>
        <Link href="/#servicios" onClick={() => setIsOpen(false)}>Servicios</Link>
        <a href="https://www.youtube.com/channel/UCb3wQOP_oDblvA9XplkiGKw" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Mi Canal</a>
        <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
        <Link href="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link>
      </nav>
    </header>
  );
}
