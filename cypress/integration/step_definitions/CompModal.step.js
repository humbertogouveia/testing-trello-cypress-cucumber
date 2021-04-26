/// <reference types='cypress' />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { CompModal } from '../../pages/quadro.page'

Given(/^que esteja um Quadro$/, () => {
	cy.addBoard('Quadro Teste').then(() => {
		cy.visit(`/board/${Cypress.env('boards')[0].id}`)
	})
});

(/^que tenha uma Lista criada$/, () => {
	cy.addList({title: 'Lista Teste'})
});

(/^que tenha uma Tarefa criada$/, () => {
	cy.addTask({title: 'Tarefa Teste'})
});

(/^que esteja com o Modal da tarefa aberto$/, () => {
	cy.get('[data-cy=task-module-close] > .options').click()
});

Then(/^deverá ser exibido o botão de abrir opções da Tarefa$/, () => {
	CompModal.validaModuleOpcoes()
});

Then(/^deverá ser exibido no Modal, o título da Tarefa$/, () => {
	CompModal.validaModuleNome()
});

Then(/^deverá ser exibido no Modal, a descrição do título da Tarefa$/, () => {
	CompModal.validaModuleNomeDesc()
});

Then(/^deverá ser exibido no Modal, o título Descrição$/, () => {
	CompModal.validaModuleDesc()
});

Then(/^deverá ser exibido no Modal, o botão de adicionar Descrição$/, () => {
	CompModal.validaModuleDescDesc()
});

Then(/^deverá ser exibido no Modal, o título Data$/, () => {
	CompModal.validaModuleDuedate()
});

Then(/^deverá ser exibido no Modal, o botão de alterar a Data$/, () => {
	CompModal.validaModuleDuedateDesc()
});

Then(/^deverá ser exibido no Modal, o título Upload Imagem$/, () => {
	CompModal.validaModuleImage()
});

Then(/^deverá ser exibido no Modal, o dropzone de upload da Imagem$/, () => {
	CompModal.validaModuleImageDesc()
});
