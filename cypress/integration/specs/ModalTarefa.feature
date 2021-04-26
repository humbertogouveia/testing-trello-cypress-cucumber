Feature: Modal Tarefa

    Background:
        Given que esteja dentro de um Quadro que tenha uma Lista e uma Tarefa criada
        And que esteja com o Modal aberto

    Scenario: alterar nome da Tarefa
        When alterar o nome da Tarefa pelo modal
        Then deverá ser validado que o nome da Tarefa foi alterado

    Scenario: fechar Modal
        And que esteja com as opcoes abertas
        When clicar no botão de fechar o Modal
        Then deverá ser validado que o Modal foi fechado

    Scenario: deletar Tarefa
        And que esteja com as opcoes abertas
        When clicar no botão de deletar a Tarefa
        Then deverá ser validado que a Tarefa foi excluída

    Scenario: adicionar Descrição com nome válido
        When adicionar uma Descrição com nome válido
        Then deverá ser validado que a Descrição foi alterada

    Scenario: adicionar Descrição com nome vazio
        When adicionar uma Descrição com nome vazio
        Then deverá ser validado que não houve altearação na Descrição

    Scenario: adicionar Descrição com nome vazio
        When adicionar uma Descrição com nome " "
        Then deverá ser validado que a Descrição foi alterada para vazio

    Scenario: cancelar adição de Descrição
        And esteja com input de alterar Descrição aberto
        When clicar no botão de cancelar Descricao
        Then deverá ser validado que a Descrição foi alterada

    Scenario: adicionar Imagem
        When adicionar uma Imagem a Tarefa
        Then deverá ser exibido o preview da Imagem

    Scenario: remover Imagem
        And que tenha feito upload de uma Imagem
        When clicar no botão de remover a Imagem
        Then deverá ser reexibido o dropzone de upload de Imagem

    Scenario: alterar para Data passada
        When alterar a Data para uma Data passada
        Then deverá ser alterado a classe do elemento Data
        And deverá ser alterado a cor de exibição da Data

    Scenario: alterar para Data futura
        When alterar a Data para uma Data futura
        Then deverá ser mantido a classe do elemento Data
        And deverá ser alterado que não houve alteração na cor de exibição da Data