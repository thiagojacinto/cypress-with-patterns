/* eslint-disable no-undef */
/// <reference types="cypress" />

const { Usuario, dado } = require("../../../support/screenplay");
const { AcessarHome } = require("../Tarefas");

describe("Remover", () => {
  describe("Lista com items", () => {
    const usuario = new Usuario("Thiago");

    beforeEach(() => {
      dado(usuario).tenta(AcessarHome);
    });
  });
});
