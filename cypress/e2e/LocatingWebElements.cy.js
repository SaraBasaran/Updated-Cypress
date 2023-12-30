describe('Cypress Locators', () => {
    it('html element locator', () => {
        cy.get("#user-name") //locating with id
        cy.get(".login") // locating with class
        cy.get("input")  // locating with tag
        cy.get('input[name="user-name"]') //locating with tag and attribute

        //all the 3 following examples give the same output
        cy.contains("Login")
        cy.get('a').contains("Login")
        cy.get('a:contains("Login")')
    });
});