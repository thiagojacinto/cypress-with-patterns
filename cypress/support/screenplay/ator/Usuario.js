import Ator from "./Ator";
/**
 * Usuario da página, extendendo as caracteristicas de um Ator
 */
export default class Usuario extends Ator {
  /**
   * @constructor
   * @param {string} nome
   */
  constructor(nome) {
    super();
    this.nome = nome;
  }

  tenta(tarefas) {
    tarefas;
  }
}
