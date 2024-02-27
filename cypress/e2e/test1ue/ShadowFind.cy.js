describe('Shadow and Find Usage', () => {
    before(() => {
        cy.on('uncaught:exception', (err, runnable)=> {return false})
    });
    it('Shadow and Find Example-1', () => {
       //get the previous line of html code before #shadow root and find the exact way of locating the inner element in shadow root (like swtiching to frames in Selenium)

        cy.visit('https://www.mercedes-benz.co.uk/passengercars.html')
        //click on Agree to All button
        cy.get('cmm-cookie-banner[settings-id="fph8XBqir"]').
        shadow().find('wb7-button[class="button button--accept-all wb-button hydrated"]').contains('Agree to all').click()
    

      });
});