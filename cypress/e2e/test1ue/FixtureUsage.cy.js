describe('Fixture Usage', () => {
    it('Fixture Usage for Data Invalid USername + Invalid Password', () => {
        //if theres any subfolder under fixtures folder then we should type a slash between folder and file names.
     //for ex; cy.fixtures("subfoldername/loginData")

     cy.fixture("loginData").as('credentials')
     cy.get('@credentials').then((data) =>{
        cy.login(data.validUsername, data.validPassword)
     })
       
    })

    it('Fixture Usage for Invalid Login Valid Username + Invalid Password', () => {
        cy.fixture("loginData").as('credentials')
        cy.get('@credentials').then((data) =>{
           cy.login(data.validUsername, data.invalidPassword)
        })
 
     })
     it('Then Usage', () => {  //then function should be related with the previous syntax
        cy.get('#price').then(()=>{

            cy.get('.priceFields').should('be.visible').type('100')

            })
     });
});