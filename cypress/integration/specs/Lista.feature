Feature: Lista

    Background:
        Given que esteja dentro de um Quadro

    Scenario: adicionar Lista com nome valido
        When adicionar uma Lista com nome válido
        Then deverá ser validado a criação da Lista

    Scenario: adicionar Lista com nome vazio
        When adicionar uma Lista com nome vazio
        Then deverá ser validado que a Lista não foi criada

    Scenario: adicionar múltiplas Listas
        When adicionar "5" Listas aleatórias
        Then deverá ser validado que a quantidade de Listas criadas é "5"

    Scenario: deletar Lista
        And que esteja com uma Lista criada
        When deletar a Lista
        Then deverá ser validado que a Lista foi removida

    Scenario: cancelar adição de Lista
        And que esteja com o input de adicionar Lista aberto
        When clicar no botao de cancelar a adição da Lista
        Then deverá ser validado que a Lista não foi criada