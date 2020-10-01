import { ScreenplayItem } from "../ScreenplayItem";
/**
 * Class que representa o bloco base ATOR do padrão Screenplay
 */
export default class Ator extends ScreenplayItem {
  /**
   * Tentativa do ator em realizar alguma tarefa
   * @param {*} tarefa - representa uma ou mais interação.
   */
  tenta(tarefa) {
    this.lancaExcecaoNaoImplementadoErro(`"tenta" realizar ${tarefa}`);
  }
}
