# Cypress.io with Patterns

Using Cypress to handle automation tests implementing Page Objects and Screenplay patterns.

## BDD Features with Gherkin

The goal was to develop automation tests to the simple list app available at http://repo-listing.web.app

To achieve that, Gherkin features lead the way of thinking the core features of that system. Given/When/Then strategy was used here:

- [_adicionar.feature_](./features/adicionar.feature)
- [_remover.feature_](./features/remover.feature)

## Page objects pattern

Development with this pattern was done under the branch [feature/page-objects](https://github.com/thiagojacinto/cypress-with-patterns/tree/feature/page-objects).

> Object _Home_:

- [support/](./cypress/support)
  - [pageObjects/](./cypress/support/pageObjects)
    - [Home/](./cypress/support/pageObjects/Home)
      - [elements.components.js](./cypress/support/pageObjects/Home/elements.components.js)
      - [index.js](./cypress/support/pageObjects/Home/index.js)

> Tests:

- [integration/](./cypress/integration)
  - [page-objects/](./cypress/integration/page-objects)
    - [adicionar.spec.js](./cypress/integration/page-objects/adicionar.spec.js)
    - [remover.spec.js](./cypress/integration/page-objects/remover.spec.js)

## Screenplay pattern

Implementation of this pattern was developed after the page object approuch. Another strategy was using fixture to handle import data from external file (ex: json) and randomize inputs.

> Fixture:

* [fixtures/](./cypress/fixtures)
  * [repositorios.json](./cypress/fixtures/repositorios.json)

> _Screenplay pattern_ base files:

Five original blocks were simplified to 3: [Actor](./cypress/support/screenplay/agente/Agente.js), [Task](./cypress/support/screenplay/tarefa/Tarefa.js) and [Questions](./cypress/support/screenplay/dado-quando-entao/DadoQuandoEntao.js), here translated to _Agente, Tarefa_ e _DadoQuandoEntao_, respectively.

* [support/](./cypress/support)
  * [screenplay/](./cypress/support/screenplay)
    * [agente/](./cypress/support/screenplay/agente)
      * [Agente.js](./cypress/support/screenplay/agente/Agente.js)
      * [Usuario.js](./cypress/support/screenplay/agente/Usuario.js)
      * [index.js](./cypress/support/screenplay/agente/index.js)
    * [dado-quando-entao/](./cypress/support/screenplay/dado-quando-entao)
      * [DadoQuandoEntao.js](./cypress/support/screenplay/dado-quando-entao/DadoQuandoEntao.js)
      * [index.js](./cypress/support/screenplay/dado-quando-entao/index.js)
    * [tarefa/](./cypress/support/screenplay/tarefa)
      * [Tarefa.js](./cypress/support/screenplay/tarefa/Tarefa.js)
      * [index.js](./cypress/support/screenplay/tarefa/index.js)
    * [utils/](./cypress/support/screenplay/utils)
      * [index.js](./cypress/support/screenplay/utils/index.js)
      * [naoImplementado.error.js](./cypress/support/screenplay/utils/naoImplementado.error.js)
    * [ScreenplayItem.js](./cypress/support/screenplay/ScreenplayItem.js)
    * [index.js](./cypress/support/screenplay/index.js)

> Tests:

* [integration/](./cypress/integration)
  * [screenplay/](./cypress/integration/screenplay)
    * [Tarefas/](./cypress/integration/screenplay/Tarefas)
      * [AcessarHome.tarefa.js](./cypress/integration/screenplay/Tarefas/AcessarHome.tarefa.js)
      * [AdicionarValorVazio.tarefa.js](./cypress/integration/screenplay/Tarefas/AdicionarValorVazio.tarefa.js)
      * [EsperarListaContendoDoisItens.tarefa.js](./cypress/integration/screenplay/Tarefas/EsperarListaContendoDoisItens.tarefa.js)
      * [EsperarListaContendoUmItem.tarefa.js](./cypress/integration/screenplay/Tarefas/EsperarListaContendoUmItem.tarefa.js)
      * [ExibirLista.tarefa.js](./cypress/integration/screenplay/Tarefas/ExibirLista.tarefa.js)
      * [ExibirListaContendoTres.tarefa.js](./cypress/integration/screenplay/Tarefas/ExibirListaContendoTres.tarefa.js)
      * [InserirNovoRepositorio.tarefa.js](./cypress/integration/screenplay/Tarefas/InserirNovoRepositorio.tarefa.js)
      * [LimparLista.tarefa.js](./cypress/integration/screenplay/Tarefas/LimparLista.tarefa.js)
      * [RemoverItem.tarefa.js](./cypress/integration/screenplay/Tarefas/RemoverItem.tarefa.js)
      * [VisualizarListaComItens.tarefa.js](./cypress/integration/screenplay/Tarefas/VisualizarListaComItems.tarefa.js)
      * [VisualizarListaVazia.tarefa.js](./cypress/integration/screenplay/Tarefas/VisualizarListaVazia.tarefa.js)
      * [index.js](./cypress/integration/screenplay/Tarefas/index.js)
    * [adicionar/](./cypress/integration/screenplay/adicionar)
      * [adicionar.screenplay.spec.js](./cypress/integration/screenplay/adicionar/adicionar.screenplay.spec.js)
    * [componentes/](./cypress/integration/screenplay/componentes)
      * [home.componentes.js](./cypress/integration/screenplay/componentes/home.componentes.js)
    * [remover/](./cypress/integration/screenplay/remover)
      * [remover.screenplay.spec.js](./cypress/integration/screenplay/remover/remover.screenplay.spec.js)

## Lint and precommit hook

This project uses ESLint, Prettier and lint-staged to handle linting operations and precommit hook.

Before hands-on, do not forget to run:

```
npm install
npx mrm lint-staged
```
