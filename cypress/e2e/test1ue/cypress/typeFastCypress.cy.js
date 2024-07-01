describe('Type Fast Command with Cypress', () => {
    it('Speed Test', () => {
        cy.visit("https://www.testautomationexercise.com/contact_us")
        cy.get("#message").type("You should definitely improve your website...")
    
    });
});