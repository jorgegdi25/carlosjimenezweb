import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tienda | Carlos Alberto Jimenez",
  description: "Tienda estatica de cursos y libros de Carlos Alberto Jimenez, preparada para enlaces de pago Wompi.",
};

export default function Tienda() {
  return (
    <>
      <section className="shop-hero">
        <div className="container shop-hero__grid">
          <div>
            <p className="eyebrow">Tienda estatica</p>
            <h1>Cursos y libros</h1>
            <p>Productos digitales de Carlos Alberto Jimenez con pagos seguros y entrega automatica de los contenidos.</p>
          </div>
          <div className="shop-note">
            <strong>Pagos Wompi</strong>
            <span>Los productos habilitados usan Wompi para verificar el pago antes de entregar cada descarga o acceso.</span>
          </div>
        </div>
      </section>

      <section className="section section--light" id="curso">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Cursos online</p>
            <h2>Aprendizaje para el bienestar</h2>
            <p>Programas practicos para reducir el estres, recuperar la calma y fortalecer el bienestar cotidiano.</p>
          </div>

          <article className="shop-feature">
            <Image src="/assets/img/neurocalma-card.png" alt="Curso Neurocalma 444" width={800} height={500} />
            <div>
              <p className="product-tag">Curso digital</p>
              <h3>Neurocalma 444</h3>
              <p>Guia practica para disminuir el estres y la ansiedad, encontrar equilibrio y mejorar el enfoque.</p>
              <div className="product-buy">
                <span className="product-price">$30.000 COP</span>
                <Link className="button button--primary" href="/cursos/neurocalma-444">Ver curso</Link>
              </div>
            </div>
          </article>

          <article className="shop-feature">
            <Image src="/assets/img/respirar-para-vivir.jpg" alt="Curso Respirar para vivir mejor" width={800} height={500} />
            <div>
              <p className="product-tag">Curso digital</p>
              <h3>Respirar para vivir mejor</h3>
              <p>Un programa para trabajar respiracion consciente, tranquilidad y autocuidado. Este producto puede conectarse luego a Wompi como curso o acceso digital.</p>
              <div className="product-buy">
                <span className="product-price">USD 10</span>
                <Link className="button button--primary" href="/cursos/respirar-para-vivir-mejor">Ir a la Landing de Venta</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="libros">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Libros PDF</p>
            <h2>Publicaciones digitales</h2>
            <p>Estos productos vienen del catalogo actual y quedan listos para conectar con links de pago individuales.</p>
          </div>

          <div className="product-grid">
            <article className="product-card">
              <Image src="/assets/img/libro-dialogo-real.png" alt="Dialogo Con Mi Cerebro" width={400} height={600} />
              <div>
                <p className="product-tag">Libro PDF</p>
                <h3>Dialogo Con Mi Cerebro</h3>
                <p>Una publicacion sobre pensamiento, cerebro y experiencia interior.</p>
                <div className="product-buy">
                  <span className="product-price">$20.000 COP</span>
                  <Link className="button button--primary" href="/tienda/dialogo-con-mi-cerebro">Ver producto</Link>
                </div>
              </div>
            </article>

            <article className="product-card">
              <Image src="/assets/img/libro-neuromarketing-real.png" alt="El Neuromarketing" width={400} height={600} />
              <div>
                <p className="product-tag">Libro PDF</p>
                <h3>El Neuromarketing</h3>
                <p>Un acercamiento a las emociones, el cerebro y las decisiones de consumo.</p>
                <div className="product-buy">
                  <span className="product-price">$20.000 COP</span>
                  <Link className="button button--primary" href="/tienda/el-neuromarketing">Ver producto</Link>
                </div>
              </div>
            </article>

            <article className="product-card">
              <Image src="/assets/img/libro-cerebros-real.png" alt="Cerebros digitales" width={400} height={600} />
              <div>
                <p className="product-tag">Libro PDF</p>
                <h3>Cerebros digitales</h3>
                <p>Reflexiones sobre cultura digital, aprendizaje y nuevas formas de atencion.</p>
                <div className="product-buy">
                  <span className="product-price">$20.000 COP</span>
                  <Link className="button button--primary" href="/tienda/cerebros-digitales">Ver producto</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--blue">
        <div className="container shop-help">
          <div>
            <p className="eyebrow">Siguiente paso</p>
            <h2>Conectar Wompi</h2>
            <p>Cuando tengamos los enlaces de pago, cada boton se actualiza con su URL de checkout. No se necesita carrito ni base de datos para vender productos individuales.</p>
          </div>
          <a className="button button--light" href="mailto:carlosjimenez575@gmail.com">Solicitar informacion</a>
        </div>
      </section>
    </>
  );
}
