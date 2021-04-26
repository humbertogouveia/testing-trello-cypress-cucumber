/// <reference types='cypress' />

// Home
const IMG_LOGO_TRELLO = '.Nav_logo'
const BTN_ABRIR_MODAL_LOGIN = '[data-cy=login-menu]'
const BTN_CRIAR_NOVO_QUADRO = '[data-cy=create-board]'
const TITULO_MEUS_QUADROS = '.background_container > :nth-child(3)'
// criar novo Quadro
const INP_NOME_QUADRO = '[data-cy=new-board-input]'
const BTN_SALVAR_QUADRO = '[data-cy=new-board-create]'
const BTN_CANCELAR_QUADRO = '[data-cy=new-board-cancel]'
// confirma Quadro criado
const BTN_ACESSAR_QUADRO = '[data-cy=board-item]'
// modal de Login
const BTN_FECHAR_MODAL_LOGIN = '[data-cy=close-login]'
const INP_LOGIN_EMAIL = '[data-cy=login-email]'
const INP_LOGIN_PASSWORD = '[data-cy=login-password]'
const BTN_REALIZAR_LOGIN = '[data-cy=login]'
const BTN_MUDAR_PARA_CADASTRO = ':nth-child(2) > .LoginModule_logSignSwitch > a'
// modal de Cadastro
const INP_CADASTRO_EMAIL = '[data-cy=signup-email]'
const INP_CADASTRO_PASSWORD = '[data-cy=signup-password]'
const CHECKBOX_EMAIL = '[data-cy=welcome-email-checkbox]'
const BTN_CADASTRAR = '[data-cy=signup]'
const BTN_MUDAR_PARA_LOGIN = '[style=""] > .LoginModule_logSignSwitch > a'
// confirma Login
const HEADER_LOGADO = '[data-cy=logged-user]'

const BTN_OPCOES_QUADRO = '[data-cy=board-options] > .options'
const BTN_DELETAR_QUADRO = '[data-cy=board-options] > #myDropdown > .delete'
const INP_ALTERAR_NOME_QUADRO = '[data-cy=board-title]'
const BTN_VOLTAR_HOME = '.Nav_boards'
const NOME_TITULO_QUADRO = '.board_title'

class Quadro {
    static abreInputQuadro() {
        cy.get(BTN_CRIAR_NOVO_QUADRO).click()
    }
    static digitaInputQuadro(nome) {
        cy.get(INP_NOME_QUADRO).type(nome)
    }
    static limpaInputQuadro() {
        cy.get(INP_NOME_QUADRO).clear()
    }
    static salvarQuadro() {
        cy.get(BTN_SALVAR_QUADRO).click()
    }
    static cancelarQuadro() {
        cy.get(BTN_CANCELAR_QUADRO).click()
    }
    static criaMultiplosQuadros(quantidade) {
        for (let index = 0; index < quantidade; index++) {
            cy.get(BTN_CRIAR_NOVO_QUADRO).type(`Quadro ${index}`)
            cy.get(BTN_SALVAR_QUADRO).click()
            cy.get(BTN_VOLTAR_HOME).click()
        }
    }
    static validaQuantidadeQuadros(quantidade) {
        cy.get(BTN_ACESSAR_QUADRO).should('have.length', quantidade)
    }
    static acessarQuadro() {
        cy.get(BTN_ACESSAR_QUADRO).click()
    }
    static abrirOpcoesQuadro() {
        cy.get(BTN_OPCOES_QUADRO).click()
    }
    static deletarQuadro() {
        cy.get(BTN_DELETAR_QUADRO).click()
    }
    static alterarNomeQuadro(nome) {
        cy.get(INP_ALTERAR_NOME_QUADRO).click().clear().type(`${nome}{enter}`)
    }
    static voltarParaHome() {
        cy.get(BTN_VOLTAR_HOME).click()
    }
    static validaExistenciaQuadro(nome) {
        cy.get(NOME_TITULO_QUADRO).contains(nome).should('be.visible')
    }
    static validaUrlHome() {
        cy.url().should('equal', Cypress.config().baseUrl)
    }
    static validaUrlForaDaHome() {
        cy.url().should('not.equal', Cypress.config().baseUrl)
    }
}

class ComponentesHome {
    static validaHome() {
        cy.get(IMG_LOGO_TRELLO).should('be.visible')
        cy.get(BTN_ABRIR_MODAL_LOGIN).should('be.visible')
        cy.get(BTN_CRIAR_NOVO_QUADRO).should('be.visible')
        cy.get(TITULO_MEUS_QUADROS).should('be.visible')
    }
    static validaNovoQuadro() {
        cy.get(INP_NOME_QUADRO).should('be.visible')
        cy.get(BTN_SALVAR_QUADRO).should('be.visible')
        cy.get(BTN_CANCELAR_QUADRO).should('be.visible')
    }
    static validaQuadroCriado() {
        cy.get(BTN_ACESSAR_QUADRO).should('be.visible')
    }
    static validaModalLogin() {
        cy.get(INP_LOGIN_EMAIL).should('be.visible')
        cy.get(INP_LOGIN_PASSWORD).should('be.visible')
        cy.get(BTN_FECHAR_MODAL_LOGIN).should('be.visible')
        cy.get(BTN_REALIZAR_LOGIN).should('be.visible')
        cy.get(BTN_MUDAR_PARA_CADASTRO).should('be.visible')
    }
    static validaModalCadastro() {
        cy.get(INP_CADASTRO_EMAIL).should('be.visible')
        cy.get(INP_CADASTRO_PASSWORD).should('be.visible')
        cy.get(BTN_FECHAR_MODAL_LOGIN).should('be.visible')
        cy.get(CHECKBOX_EMAIL).should('be.visible')
        cy.get(BTN_CADASTRAR).should('be.visible')
        cy.get(BTN_MUDAR_PARA_LOGIN).should('be.visible')
    }
    static validaLogin() {
        cy.get(HEADER_LOGADO).should('be.visible')
    }
}

export { ComponentesHome, Quadro }