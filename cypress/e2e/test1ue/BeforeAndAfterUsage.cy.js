describe('Before and After Usage', () => {

    before(() => {
        cy.visit('https://automationexercise.com')
      
    });

    after(() => {
        cy.log('Sample Usage');
    });
    it('Before Test1', () => {
        cy.title().should('eq', "Automation Exercise")  
    });
});