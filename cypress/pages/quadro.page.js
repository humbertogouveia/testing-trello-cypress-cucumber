/// <reference types='cypress' />

// Quadro
const IMG_LOGO_TRELLO = '.Nav_logo'
const BTN_ABRIR_MODAL_LOGIN = '[data-cy=login-menu]'
const BTN_VOLTAR_HOME = '.Nav_boards'
const TITULO_QUADRO = '[data-cy=board-title]'
const BTN_OPCOES_QUADRO = '[data-cy=board-options]'
const BTN_CRIAR_NOVA_LISTA = '[data-cy=add-list]'
// opcoes Quadro
const BTN_DELETA_QUADRO = '[data-cy=board-options] > #myDropdown > .delete'
const BTN_PROPRIEDADES_QUADRO = '[data-cy=copy-board-properties]'
// criar nova Lista
const INP_NOME_LISTA = '[data-cy=add-list-input]'
const BTN_SALVAR_LISTA = '[data-cy=save]'
const BTN_CANCELAR_LISTA = '[data-cy=cancel]'
// confirma Lista criada
const DIV_LISTA = '[data-cy=list]'
const TITULO_LISTA = '[data-cy=list-name]'
const BTN_OPCOES_LISTA = '[data-cy=list] > .dropdown > .options'
const BTN_CRIAR_NOVA_TAREFA = '[data-cy=new-task]'
// opcoes Lista
const BTN_DELETA_LISTA = '[data-cy=list] > .dropdown > #myDropdown > .delete'
const BTN_PROPRIEDADES_LISTA = '[data-cy=copy-list-properties]'
// criar nova Tarefa
const INP_NOME_TAREFA = '[data-cy=task-input]'
const BTN_SALVAR_TAREFA = '[data-cy=add-task]'
const BTN_CANCELAR_TAREFA = '[data-cy=task-options] > [data-cy=cancel]'
// confirma Tarefa criada
const DIV_TAREFA = '[data-cy=task]'
const TITULO_TAREFA = '[data-cy=task-title]'
const CHECKBOX_TAREFA = '[data-cy=task-done]'
// modal Tarefa
const MODULE_OPCOES = '[data-cy=task-module-close] > .options'
const MODULE_NOME = '[data-cy=task-module-name]'
const MODULE_NOME_DESC = '.TaskModule_list'
const MODULE_DESC = '[data-cy=task-module] > :nth-child(4)'
const MODULE_DESC_DESC = '[data-cy=task-description]'
const MODULE_DUEDATE = '[data-cy=task-module] > :nth-child(8)'
const MODULE_DUEDATE_DESC = '[data-cy=task-deadline]'
const MODULE_IMG = ':nth-child(11) > .TaskModule_descriptionTitle'
const MODULE_IMG_DESC = '.dropzone-custom-content'
const MODULE_HIDDEN_UPLOAD = 'input[type=file]'
// criar nova Descricao
const INP_DESCRICAO = '[data-cy=task-description-input]'
const BTN_SALVAR_DESCRICAO = '[data-cy=task-description-save]'
const BTN_CANCELAR_DESCRICAO = '.TaskModule_options > .Cancel'
// confirma Descricao criada
const DIV_DESCRICAO = '.TaskModule_description'
// opcoes Modal
const BTN_FECHAR_MODAL = '[data-cy=task-dropdown] > :nth-child(1)'
const BTN_PROPRIEDADES_MODAL = '[data-cy=copy-task-properties]'
const BTN_DELETAR_MODAL = '[data-cy=task-dropdown] > .delete'

const MODULE_WINDOW = '[data-cy=task-module]'
const IMG_PREVIEW = '.imagePreview > img'
const BTN_REMOVER_IMG = '[data-cy=remove-image] '

const TASKS_LIST = '[data-cy=tasks-list]'

class Lista {
    static abreInputLista() {
        cy.get(BTN_CRIAR_NOVA_LISTA).click()
    }
    static digitaInputLista(nome) {
        cy.get(INP_NOME_LISTA).type(nome)
    }
    static limpaInputLista() {
        cy.get(INP_NOME_LISTA).clear()
    }
    static salvarLista() {
        cy.get(BTN_SALVAR_LISTA).click()
    }
    static criaMultiplasListas(quantidade) {
        for (let index = 0; index < quantidade; index++) {
            cy.get(BTN_CRIAR_NOVA_LISTA).type(`Lista ${index}`)
            cy.get(BTN_SALVAR_LISTA).click()
        }
    }
    static deletarLista() {
        cy.get(BTN_OPCOES_LISTA).click()
        cy.get(BTN_DELETA_LISTA).click()
    }
    static cancelaInputLista() {
        cy.get(BTN_CANCELAR_LISTA).click()
    }
    static validaQuantidadeListas(quantidade) {
        cy.get(DIV_LISTA).should('have.length', quantidade)
    }
}

