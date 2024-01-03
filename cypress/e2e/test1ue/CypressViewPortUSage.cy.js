describe('Viewport Usage', () => {
    it('Viewport usage with numbers', () => {
        cy.viewport(1200, 1000) //you can adjust the view of the webpage manually
         cy.visit('https://shopist.io') 
    });

    it('Viewport usage with string', () => {
        cy.viewport('macbook-16')  //you can view the webpage as it looks in mac book
         cy.visit('https://shopist.io') 
    });

    it('Viewport usage with string', () => {
        cy.viewport('iphone-se2')
         cy.visit('https://shopist.io') 
    });


});