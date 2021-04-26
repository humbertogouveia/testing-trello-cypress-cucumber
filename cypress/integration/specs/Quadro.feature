Feature: Quadro

    Background:
        Given que esteja na pagina Home

    Scenario: adicionar Quadro com nome válido
        When adicionar um Quadro com nome válido
        Then deverá ser validado que houve o redirecionamento para dentro do Quadro
        And deverá ser validado a criação do Quadro

    Scenario: adicionar Quadro com nome vazio
        When tentar adicionar um Quadro com nome vazio
        Then deverá ser mantido a Tela e o estado dos Componentes

    Scenario: adicionar múltiplos Quadros
        When adicionar "7" Quadros aleatórios
        Then deverá ser validado que a quantidade de Quadros criados é "7"

    Scenario: cancelar adição de Quadro
        And que esteja com o input de adicionar Quadro aberto
        When clicar no botao de cancelar a adição do Quadro
        Then deverá ser validado que o Quadro não foi criado

    Scenario: deletar Quadro
        And que tenha um Quadro criado
        And que esteja dentro do Quadro
        When deletar o Quadro
        Then deverá ser validado que houve a remoção do Quadro
        And deverá ser valido que houve o redirecionamento para a pagina Home

    Scenario: alterar nome do Quadro
        And que tenha um Quadro criado
        And que esteja dentro do Quadro
        When alterar o nome do Quadro
        Then deverá ser validado que houve a alteração do nome do Quadro na página Home