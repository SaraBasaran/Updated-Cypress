
describe('Main Commands', () => {
    it('Cypress Visit Usage', () => {


        /*
        if the url is identified in config.js file 
        cy.visit("/commands")

        if the url is not identified in config.js file then you can direstly type 
        cy.visit("https://url/endpoint")
        */
        cy.visit("/commands")
        
    });

    it('Cy.title() usage', () => { //title() checks the title of the website as a string
        cy.title().should('eq', "cypress.io")
        cy.title().should('include', "cypress")
        cy.title().should('contain', "cypress")
    });
    

    it('Cy.url() and cy.location() usage', () => {

      cy.url().should("eq", "https://example.cypress.io/commands")
      cy.url().should("include", "cypress")

      cy.location("pathname").should("eq","https://example.cypress.io/commands")
      cy.location("protocol").should("eq","https")
    });

    it('cy.get() commands and usages', () => {
        cy.get("#button").click()
        cy.get("#button").as("button") //as means alias like in SQL ==> cy.get(@button) --> we named button webelement with as().
    });

    it('cy.log usage for local report issues', () => { //if we want to see to which point our tests can pass then we can
                                                      // type sth there to beable to type sth on runner console we can use cy.log
        cy.log("trial...")
    });

    it.skip('skip and only commands', () => {
        /*
        
         it.skip("", ()=>{
                   this test will be skipped and the other test cases will work
          })

          it.only("", ()=>{
                   only this test works
          })

        */
    });


});