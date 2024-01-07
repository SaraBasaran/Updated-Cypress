export class Homepage{

    navigate(){

      cy.visit('https://cypress.io')
      return this;

    }

    pricingbtn(){
      cy.get(':nth-child(5) > .nav-bar-link').click() 
    }




}