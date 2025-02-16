describe('Product removal test from the cart (check if the product has disappeared or if the cart is empty).', () =>{
    it('Should remove the product from the cart', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('data-test="login-button"').click();
        cy.get('data-test="shopping-cart-badge"').click();
        cy.get('data-test="remove-sauce-labs-backpack"').click();
        cy.get('data-test="title"').should('exist');
        
    
    
    
    
    
    
    
    
    
    })
})