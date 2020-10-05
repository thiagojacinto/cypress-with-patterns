import { ExibirLista } from "./ExibirLista.tarefa";
/**
 * @class ExibirListaContendoTresItems
 * @classdesc extende o comportamento da class ExibirLista e verifica se a lista apresenta 2 items.
 */
export class EsperarListaContendoDoisItens extends ExibirLista {
  constructor() {
    super();
    this.contendo(2);
  }
}
