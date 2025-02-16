describe('Test for adding a product to the cart', () =>{
    it('Should add the product to the cart and verify if it was added', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('data-test="login-button"').click();
        cy.get('data-test="add-to-cart-sauce-labs-backpack"').click();
        cy.get('data-test="shopping-cart-badge"').click();
        cy.get('data-test="inventory-item-name"').click();

    
    
    
    
    
    
    
    
    
    })
})