/// <reference types='cypress' />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { CompQuadro } from '../../pages/quadro.page'

Given(/^que esteja um Quadro$/, () => {
	cy.addBoard('Quadro Teste').then(() => {
		cy.visit(`/board/${Cypress.env('boards')[0].id}`)
	})
});

Then(/^deverá ser exibido a logo da Trello$/, () => {
	CompQuadro.validaLogo()
});

Then(/^deverá ser exibido o botão de abrir modal de login$/, () => {
	CompQuadro.validaAbrirModalLogin()
});

Then(/^deverá ser exibido o botão de voltar para Home$/, () => {
	CompQuadro.validaVoltarHome()
});

Then(/^deverá ser exibido o título do Quadro$/, () => {
	CompQuadro.validaTituloQuadro()
});

Then(/^deverá ser exibido o botão de abrir opções do Quadro$/, () => {
	CompQuadro.validaBotaoOpcoesQuadro()
});

Then(/^deverá ser exibido o botão de criar nova Lista$/, () => {
	CompQuadro.validaBotaoCriarNovaLista()
});

Then(/^que esteja com as opcoes de Quadro aberto$/, () => {
	cy.get('[data-cy=board-options] > .options').click()
});

Then(/^deverá ser exibido o botão de deletar o Quadro$/, () => {
	CompQuadro.validaBotaoDeletaQuadro()
});

Then(/^deverá ser exibido o botão de copiar propriedades do Quadro$/, () => {
	CompQuadro.validaBotaoPropriedadesQuadro()
});

Then(/^que esteja com o input de nova Lista aberto$/, () => {
	cy.get('[data-cy=add-list]').click()
});

Then(/^deverá ser exibido o input de adicionar nome a Lista$/, () => {
	CompQuadro.validaInputNomeLista()
});

Then(/^deverá ser exibido de salvar a Lista$/, () => {
	CompQuadro.validaBotaoSalvarLista()
});

Then(/^deverá ser exibido o botão de cancelar o input da Lista$/, () => {
	CompQuadro.validaBotaoCancelarLista()
});

Then(/^que tenha uma Lista criada$/, () => {
	cy.addList({title: 'Lista Teste'})
});

Then(/^deverá ser exibido a div da Lista criada$/, () => {
	CompQuadro.validaDivLista()
});

Then(/^deverá ser exibido o título da Lista$/, () => {
	CompQuadro.validaTituloLista()
});

Then(/^deverá ser exibido o botão de abrir opções da Lista$/, () => {
	CompQuadro.validaBotaoOpcoesLista()
});

Then(/^deverá ser exibido o botão de adicionar nova Tarefa$/, () => {
	CompQuadro.validaBotaoCriarNovaTarefa()
});

Then(/^que tenha uma Lista criada$/, () => {
	cy.addList({title: 'Lista Teste'})
});

Then(/^esteja com as opcoes de Lista aberta$/, () => {
	cy.get('[data-cy=list] > .dropdown > .options').click()
});

Then(/^deverá ser exibido o botão de deletar Lista$/, () => {
	CompQuadro.validaBotaoDeletaLista()
});

Then(/^deverá ser exibido o botão de copiar propriedades da Lista$/, () => {
	CompQuadro.validaBotaoPropriedadesLista()
});

Then(/^que tenha uma Lista criada$/, () => {
	cy.addList({title: 'Lista Teste'})
});

Then(/^que esteja com o input de nova Terefa aberto$/, () => {
	cy.get('[data-cy=new-task]', {multiple: true}).click()
});

Then(/^deverá ser exibido o input de adicionar nome a Tarefa$/, () => {
	CompQuadro.validaInputNomeTarefa()
});

Then(/^deverá ser exibido o botão de salvar a Tarefa$/, () => {
	CompQuadro.validaBotaoSalvarTarefa()
});

Then(/^deverá ser exibido o botão de cancelar o input da Tarefa$/, () => {
	CompQuadro.validaBotaoCancelarTarefa()
});

Then(/^que tenha uma Lista criada$/, () => {
	cy.addList({title: 'Lista Teste'})
});

Then(/^que tenha uma Tarefa criada$/, () => {
	cy.addTask({title: 'Tarefa Teste'})
});

Then(/^deverá ser exibido a div da Tarefa criada$/, () => {
	CompQuadro.validaDivTarefa()
});

Then(/^deverá ser exibido o título da Tarefa$/, () => {
	CompQuadro.validaTituloTarefa()
});

Then(/^deverá ser exibido o checkbox para completar a Tarefa$/, () => {
	CompQuadro.validaCheckboxTarefa()
});
