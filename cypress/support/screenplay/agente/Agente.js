import { ScreenplayItem } from "../ScreenplayItem";
/**
 * @class Agente que representa o bloco base ACTOR do padrão Screenplay
 */
export default class Agente extends ScreenplayItem {
  /**
   * Tentativa do ator em realizar alguma tarefa
   * @param {*} tarefa - representa uma ou mais interação.
   */
  tenta(tarefa) {
    this.lancaExcecaoNaoImplementadoErro(`"tenta" realizar ${tarefa}`);
  }
}
