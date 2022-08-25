import styles from "./head.module.scss";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";

export default function Cabecalho() {
  return (
    <div className={styles.head}>
      <Image src={Logo} width={150} height={50} alt={"logo"} response="true" />
      <input
        type="text"
        id="pesquisa"
        placeholder="busque por algo"
        name="pesquisa"
      />
    </div>
  );
}
