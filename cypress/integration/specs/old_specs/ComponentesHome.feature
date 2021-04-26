Feature: Componentes da Home

    Background:
        Given que esteja na pagina Home

    Scenario: Componentes da Home
        Then deverá ser validado os componentes da pagina Home

    Scenario: Componentes de novo Quadro
        And que esteja com o input de novo Quadro aberto
        Then deverá ser validado os componentes do input de novo Quadro

    Scenario: Componentes de Quadro criado
        And que tenha um Quadro criado
        Then deverá ser validado os componentes de Quadro criado

    Scenario: Componentes de modal Login
        And que esteja com o modal de Login aberto
        Then deverá ser validado os componentes do modal de Login

    Scenario: Componentes de modal Cadastro
        And que esteja com o modal de Cadastro aberto
        Then deverá ser validado os componentes do modal de Cadastro

    Scenario: Componente de Login
        And que esteja logado
        Then deverá ser validado os componentes de Login
