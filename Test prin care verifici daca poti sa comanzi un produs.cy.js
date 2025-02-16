describe('Test for check if you can order a product', () =>{
    it('Should add the product to the cart and verify if you can do all stepts until checkout', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('data-test="login-button"').click();
        cy.get('data-test="add-to-cart-sauce-labs-backpack"').click();
        cy.get('data-test="shopping-cart-badge"').click();
        cy.get('data-test="checkout"').click();
        cy.get('data-test="firstName"').type('Adrian');
        cy.get('data-test="lastName"').type('Zarnescu');
        cy.get('data-test="postalCode"').type(5020);
        cy.get('data-test="continue"').click();
        cy.get('data-test="finish"').click();
        cy.get('data-test="title"').should('exist');
        

    
    
    
    
    
    
    
    
    
    })
})