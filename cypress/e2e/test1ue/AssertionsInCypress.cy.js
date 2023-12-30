describe('Cypress Assertions Usage', () => {
    it('Assertion Usage Examples', () => {
        cy.visit('https://shopist.io')
        cy.title('contain', 'Shop')
        cy.url('include', 'shop.io')

        cy.get(':nth-child(3) > .jumbotron-box > :nth-child(1)').should('be.visible').and('contain', 'Shop')
        cy.get(':nth-child(3) > .jumbotron-box > :nth-child(1)').should('have.text', 'Shop the look')
    });
});