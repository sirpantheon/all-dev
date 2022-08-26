import styles from "./conteudo.module.scss";

export default function Conteudo() {
  return (
    <div className={styles.conteudo}>
      <div className={styles.conteudo__content}>
        <textarea
          name="descrição"
          placeholder="Descrição do seu projeto"
          rows="4"
          cols="20"
        />
      </div>

      <button>Visualizar com o highlight</button>
    </div>
  );
}
