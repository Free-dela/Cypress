describe('Vizza Insurance Login Test', () => {
  it('should log in with valid credentials', () => {
    // Visit the homepage
    cy.visit('https://vizzainsurance.com/home');
    cy.contains('a', 'Policy Login').click();
    cy.get('#mat-input-0').type('6382228561');
    cy.get('#mat-input-1').type('Sakthi@1602');
    cy.get('#mat-input-0').should('have.value', '6382228561');
    cy.get('#mat-input-1').should('have.value', 'Sakthi@1602');
    cy.get('#main-content').contains('button', 'Login').click();

    cy.contains('span.horizontal-menu-title', 'Online Insurance').click();
    cy.contains('a', 'Health Insurance').click();

    cy.wait(3000); // Consider replacing with a better wait strategy if possible

    // Fill out user details
    cy.get('#mat-input-4').type('Care');
    cy.get('#mat-input-5').type('Supreme');
    cy.get('#mat-input-6').clear().type('Care@gmail.com');
    cy.get('#mat-input-7').clear().type('8531913069');

    // Click the "Next" button
    cy.contains('button', 'Next').click();

    // Wait for the next section to load
    cy.wait(2000); // Consider dynamic wait

    // Fill age fields by ID
    cy.get('#mat-input-19').clear().type('25');
    cy.get('#mat-input-21').clear().type('25');

    cy.get('#mat-input-8').clear().type('600012');

    cy.contains('button', 'Proceed').click();

    cy.contains('button', '₹ 9838/Yr').click();
  });
});
