import styles from "./sub-menu.module.scss";

export default function SubMenu() {
  return (
    <div className={styles.sub_menu}>
      <div className={styles.sub_menu_list}>
        <label>seu projeto</label>
        <input type="text" placeholder="Nome do seu projeto" name="projeto" className={styles.input_projeto}/>
        <textarea
          name="descrição"
          placeholder="Descrição do seu projeto"
          rows="4"
          cols="20"
        />
      <div>
        <label>personalização</label>
        <input type="color" name="cor" />
      </div>
        <input type="submit" name="enviar" placeholder="salvar" value="SALVAR PROJETO" />
      </div>
    </div>
  );
}
