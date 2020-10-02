import Agente from "./Agente";
/**
 * Usuario da página, extendendo as caracteristicas de um Agente
 */
export default class Usuario extends Agente {
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