class Tarefa {
    static abrirInputTarefa() {
        cy.get(BTN_CRIAR_NOVA_TAREFA).click()
    }
    static digitaInputTarefa(nome) {
        cy.get(INP_NOME_TAREFA).type(nome)
    }
    static limpaInputTarefa() {
        cy.get(INP_NOME_TAREFA).clear()
    }
    static salvarTarefa() {
        cy.get(BTN_SALVAR_TAREFA).click()
    }
    static criaMultiplasTarefas(quantidade) {
        for (let index = 0; index < quantidade; index++) {
            cy.get(BTN_CRIAR_NOVA_TAREFA).type(`Tarefa ${index}`)
            cy.get(BTN_SALVAR_TAREFA).click()
        }
    }
    static cancelaInputTarefa() {
        cy.get(BTN_CANCELAR_TAREFA).click()
    }
    static validaQuantidadeTarefas(quantidade) {
        cy.get(DIV_TAREFA).should('have.length', quantidade)
    }
    static cliqueCheckboxTarefa() {
        cy.get(CHECKBOX_TAREFA).click()
    }
    static validaTarefaCompleta() {
        cy.get(TITULO_TAREFA).should('have.class', 'completed')
    }
    static validaTarefaPendente() {
        cy.get(TITULO_TAREFA).should('not.have.class', 'completed')
    }
}

class ModalTarefa {
    static abrirModalTarefa() {
        cy.get(DIV_TAREFA).click()
    }
    static alterarNomeTarefa(nome) {
        cy.get(MODULE_NOME).clear().type(`${nome}{enter}`)
    }
    static validarAlteracaoNome(nome) {
        cy.get(TITULO_TAREFA, { force: true }).should('contain', nome)
    }
    static abrirOpcoesModal() {
        cy.get(MODULE_OPCOES).click()
    }
    static fecharModal() {
        cy.get(BTN_FECHAR_MODAL).click()
    }
    static chegarModalFechado() {
        cy.get(MODULE_WINDOW).should('not.be.visible')
    }
    static deletarTarefa() {
        cy.get(BTN_DELETAR_MODAL).click()
    }
    static abrirInputDescricao() {
        cy.get(MODULE_DESC_DESC).click()
    }
    static digitaInputDescricao(descricao) {
        cy.get(INP_DESCRICAO).type(descricao)
    }
    static limpaInputDescricao() {
        cy.get(INP_DESCRICAO).clear()
    }
    static salvarDescricao() {
        cy.get(BTN_SALVAR_DESCRICAO).click()
    }
    static cancelaInputDescricao() {
        cy.get(BTN_CANCELAR_DESCRICAO).click()
    }
    static validaAlteracaoDescricao(descricao = 'Add a description...') {
        cy.get(DIV_DESCRICAO).should('contain', descricao)
    }
    static validaDescricaoVisivel() {
        cy.get(DIV_DESCRICAO).should('be.visible')
    }
    static uploadImagem() {
        cy.get(MODULE_HIDDEN_UPLOAD).attachFile('image.jpg')
    }
    static validaImagemPreview() {
        cy.get(IMG_PREVIEW).should('be.visible')
    }
    static removerImagem() {
        cy.get(BTN_REMOVER_IMG).click()
    }
    static verificaDropUpload() {
        cy.get(MODULE_IMG_DESC).should('be.visible')
    }
    static alterarData(data) {
        cy.get(MODULE_DUEDATE_DESC).type(data)
    }
    static validaDataAtrasada() {
        cy.get(MODULE_DUEDATE_DESC).should('have.class', 'overDue')
    }
    static validaAlteracaoCor() {
        cy.get(MODULE_DUEDATE_DESC).should('have.css', 'background-color', 'rgb(231, 116, 141)')
    }
    static validaDataFutura() {
        cy.get(MODULE_DUEDATE_DESC).should('not.have.class', 'overDue')
    }
    static validaPermanenciaCor() {
        cy.get(MODULE_DUEDATE_DESC).should('not.have.css', 'background-color', 'rgb(231, 116, 141)')
    }
}

