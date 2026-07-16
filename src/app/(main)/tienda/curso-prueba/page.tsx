import type { Metadata } from "next";
import Image from "next/image";

import { getProduct, isProductReady } from "@/lib/products";

export const metadata: Metadata = {
  title: "Curso de prueba | Carlos Alberto Jimenez",
  description: "Producto privado para probar el acceso automatico al curso.",
  robots: { index: false, follow: false },
};

export default function CursoPrueba() {
  const product = getProduct("curso-prueba");
  const ready = product ? isProductReady(product) : false;

  return (
    <section className="product-page">
      <div className="container product-page__grid">
        <Image
          src="/assets/img/mis-cursos.png"
          alt="Acceso al curso de prueba"
          width={600}
          height={600}
        />
        <div>
          <p className="product-tag">Prueba privada en Sandbox</p>
          <h1>Curso de prueba</h1>
          <p>
            Compra de prueba para verificar el acceso automatico a una carpeta
            privada de Google Drive.
          </p>
          <ul className="product-list">
            <li>Pago de prueba con Wompi Sandbox.</li>
            <li>Acceso enviado al correo usado durante el pago.</li>
            <li>La carpeta permanece restringida.</li>
          </ul>
          <div className="product-buy product-buy--wide">
            <span className="product-price">$20.000 COP</span>
            {ready ? (
              <>
                <form action="/api/wompi/checkout/curso-prueba" method="get">
                  <button className="button button--primary" type="submit">
                    Probar pago con Wompi
                  </button>
                </form>
                <p className="purchase-instructions">
                  Usa una tarjeta de Sandbox. Al terminar, pulsa <em>Volver al comercio</em>.
                </p>
              </>
            ) : (
              <span className="button button--disabled">Configurando acceso</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
