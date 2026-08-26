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
      </div>
    </aside>
  );
}
