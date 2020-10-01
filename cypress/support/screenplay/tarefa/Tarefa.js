import { ScreenplayItem } from "../ScreenplayItem";
// import Ator from "../ator";

export default class Tarefa extends ScreenplayItem {
  /**
   * Método de toda tarefa que é executada.
   * @param {Ator} ator
   * @returns {Ator} ator
   */
  async executaComo(ator = "Ator") {
    this.lancaExcecaoNaoImplementadoErro(`"executaComo" um ${ator}`);
  }
}
