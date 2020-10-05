import { Tarefa, Agente } from "../../../../support/screenplay"; //eslint-disable-line
import { ELEMENTS } from "../../componentes/home.componentes";
/**
 * @class {Tarefa} que retorna os repositórios expostos na lista.
 */
export class ExibirLista extends Tarefa {
  /**
   * Insere o número esperado a ser exibido na lista
   * @param {number} quantidade de repositórios a serem exibidos
   * @default 1
   */
  contendo(numero = 1) {
    this.numero = numero;
  }

  /**
   * Ver.
   * @param {Agente} agente
   * @returns {Agente} agente
   */
  executaComo(agente) {
    cy.get(ELEMENTS.listItems, { timeout: 3000 }).should(
      "have.length",
      this.numero || 1
    );
    return agente;
  }
}
