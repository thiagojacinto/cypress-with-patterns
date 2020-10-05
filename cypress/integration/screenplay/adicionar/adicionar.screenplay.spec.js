/* eslint-disable no-undef */
/// <reference types="cypress" />
import { e, dado, quando, entao, Usuario } from "../../../support/screenplay";
import {
  AcessarHome,
  ExibirLista,
  ExibirListaContendoTres,
  InserirNovoRepositorio,
  AdicionarValorVazio,
  VisualizarListaVazia
} from "../Tarefas";

describe("Adicionar", () => {
  const usuario = new Usuario("Thiago");

  beforeEach(() => {
    dado(usuario).tenta(AcessarHome);
  });

  it("Adicionar repositório a lista", () => {
    quando(usuario).tenta(InserirNovoRepositorio);
    entao(usuario).deve(ExibirLista);
  });

  it("Adicionar mais de um repositório a lista", () => {
    quando(usuario).tenta(InserirNovoRepositorio);
    e(usuario).tenta(InserirNovoRepositorio);
    e(usuario).tenta(InserirNovoRepositorio);
    entao(usuario).deve(ExibirListaContendoTres);
  });

  it("Tentar adicionar sem informar nome", () => {
    quando(usuario).tenta(AdicionarValorVazio);
    entao(usuario).deve(VisualizarListaVazia);
  });
});
