import styles from "./sub-menu.module.scss";

export default function SubMenu() {
  return (
    <div className={styles.sub_menu}>
      <form action="" method="get" id="sub_menu">
        <div className={styles.sub_menu_list}>
          <label>seu projeto</label>
          <input
            type="text"
            placeholder="Nome do seu projeto"
            name="projeto"
            className={styles.input_projeto}
          />
          <textarea
            name="descrição"
            placeholder="Descrição do seu projeto"
            rows="4"
            cols="20"
          />
          <div className={styles.sub_menu_bottom}>
            <label>personalização</label>
            <select name="linguagens">
              <option value="python">Python</option>
              <option value="javascript" selected>
                Javascript
              </option>
              <option value="typescript">TypeScript</option>
            </select>
            <input type="color" name="cor" />
          </div>
        </div>
      </form>
      <button type="submit" form="sub_menu" value="Submit">
        Salvar projeto
      </button>
    </div>
  );
}
