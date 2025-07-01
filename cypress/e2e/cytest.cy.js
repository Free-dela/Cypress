import 'cypress-real-events/support';
import 'cypress-xpath';
import '@shelex/cypress-allure-plugin';

describe('Vizza Insurance Login & Application Flow', () => {
  it('should log in, fill the form, upload documents, and submit successfully', () => {
    cy.visit('https://vizzainsurance.com/home');
    cy.contains('a', 'Policy Login').click();
    cy.get('#mat-input-0').type('6382228561');
    cy.get('#mat-input-1').type('Sakthi@1602');
    cy.get('#main-content').contains('button', 'Login').click();
    cy.get('.dashboard').should('be.visible');cy.wait(5000);

    cy.contains('span.horizontal-menu-title', 'Online Insurance').realHover();
    cy.contains('span.horizontal-menu-title', 'Health Insurance').click();
    cy.get('body').realHover();cy.wait(5000);

    cy.get('#mat-input-4').click();
    cy.get('#mat-input-4').type('Care');
    cy.get('#mat-input-5').type('Supreme');
    cy.get('#mat-input-6').clear().type('Care@gmail.com');
    cy.get('#mat-input-7').clear().type('8531913069');
    cy.contains('button', 'Next').click();

    cy.get('#mat-input-19').clear().type('25');
    cy.get('#mat-input-21').clear().type('25');
    cy.get('#mat-input-8').clear().type('600012');
    cy.contains('button', 'Proceed').click();

    cy.get('#mat-select-value-5').click();
    cy.get('#mat-checkbox-9').click();
    cy.get('#mat-option-2').click();

    cy.wait(5000); 
    cy.xpath('/html/body/div[5]/div[1]').click(); 

    cy.contains('button', '₹ 9838/Yr').click();
    cy.contains('span.mat-button-wrapper', 'Ok').click();
    cy.wait(5000);
    cy.contains('Other').click();
    cy.contains('span', 'Identity Proof Type')
      .parentsUntil('mat-form-field')
      .last().click();
    cy.contains('span.mat-option-text', 'PAN').click();

    cy.contains('span', 'Address Proof Type')
      .parentsUntil('mat-form-field')
      .last().click();
    cy.contains('span.mat-option-text', 'Voter ID').click();

   const filePath = 'C:\\Users\\freed\\OneDrive\\Desktop\\Doc\\TestDoc.jpg';
    cy.get('input[type="file"]').eq(0).selectFile(filePath, { force: true });
    cy.get('input[type="file"]').eq(1).selectFile(filePath, { force: true });
    cy.contains('button', 'Submit').click();

    cy.get('#mat-select-value-31').click();
    cy.contains('span.mat-option-text', 'MR').click();
      cy.get('#mat-input-50').type('Care');
      cy.get('#mat-input-51').type('Supreme');
      cy.get('#mat-input-53').type('09121999');
      cy.get('#mat-input-56').type('Care@gmail.com');
      cy.get('#mat-input-57').type('8531913067');
    cy.get('#mat-input-34').type('3');
    cy.get('#mat-input-35').type('4');
    cy.get('#mat-input-36').type('600012');cy.wait(5000);

    cy.get('#mat-select-value-23').click();
    cy.wait(2000);
    cy.contains('span.mat-option-text', 'Chennai').click();

    cy.get('.mat-checkbox-inner-container').first().click();
    cy.contains('span.mat-button-wrapper', 'Next').click();
    cy.get('#mat-checkbox-22 .mat-checkbox-inner-container').click();
    cy.get('#mat-input-68').type('170');
    cy.get('#mat-input-69').type('70');

    cy.contains('mat-expansion-panel-header', 'SPOUSE DETAILS').click();
    cy.get('#mat-select-value-39').click();
    cy.contains('span.mat-option-text', 'MS').click();

  cy.get('#mat-input-70').type('test');
  cy.get('#mat-input-71').type('w');
  cy.get('#mat-input-73').type('08062001');
  cy.get('#mat-input-82').type('free@gmail.com');
  cy.get('#mat-input-83').type('8531913068');

    cy.get('#mat-select-value-35').click();
    cy.contains('span.mat-option-text', 'SPOUSE').click();
    cy.get('#mat-input-78').type('160');
    cy.get('#mat-input-79').type('60');
    cy.get('#cdk-accordion-child-17').contains('button', 'Next').click();
    cy.get('#cdk-accordion-child-11').contains('button', 'Next').click();

    cy.get('#mat-select-value-41').click();
    cy.contains('span.mat-option-text', 'MR').click();
      cy.get('#mat-input-84').type('Test');
      cy.get('#mat-input-85').type('Care');
      cy.get('#mat-input-86').type('09121999');
    cy.get('#mat-select-value-43').click();
    cy.contains('span.mat-option-text', 'BROTHER').click();
    cy.get('#mat-input-87').type('000000000000000');
    cy.get('#mat-input-88').type('IOBA0002372');

    cy.get('#cdk-accordion-child-12').contains('button', 'Next').click();
  });
});
