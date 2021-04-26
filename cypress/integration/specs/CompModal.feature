Feature: Componentes do Modal

    Scenario: Componentes de Modal da tarefa
        Given que esteja um Quadro
        And que tenha uma Lista criada
        And que tenha uma Tarefa criada
        And que esteja com o Modal da tarefa aberto
        Then deverá ser exibido o botão de abrir opções da Tarefa
        And deverá ser exibido no Modal, o título da Tarefa
        And deverá ser exibido no Modal, a descrição do título da Tarefa
        And deverá ser exibido no Modal, o título Descrição
        And deverá ser exibido no Modal, o botão de adicionar Descrição
        And deverá ser exibido no Modal, o título Data
        And deverá ser exibido no Modal, o botão de alterar a Data
        And deverá ser exibido no Modal, o título Upload Imagem
        And deverá ser exibido no Modal, o dropzone de upload da Imagem