class customCommandsLogin{

    get usernameField(){
     return cy.get('[data-qa="login-email"]')
    }
    get passwordField(){
        return cy.get('[data-qa="login-password"]')
    }

    get submitBtn(){
        return cy.get('[data-qa="login-button"]')
    }
      

}
export default new customCommandsLogin()