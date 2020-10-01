/// <reference types="cypress" />

import myHome from "../../support/pageObjects/Home"

describe("Adicionar", () => {

  beforeEach(() => {
    cy.viewport("samsung-note9");
    myHome.acessar();
  });

  it("Adicionar repositório a lista", () => {
    myHome.inserir("thiagojacinto/es6-review")
    myHome.clicarAdicionar()
    myHome.selecionarLista().children().should("contain.text", "es6-review");
    myHome.selecionarItemsDaLista().should("have.length", 1)
  });

  it("Adicionar mais de um repositório", () => {
    myHome.inserir("thiagojacinto/es6-review");
    myHome.clicarAdicionar();
    myHome.selecionarItemsDaLista().should("have.length", 1);
    myHome.inserir("cypress-io/cypress-example-recipes");
    myHome.clicarAdicionar();
    myHome.selecionarItemsDaLista().should("have.length", 2);
    myHome.inserir("rust-lang/rust");
    myHome.clicarAdicionar();
    myHome.selecionarItemsDaLista().should("have.length", 3);
  });

  it('Tentar adicionar sem inserir nome', () => {
    myHome.clicarAdicionar();
    myHome.selecionarItemsDaLista().should("have.length", 0);
  });

});