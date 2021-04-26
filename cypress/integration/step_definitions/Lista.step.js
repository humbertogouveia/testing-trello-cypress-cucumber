/// <reference types='cypress' />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { Lista } from '../../pages/quadro.page'

Given(/^que esteja dentro de um Quadro$/, () => {
	cy.addBoard('Quadro Teste').then(() => {
		cy.visit(`/board/${Cypress.env('boards')[0].id}`)
	})
});

When(/^adicionar uma Lista com nome válido$/, () => {
	Lista.abreInputLista()
	Lista.digitaInputLista('Lista Teste')
	Lista.salvarLista()
});

Then(/^deverá ser validado a criação da Lista$/, () => {
	Lista.validaQuantidadeListas(1)
});

When(/^adicionar uma Lista com nome vazio$/, () => {
	Lista.abreInputLista()
	Lista.limpaInputLista()
	Lista.salvarLista()
});

Then(/^deverá ser validado que a Lista não foi criada$/, () => {
	Lista.validaQuantidadeListas(0)
});

When(/^adicionar "([^"]*)" Listas aleatórias$/, (args1) => {
	Lista.criaMultiplasListas(args1)
});

Then(/^deverá ser validado que a quantidade de Listas criadas é "([^"]*)"$/, (args1) => {
	Lista.validaQuantidadeListas(args1)
});

Given(/^que esteja com uma Lista criada$/, () => {
	cy.addList({ title: 'Lista Teste' })
});

When(/^deletar a Lista$/, () => {
	Lista.deletarLista()
});

Then(/^deverá ser validado que a Lista foi removida$/, () => {
	Lista.validaQuantidadeListas(0)
});

Given(/^que esteja com o input de adicionar Lista aberto$/, () => {
	Lista.abreInputLista()
	Lista.digitaInputLista('Lista Teste')
});

When(/^clicar no botao de cancelar a adição da Lista$/, () => {
	Lista.cancelaInputLista()
});

Then(/^deverá ser validado que a Lista não foi criada$/, () => {
	Lista.validaQuantidadeListas(0)
});
