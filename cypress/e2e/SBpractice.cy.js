
context('StagingPractice', function () {
  beforeEach(function(){
    cy.visit('https://stagingbeta.youniqueproducts.com/')


  });

  // it('US Test', ()=>{
  //   let user = {
  //       first: "Jane",
  //       last: "Doe",
  //       email: 'youniquetesting+' + Date.now() + '@outlook.com',
  //       password: 'F@kepr3senter',
  //       market: 1,
  //       street:"3400 W Mayflower Ave",
  //       city: "Lehi",
  //       state: "Utah",
  //       zip: 84043
  //   };
  //
  // cy.on('uncaught:exception', (err, runnable) => {
  //     return false
  // });
  //   cy.createAccount(user);
  //   cy.visit('https://stagingbeta.youniqueproducts.com/register');
  //   cy.SelectMarket(user);
  //   cy.FillOutPersonalInfo(user);
  //   cy.SelectPresenter(user);
  //   cy.FillOutAddress(user);
  //   cy.PickWebsiteName(user);
  //   cy.AgreeToTerms(user);
  //   cy.SelectBBK(user);
  //   cy.AddPaymentInfo(user);
  //   cy.CompleteRegistration(user);
  //   cy.visit('https://stagingbeta.youniqueproducts.com');
  //   cy.Logout();
  //   cy.Login();
  // })
  //
  //   it('CAN test', ()=>{
  //       let user = {
  //           first: "Jane",
  //           last: "Doe",
  //           email: 'youniquetesting+' + Date.now() + '@outlook.com',
  //           password: 'F@kepr3senter',
  //           market: 2,
  //           street:"3-1200 Douglas Street",
  //           city: "Victoria",
  //           state: "British Columbia",
  //           zip: 'V8W2E5'
  //       };
  //
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           return false
  //       });
  //       cy.createAccount(user);
  //       cy.visit('https://stagingbeta.youniqueproducts.com/register');
  //       cy.SelectMarket(user);
  //       cy.FillOutPersonalInfo(user);
  //       cy.SelectPresenter(user);
  //       cy.FillOutAddress(user);
  //       cy.PickWebsiteName(user);
  //       cy.AgreeToTerms(user);
  //       cy.SelectBBK(user);
  //       cy.AddPaymentInfo(user);
  //       cy.CompleteRegistration(user);
  //
  //   })
  //   it('AUS test', ()=>{
  //       let user = {
  //           first: "Jane",
  //           last: "Doe",
  //           email: 'youniquetesting+' + Date.now() + '@outlook.com',
  //           password: 'F@kepr3senter',
  //           market: 3,
  //           street:"186 Arden St Coogee",
  //           city: "Coogee",
  //           state: "Tasmania",
  //           zip: '2034'
  //       };
  //
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           return false
  //       });
  //       cy.createAccount(user);
  //       cy.visit('https://stagingbeta.youniqueproducts.com/register');
  //       cy.SelectMarket(user);
  //       cy.FillOutPersonalInfo(user);
  //       cy.SelectPresenter(user);
  //       cy.FillOutAddress(user);
  //       cy.PickWebsiteName(user);
  //       cy.AgreeToTerms(user);
  //       cy.SelectBBK(user);
  //       cy.AddPaymentInfo(user);
  //       cy.CompleteRegistration(user);
  //
  //   })
  //
  //   it('NZ test', ()=>{
  //       let user = {
  //           first: "Jane",
  //           last: "Doe",
  //           email: 'youniquetesting+' + Date.now() + '@outlook.com',
  //           password: 'F@kepr3senter',
  //           market: 4,
  //           street:"86 Ure Street",
  //           city: "Avenal",
  //           state: "Canterbury",
  //           zip: '9810'
  //       };
  //
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           return false
  //       });
  //       cy.createAccount(user);
  //       cy.visit('https://stagingbeta.youniqueproducts.com/register');
  //       cy.SelectMarket(user);
  //       cy.FillOutPersonalInfo(user);
  //       cy.SelectPresenter(user);
  //       cy.FillOutAddress(user);
  //       cy.PickWebsiteName(user);
  //       cy.AgreeToTerms(user);
  //       cy.SelectBBK(user);
  //       cy.AddPaymentInfo(user);
  //       cy.CompleteRegistration(user);
  //
  //   })
  //   it('UK test', ()=>{
  //       let user = {
  //           first: "Jane",
  //           last: "Doe",
  //           email: 'youniquetesting+' + Date.now() + '@outlook.com',
  //           password: 'F@kepr3senter',
  //           market: 5,
  //           street:"2 Foscote Rise",
  //           city: "Banbury",
  //           state: "Oxfordshire",
  //           zip: 'OX16 9XP'
  //       };
  //
  //       cy.on('uncaught:exception', (err, runnable) => {
  //           return false
  //       });
  //       cy.createAccount(user);
  //       cy.visit('https://stagingbeta.youniqueproducts.com/register');
  //       cy.SelectMarket(user);
  //       cy.FillOutPersonalInfo(user);
  //       cy.SelectPresenter(user);
  //       cy.FillOutAddress(user);
  //       cy.PickWebsiteName(user);
  //       cy.AgreeToTerms(user);
  //       cy.SelectBBK(user);
  //       cy.AddPaymentInfo(user);
  //       cy.CompleteRegistration(user);
  //   })

});