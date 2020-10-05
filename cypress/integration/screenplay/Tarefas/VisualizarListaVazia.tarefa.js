import { Tarefa, Agente } from "../../../support/screenplay"; //eslint-disable-line
import { ELEMENTS } from "../componentes/home.componentes";

/**
 * @class VisualizarListaVazia
 * @classdesc Visualiza uma lista sem nenhuma modificação, sem itens.
 */
export class VisualizarListaVazia extends Tarefa {
  /**
   * Lista vazia e sem modificação.
   * @param {Agente} agente
   */
  executaComo(agente) {
    cy.get(ELEMENTS.unorderedList, { timeout: 3000 })
      .children()
      .should("have.length", 0);
    return agente;
  }
}
