/// <reference types='cypress' />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { ComponentesQuadro } from '../../pages/quadro.page'

Given(/^que esteja em um Quadro$/, () => {
	cy.addBoard('Quadro Teste').then(() => {
		cy.visit(`/board/${Cypress.env('boards')[0].id}`)
	})    
});

Then(/^deverá ser validado os componentes da pagina Quadro$/, () => {
	ComponentesQuadro.validaQuadro()
});

Given(/^que esteja com as opcoes de Quadro aberto$/, () => {
	cy.get('[data-cy=board-options] > .options').click()
});

Then(/^deverá ser validado os componentes de opcoes do Quadro$/, () => {
	ComponentesQuadro.validaOpcoesQuadro()
});

Given(/^que esteja com o input de nova Lista aberto$/, () => {
	cy.get('[data-cy=add-list]').click()
});

Then(/^deverá ser validado os componentes de input de nova Lista$/, () => {
	ComponentesQuadro.validaNovaLista()
});

Given(/^que tenha uma Lista criada$/, () => {
	cy.addList({title: 'Lista Teste'})
});

Then(/^deverá ser validado os componentes de Lista criada$/, () => {
	ComponentesQuadro.validaListaCriada()
});

Given(/^esteja com as opcoes de Lista aberta$/, () => {
	cy.get('[data-cy=list] > .dropdown > .options').click()
});

Then(/^deverá ser validado os componentes de opcoes da Lista$/, () => {
	ComponentesQuadro.validaOpcoesLista()
});

Given(/^que esteja com o input de nova Terefa aberto$/, () => {
	cy.get('[data-cy=new-task]').click()
});

Then(/^deverá ser validado os componentes de input de nova Tarefa$/, () => {
	ComponentesQuadro.validaNovaTarefa()
});

Given(/^que tenha uma Tarefa criada$/, () => {
	cy.addTask({title: 'Tarefa Teste'})
});

Then(/^deverá ser validado os componentes de Tarefa criada$/, () => {
	ComponentesQuadro.validaTarefaCriada()
});

Given(/^que esteja com o Modal da tarefa aberto$/, () => {
	cy.get('[data-cy=task]').click()
});

Then(/^deverá ser validado os componentes de Modal da tarefa$/, () => {
	ComponentesQuadro.validaModalTarefa()
});

Given(/^que esteja com as opcoes do Modal aberto$/, () => {
	cy.get('[data-cy=task-module-close] > .options').click()
});

Then(/^deverá ser validado os componentes das opcoes de Modal$/, () => {
	ComponentesQuadro.validaOpcoesModal()
});

Given(/^que esteja o input de nova Descricao aberto$/, () => {
	cy.get('[data-cy=task-description]').click()
});

Then(/^deverá ser validado os componentes de input de nova Descricao$/, () => {
	ComponentesQuadro.validaNovaDescricao()
});

Given(/^que tenha uma Descricao criada$/, () => {
	cy.get('[data-cy=task-description]').type('Descricao Teste{enter}')
});

Then(/^deverá ser validado os componentes de Descricao criada$/, () => {
	ComponentesQuadro.validaDescricaoCriada()
});

