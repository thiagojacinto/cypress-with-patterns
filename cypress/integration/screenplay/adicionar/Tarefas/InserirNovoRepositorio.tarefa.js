import Agente from "../../../../support/screenplay/agente/Agente"; //eslint-disable-line
import { Tarefa } from "../../../../support/screenplay/tarefa";
import { ELEMENTS } from "../../componentes/home.componentes";
/**
 * @class {Tarefa} que representa inserir novo repositório a lista.
 */
export class InserirNovoRepositorio extends Tarefa {
  /**
   * Insere o username do usuário do GitHub
   * @param {string} username do usuario no GitHub
   * @default "cypress-io"
   */
  doUsuario(usuario = "cypress-io") {
    this.usuario = usuario;
    return this;
  }
  /**
   * Insere o repositório do usuário disponível publicamente no GitHub
   * @param {string} repositorio mesmo nome público do repositório disponível no GitHub
   * @default "cypress-example-recipes"
   */
  comNome(repositorio = "cypress-example-recipes") {
    this.repositorio = repositorio;
    return this;
  }

  /**
   * Adiciona novo repositório.
   * @param {Agente} agente
   * @returns {Agente} agente
   */
  executaComo(agente) {
    cy.fixture("repositorios.json").then(data => {
      let random = Math.floor(Math.random() * data.lista.length);
      // let [usuario, repositorio] = data.lista[random].split("/");
      // cy.get(ELEMENTS.input).type(`${usuario}/${repositorio}`);
      cy.get(ELEMENTS.input).type(data.lista[random]);
    });
    cy.get(ELEMENTS.submitButton)
      .focus()
      .click()
      .wait(200);
    cy.get(ELEMENTS.listItems, { timeout: 3000 });
    return agente;
  }
}
