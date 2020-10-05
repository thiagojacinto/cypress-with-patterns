import { Tarefa, Agente } from "../../../support/screenplay"; //eslint-disable-line
/**
 * @class {Tarefa} que representa navegar para homescreen.
 */
export class AcessarHome extends Tarefa {
  /**
   * Navega para a homescreen.
   * @param {Agente} agente
   * @returns {Agente} agente
   */
  executaComo(agente) {
    cy.visit(""); // cypress.json setting baseUrl
    cy.viewport("samsung-note9");
    return agente;
  }
}
