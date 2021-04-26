import './commands'
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'

before(() => {
    cy.resetApi()
    cy.muteLogsXHR()
});

beforeEach(() => {
    Cypress.env('boards', [])
    Cypress.env('lists', [])
    Cypress.env('tasks', [])
});

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})