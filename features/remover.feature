# language: pt

Funcionalidade: Remover

  Contexto: Lista com itens na home
    Dado que esteja na home
    E que haja itens na lista

    Cenario: Remover um dos repositórios da lista
      Quando remover item
      Então deverá tê-lo removido da lista

    Cenario: Remover mais de um dos repositórios da lista
      Quando remover item
      E remover outro item
      Então deverá tê-los removidos da lista

    Cenario: Limpar a lista
      Quando limpar a lista
      Então a lista deve estar vazia
  
  Cenario: Tentar limpar uma lista vazia
    Dado que esteja na home
    E que a lista esteja vazia
    Quando limpar a lista
    Então não deve haver modificação