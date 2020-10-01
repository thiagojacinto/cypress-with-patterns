/**
 * Class que representa o erro de não haver implementado determinado método.
 */
export class NaoImplementadoErro extends Error {
  /**
   * @constructor
   * @param {string} nomeMetodo
   * @param {string} nomeClasse
   */
  constructor(nomeMetodo, nomeClasse) {
    super(`"${nomeClasse}" NAO implementou o metodo "${nomeMetodo}"`);
  }
}
