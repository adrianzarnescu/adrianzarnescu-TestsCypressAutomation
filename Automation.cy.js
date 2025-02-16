describe('Login test with incorrect username or password', () => {

    it('It should display an error message for incorrect username or password', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type('standard_user'); 
        cy.get('[data-test="password"]').type('pass123'); 
        
        cy.get('data-test="login-button"').click();

       
        cy.get('.error-message-container').should('be.visible');
        cy.get('.error-message-container').should('contain', 'Epic sadface: Username and password do not match any user in this service');
    });

});