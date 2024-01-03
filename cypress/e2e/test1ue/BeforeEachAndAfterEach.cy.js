describe('Before and After Usage', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com')
      
    });

    afterEach(() => {
        cy.log('Sample Usage');
    });
    it('Before Test1', () => {
        cy.title().should('eq', "Automation Exercise")  
    });

    it('After Test1', () => {
        cy.url().should('contain', "automation")
    });
});