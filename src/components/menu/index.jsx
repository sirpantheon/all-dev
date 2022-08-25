import styles from "./menu.module.scss";
import Link from "next/link";

export default function Menu() {
  return (
    <div className={styles.menu}>

      <div className={styles.links}>
        <p>menu</p>
        <Link href="/ecodigo">Editor de codigo</Link>
        <Link href="/comunidade">Comunidade</Link>
      </div>
    </div>
  );
}
