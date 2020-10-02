import Agente from "./Agente";
/**
 * @class Usuario.
 * @classdesc Usuario da página, extendendo as caracteristicas de um Agente
 */
export class Usuario extends Agente {
  /**
   * Define o nome do usuário.
   * @param {string} nome
   */
  chamado(nome = "Usuario") {
    this.nome = nome;
  }

  tenta(tarefas) {
    tarefas;
  }
}
