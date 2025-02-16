describe('Login test with the standard user (check if you are logged in afterwards)', () => {

    it('It should log in with the standard user and verify that the login is successful', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type('standard_user'); 
        cy.get('[data-test="password"]').type('secret_sauce');  

        cy.get('data-test="login-button"').click();

        cy.url().should('include', '/inventory.html');  
        cy.get('.inventory_list').should('be.visible');  

        cy.get('.header_secondary_container').should('be.visible');
    });

});
