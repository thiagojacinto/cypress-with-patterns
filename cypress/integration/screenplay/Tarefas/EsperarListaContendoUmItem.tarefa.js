import { ExibirLista } from "./ExibirLista.tarefa";
/**
 * @class ExibirListaContendoTresItems
 * @classdesc extende o comportamento da class ExibirLista e verifica se a lista apresenta 1 item.
 */
export class EsperarListaContendoUmItem extends ExibirLista {
  constructor() {
    super();
    this.contendo(1);
  }
}
