// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
/// <reference types="Cypress" />
context('StagingPractice', function () {
  beforeEach(function(){
    cy.visit('https://stagingbeta.youniqueproducts.com/')


  });

  it('test', ()=>{
    let user = {
        first: "Jane",
        last: "Doe",
        email: 'youniquetesting+' + Date.now() + '@outlook.com',
        password: 'F@kepr3senter',
        market: 1,
        street:"3400 W Mayflower Ave",
        city: "Lehi",
        state: "Utah",
        zip: 84043
    };

  cy.on('uncaught:exception', (err, runnable) => {
      return false
  });
    cy.createAccount(user);
    cy.visit('https://stagingbeta.youniqueproducts.com/register');
    cy.SelectMarket(user);
    cy.FillOutPersonalInfo(user);
    cy.SelectPresenter(user);
    cy.FillOutAddress(user);
    cy.PickWebsiteName(user);
    cy.AgreeToTerms(user);
    cy.SelectBBK(user);
    cy.AddPaymentInfo(user);
    cy.CompleteRegistration(user);

  })
});