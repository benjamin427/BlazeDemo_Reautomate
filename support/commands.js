// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login_url", () => {
    cy.visit("https://blazedemo.com/login")
    cy.get('a').invoke('attr', "href").then(href => {
        cy.request(href).its('status').should('eq', 200)
    })
})
Cypress.Commands.add("register_url", () => {
    cy.visit("https://blazedemo.com/register")
    cy.get('a').invoke("attr", "href").then(href => {
        cy.request(href).its('status').should('eq', 200)
    })

})
Cypress.Commands.add('resetPassword_url', () => {
    cy.visit("https://blazedemo.com/password/reset")
    cy.get('a').invoke("attr", "href").then(href => {
        cy.request(href).its('status').should("eq", 200)
    })
})

