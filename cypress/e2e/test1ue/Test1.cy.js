describe('Test Suit Name', () => {
    it('Test1', () => {

        cy.visit('https://automationexercise.com')
        cy.title().should('eq', 'Automation Exercise')
        cy.url().should('include', "automationexercise")
        
    });
});