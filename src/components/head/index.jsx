import styles from "./head.module.scss";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";

export default function Cabecalho() {
  return (
    <div className={styles.head}>
      <div className={styles.container}>
        <Image
          src={Logo}
          width={150}
          height={50}
          alt={"logo"}
          response="true"
          className={styles.logo}
        />
        <input
          type="search"
          id="pesquisa"
          placeholder="busque por algo"
          name="pesquisa"
          className={styles.input}
        />
      </div>
      <div className={styles.avatar}>
        <div className={styles.foto_avatar}></div>
        <p>johnatan</p>
      </div>
    </div>
  );
}
