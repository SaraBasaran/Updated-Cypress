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
import customCommandsLogin from "../pom/customCommandsLogin"

Cypress.Commands.add('login', (username, password) => {  

    cy.visit('https://www.automationexercise.com/login')//  you can type either here or yo can type in the same 
    //cy file with a beforeEach() block
    customCommandsLogin.usernameField.type(username)
    customCommandsLogin.passwordField.type(password)
    customCommandsLogin.submitBtn.click()

})
