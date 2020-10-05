/* eslint-disable no-undef */
/// <reference types="cypress" />

const {
  Usuario,
  dado,
  e,
  quando,
  entao
} = require("../../../support/screenplay");
const {
  AcessarHome,
  VisualizarListaComItems,
  EsperarListaContendoDoisItens,
  RemoverItem,
  EsperarListaContendoUmItem,
  VisualizarListaVazia,
  LimparLista
} = require("../Tarefas");

describe("Remover", () => {
  const usuario = new Usuario("Thiago");

  describe("Lista com items", () => {
    beforeEach(() => {
      dado(usuario).tenta(AcessarHome);
      e(usuario).pode(VisualizarListaComItems);
    });

    it("Remover um dos repositórios da lista", () => {
      quando(usuario).tenta(RemoverItem);
      entao(usuario).deve(EsperarListaContendoDoisItens);
    });

    it("Remover mais de um dos repositórios da lista", () => {
      quando(usuario).tenta(RemoverItem);
      e(usuario).tenta(RemoverItem);
      entao(usuario).deve(EsperarListaContendoUmItem);
    });

    it("Limpar a lista", () => {
      quando(usuario).tenta(LimparLista);
      entao(usuario).deve(VisualizarListaVazia);
    });
  });

  it("Tentar limpar uma lista vazia", () => {
    dado(usuario).deve(AcessarHome);
    quando(usuario).tenta(LimparLista);
    entao(usuario).deve(VisualizarListaVazia);
  });
});
