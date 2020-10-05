import Agente from "../agente"; //eslint-disable-line
import Tarefa from "../tarefa"; //eslint-disable-line
import { ScreenplayItem } from "../ScreenplayItem";

/**
 * @class DadoQuandoEntao
 * @classdesc implementa os passos Dado, Quando e Então do Gherkin em conjunto com o padrão Screenplay.
 */
export class DadoQuandoEntao extends ScreenplayItem {
  /**
   * @constructor
   * @param {Agente} agente
   */
  constructor(agente) {
    super();
    this.agente = agente;
  }
  /**
   * Forma auxiliar que representa uma tentativa da realização de uma Tarefa por parte de um Agente.
   * @param  {...Tarefa} tarefas
   */
  tenta(...tarefas) {
    return this.composicaoDeTarefas(tarefas);
  }

  /**
   * Forma auxiliar que representa uma habilidade da realização de uma Tarefa por parte de um Agente.
   * @param  {...Tarefa} tarefas
   */
  pode(...tarefas) {
    return this.composicaoDeTarefas(tarefas);
  }

  /**
   * Forma auxiliar que representa uma asserção sobre a realização de uma Tarefa por parte de um Agente.
   * @param  {...Tarefa} tarefas
   */
  deve(...tarefas) {
    return this.composicaoDeTarefas(tarefas);
  }

  /**
   * Método de composição de tarefas, executando-as em uma cadeia de Promises
   * @param  {...Tarefa} tarefas
   */
  composicaoDeTarefas(...tarefas) {
    const arrayTarefas = tarefas.flat();

    for (const Tarefa of arrayTarefas) {
      new Tarefa().executaComo(this.agente);
    }
  }
}
/**
 * Implementação de uma cadeia de tarefas a partir do passo "DADO"
 * @param {Agente} agente
 */
export const dado = agente => new DadoQuandoEntao(agente);
/**
 * Implementação de uma cadeia de tarefas a partir do passo "QUANDO"
 * @param {Agente} agente
 */
export const quando = agente => new DadoQuandoEntao(agente);
/**
 * Implementação de uma cadeia de tarefas a partir do passo "ENTÃO"
 * @param {Agente} agente
 */
export const entao = agente => new DadoQuandoEntao(agente);
/**
 * Implementação de uma cadeia de tarefas a partir do passo "E"/"AND"
 * @param {Agente} agente
 */
export const e = agente => new DadoQuandoEntao(agente);
