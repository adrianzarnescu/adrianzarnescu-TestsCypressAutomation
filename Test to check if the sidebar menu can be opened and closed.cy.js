describe('Test to check if the sidebar menu can be opened and closed', () => {

    it('It should open and close the sidebar menu', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/inventory.html');

        cy.get('data-test="login-button"').should('be.visible');

        cy.get('data-test="login-button"').click();

        cy.get('id="react-burger-menu-btn"').should('be.visible');

        cy.get('id="react-burger-menu-btn"').click();

        cy.get('id="react-burger-menu-btn"').should('not.be.visible');
    });

});
