Feature: Componentes do Quadro

    Background:
        Given que esteja em um Quadro

    Scenario: Componentes do Quadro
        Then deverá ser validado os componentes da pagina Quadro

    Scenario: Componentes de opcoes do Quadro
        And que esteja com as opcoes de Quadro aberto
        Then deverá ser validado os componentes de opcoes do Quadro

    Scenario: Componentes de nova Lista
        And que esteja com o input de nova Lista aberto
        Then deverá ser validado os componentes de input de nova Lista

    Scenario: Componentes de Lista criada
        And que tenha uma Lista criada
        Then deverá ser validado os componentes de Lista criada

    Scenario: Componentes de opcoes de Lista
        And que tenha uma Lista criada
        And esteja com as opcoes de Lista aberta
        Then deverá ser validado os componentes de opcoes da Lista

    Scenario: Componentes de nova Tarefa
        And que tenha uma Lista criada
        And que esteja com o input de nova Terefa aberto
        Then deverá ser validado os componentes de input de nova Tarefa

    Scenario: Componentes de Tarefa criada
        And que tenha uma Lista criada
        And que tenha uma Tarefa criada
        Then deverá ser validado os componentes de Tarefa criada

    Scenario: Componentes de Modal da tarefa
        And que tenha uma Lista criada
        And que tenha uma Tarefa criada
        And que esteja com o Modal da tarefa aberto
        Then deverá ser validado os componentes de Modal da tarefa

    Scenario: Componentes de opcoes de Modal
        And que tenha uma Lista criada
        And que tenha uma Tarefa criada
        And que esteja com o Modal da tarefa aberto
        And que esteja com as opcoes do Modal aberto
        Then deverá ser validado os componentes das opcoes de Modal

    Scenario: Componentes de nova Descricao
        And que tenha uma Lista criada
        And que tenha uma Tarefa criada
        And que esteja com o Modal da tarefa aberto
        And que esteja o input de nova Descricao aberto
        Then deverá ser validado os componentes de input de nova Descricao

    Scenario: Componentes de Descricao criada
        And que tenha uma Lista criada
        And que tenha uma Tarefa criada
        And que esteja com o Modal da tarefa aberto
        And que tenha uma Descricao criada
        Then deverá ser validado os componentes de Descricao criada