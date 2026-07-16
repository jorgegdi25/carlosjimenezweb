'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 26, label: 'Libros de su autoria' },
  { value: 2, label: 'Seminarios nacionales dirigidos' },
  { value: 1, label: 'Seminario internacional de neuropedagogia ludica en la Universidad Nacional' },
  { value: 8, label: 'Invitaciones a seminarios internacionales' },
  { value: 1, label: 'Foro internacional en España' },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);
  const [values, setValues] = useState(() => stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      hasAnimated.current = true;
      const frame = requestAnimationFrame(() => {
        setValues(stats.map((stat) => stat.value));
        setIsVisible(true);
      });
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;
        setIsVisible(true);
        const startedAt = performance.now();
        const duration = 1300;

        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValues(stats.map((stat) => Math.round(stat.value * eased)));

          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`stats-strip ${isVisible ? 'is-visible' : ''}`} ref={sectionRef} aria-label="Trayectoria en cifras">
      <div className="container stats-strip__grid">
        {stats.map((stat, index) => (
          <article className="stat" key={stat.label} aria-label={`${stat.value} ${stat.label}`}>
            <span className="stat__number" aria-hidden="true">{values[index]}</span>
            <p>{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