class DragAndDrop {
    static trocaTarefasLista() {
        cy.get(DIV_TAREFA).eq(0).as('firstTask')
        cy.get(DIV_TAREFA).eq(1).as('secondTask')
        cy.get(TASKS_LIST).eq(0).as('firstTaskList');
        cy.get(TASKS_LIST).eq(1).as('secondTaskList');
        cy.get('@firstTask').drag('@secondTaskList');
        cy.get('@secondTask').drag('@secondTaskList');
    }
    static trocaEntreTarefas() {
        cy.get(DIV_TAREFA).eq(0).as('firstTask')
        cy.get(DIV_TAREFA).eq(1).as('secondTask')
        cy.get('@firstTask').drag('@secondTask')
    }
    static trocaEntreListas() {
        cy.get(DIV_LISTA).eq(0).as('firstList');
        cy.get(DIV_LISTA).eq(1).as('secondList');
        cy.get('@firstList').drag('@secondList')
    }
    static trocaListaInput() {
        cy.get(DIV_LISTA).eq(0).as('firstList');
        cy.get(BTN_CRIAR_NOVA_LISTA).as('inputList');
        cy.get('@inputList').drag('@firstList')
    }
    static abreTarefaNum(num) {
        cy.get(DIV_TAREFA).eq(num).click()
    }
    static abreInputTarefa(num) {
        cy.get(BTN_CRIAR_NOVA_TAREFA).eq(num).click()
    }
}

class CompQuadro {
    static validaLogo() {
        cy.get(IMG_LOGO_TRELLO).should('be.visible')
    }
    static validaAbrirModalLogin() {
        cy.get(BTN_ABRIR_MODAL_LOGIN).should('be.visible')
    }
    static validaVoltarHome() {
        cy.get(BTN_VOLTAR_HOME).should('be.visible')
    }
    static validaTituloQuadro() {
        cy.get(TITULO_QUADRO).should('be.visible')
    }
    static validaBotaoOpcoesQuadro() {
        cy.get(BTN_OPCOES_QUADRO).should('be.visible')
    }
    static validaBotaoCriarNovaLista() {
        cy.get(BTN_CRIAR_NOVA_LISTA).should('be.visible')
    }
    // 2
    static validaBotaoDeletaQuadro() {
        cy.get(BTN_DELETA_QUADRO).should('be.visible')
    }
    static validaBotaoPropriedadesQuadro() {
        cy.get(BTN_PROPRIEDADES_QUADRO).should('be.visible')
    }
    // 3
    static validaInputNomeLista() {
        cy.get(INP_NOME_LISTA).should('be.visible')
    }
    static validaBotaoSalvarLista() {
        cy.get(BTN_SALVAR_LISTA).should('be.visible')
    }
    static validaBotaoCancelarLista() {
        cy.get(BTN_CANCELAR_LISTA).should('be.visible')
    }
    // 4
    static validaDivLista() {
        cy.get(DIV_LISTA).should('be.visible')
    }
    static validaTituloLista() {
        cy.get(TITULO_LISTA).should('be.visible')
    }
    static validaBotaoOpcoesLista() {
        cy.get(BTN_OPCOES_LISTA).should('be.visible')
    }
    static validaBotaoCriarNovaTarefa() {
        cy.get(BTN_CRIAR_NOVA_TAREFA).should('be.visible')
    }
    // 5
    static validaBotaoDeletaLista() {
        cy.get(BTN_DELETA_LISTA).should('be.visible')
    }
    static validaBotaoPropriedadesLista() {
        cy.get(BTN_PROPRIEDADES_LISTA).should('be.visible')
    }
    // 6
    static validaInputNomeTarefa() {
        cy.get(INP_NOME_TAREFA).should('be.visible')
    }
    static validaBotaoSalvarTarefa() {
        cy.get(BTN_SALVAR_TAREFA).should('be.visible')
    }
    static validaBotaoCancelarTarefa() {
        cy.get(BTN_CANCELAR_TAREFA).should('be.visible')
    }
    // 7
    static validaDivTarefa() {
        cy.get(DIV_TAREFA).should('be.visible')
    }
    static validaTituloTarefa() {
        cy.get(TITULO_TAREFA).should('be.visible')
    }
    static validaCheckboxTarefa() {
        cy.get(CHECKBOX_TAREFA).should('be.visible')
    }
}

