/// <reference types='cypress' />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { ModalTarefa, Tarefa } from '../../pages/quadro.page'

Given(/^que esteja dentro de um Quadro que tenha uma Lista e uma Tarefa criada$/, () => {
	cy.addBoard('Quadro Teste').addList({ title: 'Lista Teste' }).addTask({ title: 'Tarefa Teste' }).then(() => {
		cy.visit(`/board/${Cypress.env('boards')[0].id}`)
	})
});

Given(/^que esteja com o Modal aberto$/, () => {
	ModalTarefa.abrirModalTarefa()
});

When(/^alterar o nome da Tarefa pelo modal$/, () => {
	ModalTarefa.alterarNomeTarefa('Tarefa Atualizada')
});

Then(/^deverá ser validado que o nome da Tarefa foi alterado$/, () => {
	ModalTarefa.validarAlteracaoNome('Tarefa Atualizada')
});

When(/^que esteja com as opcoes abertas$/, () => {
	ModalTarefa.abrirOpcoesModal()
});

When(/^clicar no botão de fechar o Modal$/, () => {
	ModalTarefa.fecharModal()
});

Then(/^deverá ser validado que o Modal foi fechado$/, () => {
	ModalTarefa.chegarModalFechado()
});

When(/^clicar no botão de deletar a Tarefa$/, () => {
	ModalTarefa.deletarTarefa()
});

Then(/^deverá ser validado que a Tarefa foi excluída$/, () => {
	Tarefa.validaQuantidadeTarefas(0)
});

When(/^adicionar uma Descrição com nome válido$/, () => {
	ModalTarefa.abrirInputDescricao()
	ModalTarefa.digitaInputDescricao('Descricao Teste')
	ModalTarefa.salvarDescricao()
});

Then(/^deverá ser validado que a Descrição foi alterada$/, () => {
	ModalTarefa.validaAlteracaoDescricao('Descricao Teste')
	ModalTarefa.validaDescricaoVisivel()
});

When(/^adicionar uma Descrição com nome vazio$/, () => {
	ModalTarefa.abrirInputDescricao()
	ModalTarefa.limpaInputDescricao()
	ModalTarefa.salvarDescricao()
});

Then(/^deverá ser validado que não houve altearação na Descrição$/, () => {
	ModalTarefa.validaAlteracaoDescricao()
	ModalTarefa.validaDescricaoVisivel()
});

When(/^adicionar uma Descrição com nome "([^"]*)"$/, (args1) => {
	ModalTarefa.abrirInputDescricao()
	ModalTarefa.digitaInputDescricao(args1)
	ModalTarefa.salvarDescricao()
});

Then(/^deverá ser validado que a Descrição foi alterada para vazio$/, () => {
	ModalTarefa.validaDescricaoVisivel()
});

Then(/^esteja com input de alterar Descrição aberto$/, () => {
	ModalTarefa.abrirInputDescricao()
	ModalTarefa.digitaInputDescricao('Descricao Teste')
});

When(/^clicar no botão de cancelar Descricao$/, () => {
	ModalTarefa.cancelaInputDescricao()
});

When(/^adicionar uma Imagem a Tarefa$/, () => {
	ModalTarefa.uploadImagem()
});

Then(/^deverá ser exibido o preview da Imagem$/, () => {
	ModalTarefa.validaImagemPreview()
});

Given(/^que tenha feito upload de uma Imagem$/, () => {
	ModalTarefa.uploadImagem()
});

When(/^clicar no botão de remover a Imagem$/, () => {
	ModalTarefa.removerImagem()
});

Then(/^deverá ser reexibido o dropzone de upload de Imagem$/, () => {
	ModalTarefa.verificaDropUpload()
});

When(/^alterar a Data para uma Data passada$/, () => {
	const pastDate = new Date(Date.now() - 3600 * 1000 * 24 * 3).toISOString().split('T')[0]
	ModalTarefa.alterarData(pastDate)
});

Then(/^deverá ser alterado a classe do elemento Data$/, () => {
	ModalTarefa.validaDataAtrasada()
});

Then(/^deverá ser alterado a cor de exibição da Data$/, () => {
	ModalTarefa.validaAlteracaoCor()
});

When(/^alterar a Data para uma Data futura$/, () => {
	const futureDate = new Date(Date.now() + 3600 * 1000 * 24 * 3).toISOString().split('T')[0]
	ModalTarefa.alterarData(futureDate)
});

Then(/^deverá ser mantido a classe do elemento Data$/, () => {
	ModalTarefa.validaDataFutura()
});

Then(/^deverá ser alterado que não houve alteração na cor de exibição da Data$/, () => {
	ModalTarefa.validaPermanenciaCor()
});
