/// <reference types='cypress' />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { Tarefa, ComponentesQuadro } from '../../pages/quadro.page'


Given(/^que esteja dentro de um Quadro que tenha uma Lista criada$/, () => {
	cy.addBoard('Quadro Teste').addList({ title: 'Lista Teste' }).then(() => {
		cy.visit(`/board/${Cypress.env('boards')[0].id}`)
	})
});

When(/^adicionar uma Tarefa com nome válido$/, () => {
	Tarefa.abrirInputTarefa()
	Tarefa.digitaInputTarefa('Tarefa Teste')
	Tarefa.salvarTarefa()
});

Then(/^deverá ser validado a criação da Tarefa$/, () => {
	Tarefa.validaQuantidadeTarefas(1)
});

When(/^adicionar uma Tarefa com nome vazio$/, () => {
	Tarefa.abrirInputTarefa()
	Tarefa.limpaInputTarefa()
	Tarefa.salvarTarefa()
});

Then(/^deverá ser validado que a Tarefa não foi criada$/, () => {
	Tarefa.validaQuantidadeTarefas(0)
});

When(/^adicionar "([^"]*)" Tarefas aleatórias$/, (args1) => {
	Tarefa.criaMultiplasTarefas(args1)
});

Then(/^deverá ser validado que a quantidade de Tarefas criadas é "([^"]*)"$/, (args1) => {
	Tarefa.validaQuantidadeTarefas(args1)
});

Given(/^que esteja com o input de adicionar Tarefa aberto$/, () => {
	Tarefa.abrirInputTarefa()
	Tarefa.digitaInputTarefa('Tarefa Teste')
});

When(/^clicar no botao de cancelar a adição Tarefa$/, () => {
	Tarefa.cancelaInputTarefa()
});

Then(/^deverá ser validado que a Tarefa não foi criada$/, () => {
	Tarefa.validaQuantidadeTarefas(0)
});

Given(/^que tenha uma Tarefa criada$/, () => {
	cy.addTask({ title: 'Tarefa Teste' })
});

When(/^marcar check na Tarefa$/, () => {
	Tarefa.cliqueCheckboxTarefa()
});

Then(/^deverá alterar a classe da Tarefa para concluída$/, () => {
	Tarefa.validaTarefaCompleta()
});

Given(/^que esteja marcada como Tarefa concluída$/, () => {
	Tarefa.cliqueCheckboxTarefa()
});

When(/^marcar uncheck na Tarefa$/, () => {
	Tarefa.cliqueCheckboxTarefa()
});

Then(/^deverá alterar a classe da Tarefa para pendente$/, () => {
	Tarefa.validaTarefaPendente()
});
