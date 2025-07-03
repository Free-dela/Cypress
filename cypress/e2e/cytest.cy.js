import 'cypress-real-events/support';
import 'cypress-xpath';
import '@shelex/cypress-allure-plugin';

function typeIntoMatInput(inputNumber, value) {cy.get(`#mat-input-${inputNumber}`).type(value);}

function clickNextButton(accordionNumber = null) {const selector = accordionNumber !== null 
    ? `#cdk-accordion-child-${accordionNumber}` 
    : '#main-content';
  cy.get(selector).contains('button', 'Next').click(); }

function openMatSelect(selectNumber) {cy.get(`#mat-select-value-${selectNumber}`).click();}

function selectMatOptionByText(optionText) {cy.contains('span.mat-option-text', optionText).click();}

function selectMatOption(optionText, checkboxNumber = null) {
  if (checkboxNumber !== null) {cy.get(`#mat-checkbox-${checkboxNumber}`).click();}
  cy.contains('span.mat-option-text', optionText).click();}

function loginToVizza(phone, password) {
  cy.visit('https://vizzainsurance.com/home');cy.contains('a', 'Policy Login').click();
  typeIntoMatInput(0, phone);typeIntoMatInput(1, password);
  cy.get('#main-content').contains('button', 'Login').click();
  cy.wait(5000);}

function navigateToHealthInsurance() {
  cy.contains('span.horizontal-menu-title', 'Online Insurance').realHover();
  cy.contains('span.horizontal-menu-title', 'Health Insurance').click();
  cy.get('body').realHover();cy.wait(5000);}

function fillInsuranceForm({ FirstName, LastName, email, phone }) {
  typeIntoMatInput(4, FirstName);typeIntoMatInput(5, LastName);
  typeIntoMatInput(6, email);typeIntoMatInput(7, phone);
  cy.contains('button', 'Next').click();}

function enterMemberDetails() {
  typeIntoMatInput(19, '25');typeIntoMatInput(21, '25');
  typeIntoMatInput(8, '600012');cy.contains('button', 'Proceed').click();}

function selectCityAndPlan() {
  openMatSelect(5);
  cy.get('#mat-checkbox-9').click();
  cy.get('#mat-option-2').click();
  cy.wait(5000);
  cy.xpath('/html/body/div[5]/div[1]').click();
  cy.contains('button', '₹ 9838/Yr').click();
  cy.contains('span.mat-button-wrapper', 'Ok').click(); cy.wait(5000);}
  
function uploadDocuments(filePath) {
  cy.contains('Other').click();
  cy.contains('span', 'Identity Proof Type').parentsUntil('mat-form-field').last().click();
  cy.contains('span.mat-option-text', 'PAN').click();
  cy.contains('span', 'Address Proof Type').parentsUntil('mat-form-field').last().click();
  cy.contains('span.mat-option-text', 'Voter ID').click();
  cy.get('input[type="file"]').eq(0).selectFile(filePath, { force: true });
  cy.get('input[type="file"]').eq(1).selectFile(filePath, { force: true });
  cy.contains('button', 'Submit').click();}

function fillProposerDetails(data) {
  openMatSelect(31);selectMatOption(data.title);typeIntoMatInput(50, data.firstName);
  typeIntoMatInput(51, data.lastName);typeIntoMatInput(53, data.dob);
  typeIntoMatInput(56, data.email);typeIntoMatInput(57, data.phone);
  typeIntoMatInput(34, data.address1);typeIntoMatInput(35, data.address2);
  typeIntoMatInput(36, data.pincode);cy.wait(5000);
  openMatSelect(23);cy.wait(2000);
  selectMatOption(data.city);cy.get('.mat-checkbox-inner-container').first().click();
  clickNextButton();}

function fillPhysicalDetails(height, weight) {
  cy.get('#mat-checkbox-22 .mat-checkbox-inner-container').click();
  typeIntoMatInput(68, height.toString());
  typeIntoMatInput(69, weight.toString());}

function fillSpouseDetails(data) {
  cy.contains('mat-expansion-panel-header', 'SPOUSE DETAILS').click();
  openMatSelect(39);selectMatOption(data.title);typeIntoMatInput(70, data.firstName);
  typeIntoMatInput(71, data.lastName);typeIntoMatInput(73, data.dob);
  typeIntoMatInput(82, data.email);typeIntoMatInput(83, data.phone);
  openMatSelect(35);selectMatOption(data.relation); typeIntoMatInput(78, data.height);
  typeIntoMatInput(79, data.weight);clickNextButton(17);}

function fillNomineeDetails(data) {
  clickNextButton(11);openMatSelect(41);selectMatOption(data.title);
  typeIntoMatInput(84, data.firstName);typeIntoMatInput(85, data.lastName);
  typeIntoMatInput(86, data.dob);openMatSelect(43);selectMatOption(data.relation);
  typeIntoMatInput(87, data.aadhar);typeIntoMatInput(88, data.ifsc);clickNextButton(12);}

describe('Vizza Insurance Login & Application Flow', () => {
  it('should log in, fill the form, upload documents, and submit successfully', () => {

    loginToVizza('6382228561', 'Sakthi@1602');navigateToHealthInsurance();
    fillInsuranceForm({
    FirstName: 'Care',LastName: 'Supreme',
    email: 'Care@gmail.com',phone: '8531913069',}); 
    enterMemberDetails();selectCityAndPlan();
    uploadDocuments('C://Users//freed//cypress-test//Assets//TestDoc.jpg');
    fillProposerDetails({
    title: 'MR',firstName: 'Care',lastName: 'Supreme',dob: '09121999',email: 'Care@gmail.com',
    phone: '8531913067',address1: '3',address2: '4',pincode: '600012',city: 'Chennai'});
    fillPhysicalDetails(170, 70);
    fillSpouseDetails({
    title: 'MS',firstName: 'test',lastName: 'w',dob: '08062001',email: 'free@gmail.com',
    phone: '8531913068',relation: 'SPOUSE',height: '160',weight: '60'});
    fillNomineeDetails({
    title: 'MR',firstName: 'Test',lastName: 'Care',dob: '09121999',relation: 'BROTHER',
    aadhar: '000000000000000',ifsc: 'IOBA0002372'});
 });
});
