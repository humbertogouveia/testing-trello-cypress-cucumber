/// <reference types='cypress' />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { ComponentesHome } from '../../pages/home.page'

Given(/^que esteja na pagina Home$/, () => {
	cy.visit('')
});

Then(/^deverá ser validado os componentes da pagina Home$/, () => {
	ComponentesHome.validaHome()
});

Given(/^que esteja com o input de novo Quadro aberto$/, () => {
	cy.get('[data-cy=create-board]').click()
});

Then(/^deverá ser validado os componentes do input de novo Quadro$/, () => {
	ComponentesHome.validaNovoQuadro()
});

Given(/^que tenha um Quadro criado$/, () => {
	cy.addBoard('Quadro Teste')
});

Then(/^deverá ser validado os componentes de Quadro criado$/, () => {
	ComponentesHome.validaQuadroCriado()
});

Given(/^que esteja com o modal de Login aberto$/, () => {
	cy.get('[data-cy=login-menu]').click()
});

Then(/^deverá ser validado os componentes do modal de Login$/, () => {
	ComponentesHome.validaModalLogin()
});

Given(/^que esteja com o modal de Cadastro aberto$/, () => {
	cy.get('[data-cy=login-menu]').click()
	cy.get(':nth-child(2) > .LoginModule_logSignSwitch > a').click()
});

Then(/^deverá ser validado os componentes do modal de Cadastro$/, () => {
	ComponentesHome.validaModalCadastro()
});

Given(/^que esteja logado$/, () => {
	cy.setupAccount({ email: "test@automation.com", password: "test_automation" })
	cy.reload()
});

Then(/^deverá ser validado os componentes de Login$/, () => {
	ComponentesHome.validaLogin()
});