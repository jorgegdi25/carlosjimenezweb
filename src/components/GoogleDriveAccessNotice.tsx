import { CircleUserRound } from "lucide-react";

import styles from "./GoogleDriveAccessNotice.module.css";

export default function GoogleDriveAccessNotice() {
  return (
    <aside className={styles.notice} aria-label="Información importante sobre el correo de acceso">
      <span className={styles.icon} aria-hidden="true">
        <CircleUserRound />
      </span>
      <div>
        <strong>Importante para recibir tu acceso</strong>
        <p>
          El curso se entrega por Google Drive. En Wompi escribe el correo de tu
          cuenta de Google. Puede ser Gmail, Yahoo, Outlook u otro, siempre que
          esté asociado a Google. Para entrar, usa exactamente ese mismo correo.
        </p>
        <p className={styles.help}>
          Si tienes algún inconveniente con el acceso, escríbele por WhatsApp al
          autor al{" "}
          <a
            href="https://wa.me/573104534160?text=Hola%2C%20realic%C3%A9%20una%20compra%20y%20necesito%20ayuda%20con%20el%20acceso%20al%20contenido."
            target="_blank"
            rel="noopener noreferrer"
          >
            +57 310 453 4160
          </a>
          .
        </p>
      </div>
    </aside>
  );
}
