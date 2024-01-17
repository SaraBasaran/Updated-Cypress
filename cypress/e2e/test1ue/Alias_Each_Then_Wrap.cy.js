describe('Alias, Each, Then, Wrap', () => {
    it('Alias & Each', () => {

        let itemLength;

        cy.visit('www.shopist.io')
        cy.get('.navbar-section a').as('NavbarMenus')
        cy.get('@NavbarMenus').then(($el) =>{  //take all elements from nabar menu

            itemLength= $el.length;
        }).each(($el, index) => { //take each element of the navbar menu

            cy.get('@NavbarMenus').should('be.visible')
            cy.log('Navbar Menu '+ index + ':'+ $el.text())
            cy.log(itemLength)

            
            if($el.text().includes('Bedding')){

                cy.wrap($el).click() //if there is Bedding text among the elements then click on it
             }
        })

    });
});