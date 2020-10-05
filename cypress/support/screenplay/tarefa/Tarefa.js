import Agente from "../agente/Agente"; //eslint-disable-line
import { ScreenplayItem } from "../ScreenplayItem";

/**
 * @class Tarefa é um conjunto de interações que representam passos de uma lógica de negócios que um Agente pode tentar realizar.
 */
export default class Tarefa extends ScreenplayItem {
  /**
   * Método de toda tarefa que é executada.
   * @param {Agente} agente
   * @returns {Agente} agente
   */
  async executaComo(agente) {
    this.lancaExcecaoNaoImplementadoErro(`"executaComo" um ${agente}`);
    return agente;
  }
}
