import Image from "next/image";
import styles from "./menu.module.scss";
import Logo from "../../../public/images/logo.png";
import Link from "next/link";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Image src={Logo} width={150} height={50} alt={"logo"} response="true" />

      <div>
        <p>menu</p>
        <Link href="/ecodigo">Editor de codigo</Link>
        <Link href="/comunidade">Comunidade</Link>
      </div>
    </div>
  );
}
