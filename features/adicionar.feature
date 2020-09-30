# language: pt

Funcionalidade: Adicionar

  Contexto: 
    Dado que esteja na home

    Cenario: Adicionar repositório à lista
      Quando inserir um repositório
      Então deve exibí-lo na lista de repositórios
    
    Cenario: Adicionar mais de um repositório
      Quando inserir um repositório
      E inserir outro repositório
      E inserir outro repositório
      Então deve exibir os repositórios inseridos
    
    Cenario: Tentar adicionar sem informar nome
      Quando não inserir nenhum valor
      Então não deve haver modificação