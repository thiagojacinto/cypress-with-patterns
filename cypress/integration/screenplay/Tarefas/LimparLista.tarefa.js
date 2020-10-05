import { Tarefa } from "../../../support/screenplay";
import { ELEMENTS } from "../componentes/home.componentes";

/**
 * @class LimparLista
 * @classdesc Limpa a lista removendo todos os items.
 */
export class LimparLista extends Tarefa {
  /**
   * Remove todos os itens listados.
   * @param {Agente} agente
   */
  executaComo(agente) {
    cy.get(ELEMENTS.clearButton)
      .focus()
      .click();
    return agente;
  }
}
