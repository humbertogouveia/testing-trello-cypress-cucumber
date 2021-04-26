Feature: Tarefa

    Background:
        Given que esteja dentro de um Quadro que tenha uma Lista criada

    Scenario: adicionar Tarefa com nome válido
        When adicionar uma Tarefa com nome válido
        Then deverá ser validado a criação da Tarefa

    Scenario: adicionar Tarefa com nome vazio
        When adicionar uma Tarefa com nome vazio
        Then deverá ser validado que a Tarefa não foi criada

    Scenario: adicionar múltiplas Tarefas
        When adicionar "3" Tarefas aleatórias
        Then deverá ser validado que a quantidade de Tarefas criadas é "3"

    Scenario: cancelar adição de Tarefa
        And que esteja com o input de adicionar Tarefa aberto
        When clicar no botao de cancelar a adição Tarefa
        Then deverá ser validado que a Tarefa não foi criada

    Scenario: check Tarefa
        And que tenha uma Tarefa criada
        When marcar check na Tarefa
        Then deverá alterar a classe da Tarefa para concluída

    Scenario: uncheck Tarefa
        And que tenha uma Tarefa criada
        And que esteja marcada como Tarefa concluída
        When marcar uncheck na Tarefa
        Then deverá alterar a classe da Tarefa para pendente
