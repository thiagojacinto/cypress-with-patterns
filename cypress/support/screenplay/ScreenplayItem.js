import { NaoImplementadoErro } from "./utils";

/**
 * @class ScreenplayItem
 * @classdesc representa a unidade básica de um item que pertença ao padrão Screenplay
 */
export class ScreenplayItem {
  /**
   * Lança exceção caso não haja implementação do código.
   * @param {*} nomeMetodo
   * @throws {Exception} NaoImplementadoErro
   */
  lancaExcecaoNaoImplementadoErro(nomeMetodo) {
    throw new NaoImplementadoErro(nomeMetodo, this.contructor.name);
  }
}
