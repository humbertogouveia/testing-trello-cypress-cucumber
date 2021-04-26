Feature:  Componentes do Quadro

    Background:
        Given que esteja um Quadro

    Scenario: Componentes do Quadro
        Then deverá ser exibido a logo da Trello
        And deverá ser exibido o botão de abrir modal de login
        And deverá ser exibido o botão de voltar para Home
        And deverá ser exibido o título do Quadro
        And deverá ser exibido o botão de abrir opções do Quadro
        And deverá ser exibido o botão de criar nova Lista

    Scenario: Componentes de opcoes do Quadro
        Given que esteja com as opcoes de Quadro aberto
        Then deverá ser exibido o botão de deletar o Quadro
        And deverá ser exibido o botão de copiar propriedades do Quadro

    Scenario: Componentes de nova Lista
        Given que esteja com o input de nova Lista aberto
        Then deverá ser exibido o input de adicionar nome a Lista
        And deverá ser exibido de salvar a Lista
        And deverá ser exibido o botão de cancelar o input da Lista

    Scenario: Componentes de Lista criada
        Given que tenha uma Lista criada
        Then deverá ser exibido a div da Lista criada
        And deverá ser exibido o título da Lista
        And deverá ser exibido o botão de abrir opções da Lista
        And deverá ser exibido o botão de adicionar nova Tarefa

    Scenario: Componentes de opcoes de Lista
        Given que tenha uma Lista criada
        And esteja com as opcoes de Lista aberta
        Then deverá ser exibido o botão de deletar Lista
        And deverá ser exibido o botão de copiar propriedades da Lista

    Scenario: Componentes de nova Tarefa
        Given que tenha uma Lista criada
        And que esteja com o input de nova Terefa aberto
        Then deverá ser exibido o input de adicionar nome a Tarefa
        And deverá ser exibido o botão de salvar a Tarefa
        And deverá ser exibido o botão de cancelar o input da Tarefa

    Scenario: Componentes de Tarefa criada
        Given que tenha uma Lista criada
        And que tenha uma Tarefa criada
        Then deverá ser exibido a div da Tarefa criada
        And deverá ser exibido o título da Tarefa
        And deverá ser exibido o checkbox para completar a Tarefa