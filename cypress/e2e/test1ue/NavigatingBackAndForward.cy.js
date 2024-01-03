describe('Back/Forward Usage', () => {
    it('back command', () => {
        cy.visit('https://cypress.io')
        cy.get(':nth-child(5) > .nav-bar-link').click() //click on pricing section

        cy.title('eq', 'Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing')
        
        cy.go('back') //gets back to homepage
        cy.title('eq', 'JavaScript Component Testing and E2E Testing Framework | Cypress')

        cy.go('forward') //gets to pricing

        cy.go(-1) //gets back to homepage

        cy.go(+1)


    });
});