/// <reference types='cypress' />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { Quadro, ComponentesHome } from '../../pages/home.page'
beforeEach(() => {
    cy.resetApi()
});

Given(/^que esteja na pagina Home$/, () => {
    cy.visit('')
});

When(/^adicionar um Quadro com nome válido$/, () => {
    Quadro.abreInputQuadro()
    Quadro.digitaInputQuadro('Quadro Teste')
    Quadro.salvarQuadro()
});

Then(/^deverá ser validado que houve o redirecionamento para dentro do Quadro$/, () => {
    Quadro.validaUrlForaDaHome()
});

Then(/^deverá ser validado a criação do Quadro$/, () => {
    Quadro.voltarParaHome()
    Quadro.validaExistenciaQuadro('Quadro Teste')
});

When(/^tentar adicionar um Quadro com nome vazio$/, () => {
    Quadro.abreInputQuadro()
    Quadro.limpaInputQuadro()
    Quadro.salvarQuadro()
});

Then(/^deverá ser mantido a Tela e o estado dos Componentes$/, () => {
    ComponentesHome.validaNovoQuadro()
    Quadro.validaUrlHome()
});

When(/^adicionar "([^"]*)" Quadros aleatórios$/, (args1) => {
    Quadro.criaMultiplosQuadros(args1)
});

Then(/^deverá ser validado que a quantidade de Quadros criados é "([^"]*)"$/, (args1) => {
    Quadro.validaQuantidadeQuadros(args1)
});

Then(/^que esteja com o input de adicionar Quadro aberto$/, () => {
    Quadro.abreInputQuadro()
});

When(/^clicar no botao de cancelar a adição do Quadro$/, () => {
    Quadro.cancelarQuadro()
});

Then(/^deverá ser validado que o Quadro não foi criado$/, () => {
    Quadro.validaQuantidadeQuadros(0)
});

Given(/^que tenha um Quadro criado$/, () => {
    cy.addBoard('Quadro Teste')
});

Given(/^que esteja dentro do Quadro$/, () => {
    cy.visit(`/board/${Cypress.env('boards')[0].id}`)
});

When(/^deletar o Quadro$/, () => {
    Quadro.abrirOpcoesQuadro()
    Quadro.deletarQuadro()
});

Then(/^deverá ser validado que houve a remoção do Quadro$/, () => {
    Quadro.validaQuantidadeQuadros(0)
});

Then(/^deverá ser valido que houve o redirecionamento para a pagina Home$/, () => {
    Quadro.validaUrlHome()
});

When(/^alterar o nome do Quadro$/, () => {
    Quadro.alterarNomeQuadro('Quadro Atualizado')
});

Then(/^deverá ser validado que houve a alteração do nome do Quadro na página Home$/, () => {
    Quadro.voltarParaHome()
    Quadro.validaExistenciaQuadro('Quadro Atualizado')
});
