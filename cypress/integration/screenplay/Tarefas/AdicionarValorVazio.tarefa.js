import { Tarefa } from "../../../support/screenplay";
import { ELEMENTS } from "../componentes/home.componentes";

/**
 * @class AdicionarValorVazio
 * @classdesc {Tarefa} que representa inserir um valor vazio no texto e inserir a lista.
 */
export class AdicionarValorVazio extends Tarefa {
  /**
   * Sem inserir nenhum valor para o campo de texto, adiciona valor vazio a lista.
   * @param {Agente} agente
   */
  executaComo(agente) {
    cy.get(ELEMENTS.submitButton)
      .focus()
      .click()
      .wait(100);
    cy.get(ELEMENTS.unorderedList, { timeout: 3000 });
    return agente;
  }
}
