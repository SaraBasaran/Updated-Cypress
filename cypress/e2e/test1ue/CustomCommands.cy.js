describe('Custom Commands', () => {
    it('Custom Command Usage for Invalid USername + Invalid Password', () => {
       cy.login("test1@abc.com", "test1Password")

    })

    it('Custom Command Usage for Invalid Login Valid Username + Invalid Password', () => {
        cy.login("test1@gmail.com", "test1Password")
 
     })
});