class CompModal {
    static validaModuleOpcoes() {
        cy.get(MODULE_OPCOES).should('be.visible')
    }
    static validaModuleNome() {
        cy.get(MODULE_NOME).should('be.visible')
    }
    static validaModuleNomeDesc() {
        cy.get(MODULE_NOME_DESC).should('be.visible')
    }
    static validaModuleDesc() {
        cy.get(MODULE_DESC).should('be.visible')
    }
    static validaModuleDescDesc() {
        cy.get(MODULE_DESC_DESC).should('be.visible')
    }
    static validaModuleDuedate() {
        cy.get(MODULE_DUEDATE).should('be.visible')
    }
    static validaModuleDuedateDesc() {
        cy.get(MODULE_DUEDATE_DESC).should('be.visible')
    }
    static validaModuleImage() {
        cy.get(MODULE_IMG).should('be.visible')
    }
    static validaModuleImageDesc() {
        cy.get(MODULE_IMG_DESC).should('be.visible')
    }
}

class ComponentesQuadro {
    static validaQuadro() {
        cy.get(IMG_LOGO_TRELLO).should('be.visible')
        cy.get(BTN_ABRIR_MODAL_LOGIN).should('be.visible')
        cy.get(BTN_VOLTAR_HOME).should('be.visible')
        cy.get(TITULO_QUADRO).should('be.visible')
        cy.get(BTN_OPCOES_QUADRO).should('be.visible')
        cy.get(BTN_CRIAR_NOVA_LISTA).should('be.visible')
    }
    static validaOpcoesQuadro() {
        cy.get(BTN_DELETA_QUADRO).should('be.visible')
        cy.get(BTN_PROPRIEDADES_QUADRO).should('be.visible')
    }
    static validaNovaLista() {
        cy.get(INP_NOME_LISTA).should('be.visible')
        cy.get(BTN_SALVAR_LISTA).should('be.visible')
        cy.get(BTN_CANCELAR_LISTA).should('be.visible')
    }
    static validaListaCriada() {
        cy.get(DIV_LISTA).should('be.visible')
        cy.get(TITULO_LISTA).should('be.visible')
        cy.get(BTN_OPCOES_LISTA).should('be.visible')
        cy.get(BTN_CRIAR_NOVA_TAREFA).should('be.visible')
    }
    static validaOpcoesLista() {
        cy.get(BTN_DELETA_LISTA).should('be.visible')
        cy.get(BTN_PROPRIEDADES_LISTA).should('be.visible')
    }
    static validaNovaTarefa() {
        cy.get(INP_NOME_TAREFA).should('be.visible')
        cy.get(BTN_SALVAR_TAREFA).should('be.visible')
        cy.get(BTN_CANCELAR_TAREFA).should('be.visible')
    }
    static validaTarefaCriada() {
        cy.get(DIV_TAREFA).should('be.visible')
        cy.get(TITULO_TAREFA).should('be.visible')
        cy.get(CHECKBOX_TAREFA).should('be.visible')
    }
    static validaModalTarefa() {
        cy.get(MODULE_OPCOES).should('be.visible')
        cy.get(MODULE_NOME).should('be.visible')
        cy.get(MODULE_NOME_DESC).should('be.visible')
        cy.get(MODULE_DESC).should('be.visible')
        cy.get(MODULE_DESC_DESC).should('be.visible')
        cy.get(MODULE_DUEDATE).should('be.visible')
        cy.get(MODULE_DUEDATE_DESC).should('be.visible')
        cy.get(MODULE_IMG).should('be.visible')
        cy.get(MODULE_IMG_DESC).should('be.visible')
        cy.get(MODULE_HIDDEN_UPLOAD).should('not.be.visible')
    }
    static validaNovaDescricao() {
        cy.get(INP_DESCRICAO).should('be.visible')
        cy.get(BTN_SALVAR_DESCRICAO).should('be.visible')
        cy.get(BTN_CANCELAR_DESCRICAO).should('be.visible')
    }
    static validaDescricaoCriada() {
        cy.get(DIV_DESCRICAO).should('be.visible')
    }
    static validaOpcoesModal() {
        cy.get(BTN_FECHAR_MODAL).should('be.visible')
        cy.get(BTN_PROPRIEDADES_MODAL).should('be.visible')
        cy.get(BTN_DELETAR_MODAL).should('be.visible')
    }
}

export { CompModal, CompQuadro, ComponentesQuadro, Lista, Tarefa, ModalTarefa, DragAndDrop }