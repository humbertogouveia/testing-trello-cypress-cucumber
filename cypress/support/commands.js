Cypress.Commands.add('resetApi', () => {
    cy.request({
        method: 'POST',
        url: '/reset'
    })
})

Cypress.Commands.add('addBoard', (name) => {
    cy.request({
        method: 'POST',
        url: '/api/boards',
        body: { name }
    }).then(({ body }) => {
        Cypress.env('boards').push(body)
    })
})

Cypress.Commands.add('addList', ({ title, boardIndex = 0 }) => {
    cy.request({
        method: 'POST',
        url: '/api/lists',
        body: {
            boardId: Cypress.env('boards')[boardIndex].id,
            title
        }
    }).then(({ body }) => {
        Cypress.env('lists').push(body)
    })
})

Cypress.Commands.add('addTask', ({ title, boardIndex = 0, listIndex = 0 }) => {
    cy.request({
        method: 'POST',
        url: '/api/tasks',
        body: {
            boardId: Cypress.env('boards')[boardIndex].id,
            listId: Cypress.env('lists')[listIndex].id,
            title
        }
    }).then(({ body }) => {
        Cypress.env('tasks').push(body)
    })
})

Cypress.Commands.add('setupAccount', ({email, password}) => {
    cy.request({
        method: 'POST',
        url: '/signup',
        body: {
            email,
            password
        }
    }).then(response => {
        const token = response.body.accessToken
        cy.setCookie('trello_token', token)
    })
})

Cypress.Commands.add('muteLogsXHR', () => {
    Cypress.Server.defaults({
        ignore: (xhr) => {
            return true
        }
    })
})