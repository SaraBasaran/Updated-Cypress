class HomepageSecond{

    navigate(){

      cy.visit('https://cypress.io')
      
    }

    get pricingbtn(){
     return cy.get(':nth-child(5) > .nav-bar-link')
    }

}
export default new HomepageSecond()