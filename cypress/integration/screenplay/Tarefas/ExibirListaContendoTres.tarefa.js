import { ExibirLista } from "./ExibirLista.tarefa";
/**
 * @class ExibirListaContendoTresItems
 * @classdesc extende o comportamento da class ExibirLista e verifica se a lista apresenta 3 items.
 */
export class ExibirListaContendoTres extends ExibirLista {
  constructor() {
    super();
    this.numero = 3;
  }
}
