import { ELEMENTS } from "./elements.components";

class Home {
  acessar() {
    return cy.visit("");
  }

  inserir(repositorio = "cypress-io/cypress-example-recipes") {
    return cy.get(ELEMENTS.input).type(repositorio);
  }

  clicarAdicionar() {
    return cy.get(ELEMENTS.submitButton).focus().click();
  }

  clicarLimpar() {
    return cy.get(ELEMENTS.clearButton).click();
  }

  selecionarLista() {
    return cy.get(ELEMENTS.unorderedList, { timeout: 3000 });
  }

  selecionarItemsDaLista() {
    return cy.get(ELEMENTS.listItems, { timeout: 3000 });
  }

  selecionarPrimeiroBotaoRemover() {
    return this.selecionarItemsDaLista().within(() => {
      return cy.get(`[name="btn__remove"]`).first()
    });
  }

  removerPrimeiroItem() {
    return this.selecionarPrimeiroBotaoRemover().click();
  }

  popularLista(waitFor = 200) {
    this.inserir("rust-lang/rust");
    this.clicarAdicionar();
    this.selecionarItemsDaLista().wait(waitFor);
    this.inserir("reactjs/reactjs.org");
    this.clicarAdicionar();
    this.selecionarItemsDaLista().wait(waitFor);
    this.inserir("thiagojacinto/es6-review");
    this.clicarAdicionar();
    this.selecionarItemsDaLista().wait(waitFor);
  }

  limparLista() {
    return cy.get(ELEMENTS.clearButton).click();
  }
  
}

export default new Home();