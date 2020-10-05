import { Tarefa } from "../../../support/screenplay";
import { ELEMENTS } from "../componentes/home.componentes";

/**
 * @class RemoverItem
 * @classdesc Remove um item da lista de tarefas.
 */
export class RemoverItem extends Tarefa {
  /**
   * Procura o primeiro botão "Remove" da lista e clica.
   * @param {Agente} agente
   */
  executaComo(agente) {
    cy.get(ELEMENTS.listItems, { timeout: 3000 }).within(() => {
      cy.get(ELEMENTS.listItemRemoveButton)
        .first()
        .focus()
        .click();
    });

    return agente;
  }
}
