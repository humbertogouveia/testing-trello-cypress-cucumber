Feature: DragAndDrop

    Background:
        Given que esteja dentro de um Quadro
        And que tenha duas Listas criadas com duas Tarefas em cada

    Scenario: uma Tarefa para outra Lista
        When pegar uma Tarefa e largar em outra Lista e vice-versa
        Then deverá ser validado o funcionamento do Componente abrir Tarefa

    Scenario: entre Tarefas na mesma Lista
        When pegar uma Tarefa e largar na mesma Lista
        Then deverá ser validado o funcionamento do Componente abrir Tarefa

    Scenario: entre Listas
        When pegar uma Lista e largar em outra Lista
        Then deverá ser validado o funcionamento do Componente adicionar Tarefa

    Scenario: entre Lista e input de adicionar Lista
        When pegar o input de adicionar Lista e largar em outra Lista
        Then deverá ser validado o funcionamento do Componente input