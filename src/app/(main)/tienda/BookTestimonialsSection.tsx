import styles from "./product.module.css";
import { bookTestimonials } from "./book-testimonials";
import TestimonialsSlider from "./TestimonialsSlider";

export default function BookTestimonialsSection() {
  return (
    <section className={styles.testimonials} aria-labelledby="book-testimonials-title">
      <div className="container">
        <p className={styles.testimonials__eyebrow}>Lectores e instituciones</p>
        <h2 className={styles.testimonials__heading} id="book-testimonials-title">
          Experiencias con la obra del autor
        </h2>
        <p className={styles.testimonials__intro}>
          Opiniones sobre los libros y aportes académicos de Carlos Alberto Jiménez.
        </p>
        <TestimonialsSlider testimonials={bookTestimonials} />
      </div>
    </section>
  );
}
