"use client";

import { useState } from "react";
import styles from "./product.module.css";
import type { BookTestimonial } from "./book-testimonials";

type TestimonialsSliderProps = {
  testimonials: BookTestimonial[];
};

export default function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  if (!activeTestimonial) return null;

  return (
    <div className={styles.testimonials__slider} aria-label="Carrusel de testimonios">
      <div className={styles.testimonials__viewport} aria-live="polite">
        <figure className={styles.testimonials__slide} key={activeIndex}>
          <blockquote>{activeTestimonial.quote}</blockquote>
          <figcaption>
            <strong>{activeTestimonial.author}</strong>
            <span>{activeTestimonial.organization}</span>
          </figcaption>
        </figure>
      </div>

      <div className={styles.testimonials__navigation}>
        <button type="button" onClick={showPrevious} aria-label="Ver testimonio anterior">
          <span aria-hidden="true">←</span>
        </button>
        <span className={styles.testimonials__counter} aria-hidden="true">
          {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </span>
        <button type="button" onClick={showNext} aria-label="Ver testimonio siguiente">
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className={styles.testimonials__dots} aria-label="Seleccionar testimonio">
        {testimonials.map((testimonial, index) => (
          <button
            type="button"
            className={index === activeIndex ? styles["is-active"] : undefined}
            key={`${testimonial.author}-${testimonial.organization}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ver testimonio ${index + 1} de ${testimonials.length}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
