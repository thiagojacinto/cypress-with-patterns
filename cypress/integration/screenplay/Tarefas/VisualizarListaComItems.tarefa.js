import { Tarefa } from "../../../support/screenplay";
import { InserirNovoRepositorio } from "./InserirNovoRepositorio.tarefa";

/**
 * @class VisualizarListaComItems
 * @classdesc Gera uma lista com items adicionados.
 */
export class VisualizarListaComItems extends Tarefa {
  /**
   *
   * @param {Number} quantidade
   */
  com(quantidade = 1) {
    this.quantidade = quantidade;
  }

  executaComo(agente) {
    let i = 0;
    while (i < (this.quantidade || 3)) {
      const adicionar = new InserirNovoRepositorio();
      adicionar.executaComo(agente);
      i++;
    }
    return agente;
  }
}
