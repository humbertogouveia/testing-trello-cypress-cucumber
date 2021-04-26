/// <reference types='cypress' />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { DragAndDrop, Lista, ModalTarefa, ComponentesQuadro } from '../../pages/quadro.page'


Given(/^que esteja dentro de um Quadro$/, () => {
    cy.addBoard('Quadro Teste').then(() => {
        cy.visit(`/board/${Cypress.env('boards')[0].id}`)
    })
});

Given(/^que tenha duas Listas criadas com duas Tarefas em cada$/, () => {
    cy.addList({ title: 'Lista 1' })
    cy.addTask({ title: 'Tarefa 1' })
    cy.addTask({ title: 'Tarefa 2' })
    cy.addList({ title: 'Lista 2' })
    cy.addTask({ title: 'Tarefa 3', listIndex: '1' })
    cy.addTask({ title: 'Tarefa 4', listIndex: '1' })
});

When(/^pegar uma Tarefa e largar em outra Lista e vice-versa$/, () => {
    DragAndDrop.trocaTarefasLista()
});

Then(/^deverá ser validado o funcionamento do Componente abrir Tarefa$/, () => {
    DragAndDrop.abreTarefaNum(0)
    ComponentesQuadro.validaModalTarefa()
    ModalTarefa.abrirOpcoesModal()
    ModalTarefa.fecharModal()
    DragAndDrop.abreTarefaNum(2)
    ComponentesQuadro.validaModalTarefa()
});

When(/^pegar uma Tarefa e largar na mesma Lista$/, () => {
    DragAndDrop.trocaEntreTarefas()
});

When(/^pegar uma Lista e largar em outra Lista$/, () => {
    DragAndDrop.trocaEntreListas()
});

Then(/^deverá ser validado o funcionamento do Componente adicionar Tarefa$/, () => {
    DragAndDrop.abreInputTarefa(0)
    ComponentesQuadro.validaNovaTarefa()
    DragAndDrop.abreInputTarefa(1)
    ComponentesQuadro.validaNovaTarefa()
});

When(/^pegar o input de adicionar Lista e largar em outra Lista$/, () => {
    DragAndDrop.trocaListaInput()
});

Then(/^deverá ser validado o funcionamento do Componente input$/, () => {
    Lista.abreInputLista()
    ComponentesQuadro.validaNovaLista()
});
