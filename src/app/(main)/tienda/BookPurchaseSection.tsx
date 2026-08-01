import styles from "./product.module.css";

type BookPurchaseSectionProps = {
  checkoutPath: string;
  ready: boolean;
};

export default function BookPurchaseSection({ checkoutPath, ready }: BookPurchaseSectionProps) {
  return (
    <section className={styles.purchase} aria-labelledby="book-purchase-title">
      <div className="container">
        <p className={styles.purchase__eyebrow}>Acceso digital</p>
        <h2 className={styles.purchase__heading} id="book-purchase-title">Obtén tu libro</h2>
        <p className={styles.purchase__lead}>Pago seguro y descarga digital después de completar la compra.</p>

        <div className={styles.purchase__actions}>
          {ready ? (
            <form action={checkoutPath} method="get">
              <button className={styles.cta__button} type="submit">
                🛒 Adquirir el libro
              </button>
            </form>
          ) : (
            <span className={styles.cta__button} style={{ opacity: 0.5, cursor: "not-allowed" }}>
              Próximamente
            </span>
          )}

          <div className={styles.checkoutWarning} role="note">
            <span className={styles.checkoutWarning__icon} aria-hidden="true">i</span>
            <div>
              <p>Importante después del pago</p>
              <p className={styles.checkoutWarning__text}>
                Al finalizar en Wompi, selecciona <strong>Volver al comercio</strong> para descargar tu libro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
