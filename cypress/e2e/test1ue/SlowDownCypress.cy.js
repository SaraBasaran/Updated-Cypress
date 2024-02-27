import { slowCypressDown } from 'cypress-slow-down'

const { faker } = require('@faker-js/faker')

let fakeEmail= faker.internet.email()
let fakePassword= faker.internet.password()
let fakeName= faker.person.firstName()

slowCypressDown(false) //for each test case in default cypress waits for 1 second
describe('Slow Down Usage', () => {
    it('Slow down example test-1', () => {

        cy.slowDown(2000)  //for additional wait you can insert slowdown function with milliseconds
        cy.visit('https://automationexercise.com/login')
        cy.get('[data-qa="login-email"]').type(fakeEmail)
        cy.get('[data-qa="login-password"]').type(fakePassword)
        cy.get('[data-qa="login-button"]').click()

        cy.slowDownEnd()

        //**if we want to end a slowdown then we need to type at the very beginning of the slowdown function as 
        // slowCypressDown(false) before describe part
    });
    
    it('-Slow down example test-2', () => {
        
        cy.visit('https://automationexercise.com/login')
        cy.get('[data-qa="login-email"]').type(fakeName)
        cy.get('[data-qa="login-password"]').type(fakePassword)
        cy.get('[data-qa="login-button"]').click()
        cy.get("input[data-qa='login-email']").invoke('prop', "validationMessage")
        
        .should('eq', `Please include an '@' in the email address. '${fakeName}' is missing an '@'.`)

    });
});
