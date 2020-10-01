/// <reference types="cypress" />

import myHome from "../../support/pageObjects/Home"

describe("Remover", () => {
  beforeEach(() => {
    cy.viewport("iphone-xr");
  });
  
  describe("Lista com itens na home", () => {

    beforeEach(() => {
      myHome.acessar();
      myHome.popularLista(170);
    });

    it("Remover um dos repositórios da lista", () => {
      myHome.removerPrimeiroItem();
      myHome.selecionarItemsDaLista().should("have.length", 2);
    });

    it("Remover mais de um dos repositórios da lista", () => {
      myHome.removerPrimeiroItem();
      myHome.removerPrimeiroItem();
      myHome.selecionarItemsDaLista().should("have.length", 1);
    });

    it("Limpar a lista", () => {
      myHome.limparLista();
      myHome.selecionarItemsDaLista().should("not.exist");
    });
  });

  it("Tentar limpar uma lista vazia", () => {
    myHome.acessar();
    myHome.limparLista();
    myHome.selecionarItemsDaLista()
      .should("not.exist");
  });

});