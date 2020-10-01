# Cypress.io with Patterns

 Using Cypress to handle automation tests implementing Page Objects and Screenplay patterns.

## BDD Features with Gherkin

The goal was to develop automation tests to the simple list app available at http://repo-listing.web.app

To achieve that, Gherkin features lead the way of thinking the core features of that system. Given/When/Then strategy was used here:

* [_adicionar.feature_](./features/adicionar.feature)
* [_remover.feature_](./features/remover.feature)

## Page objects pattern

Development with this pattern was done under the branch [feature/page-objects](https://github.com/thiagojacinto/cypress-with-patterns/tree/feature/page-objects).

> Objeto _Home_:
* [support/](./cypress/support)
  * [pageObjects/](./cypress/support/pageObjects)
    * [Home/](./cypress/support/pageObjects/Home)
      * [elements.components.js](./cypress/support/pageObjects/Home/elements.components.js)
      * [index.js](./cypress/support/pageObjects/Home/index.js)

> Testes:
* [integration/](./cypress/integration)
  * [page-objects/](./cypress/integration/page-objects)
    * [adicionar.spec.js](./cypress/integration/page-objects/adicionar.spec.js)
    * [remover.spec.js](./cypress/integration/page-objects/remover.spec.js)