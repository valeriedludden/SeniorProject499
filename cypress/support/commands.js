// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframe => {
    return new Cypress.Promise(resolve => {
        $iframe.ready(function() {
            resolve($iframe.contents().find('body'));
        });
    });
});
Cypress.Commands.add('createAccount', (user) =>{
    // cy.log("************* Create Account *********************");
    cy.log(user.first);
    cy.get('.desktop-guest-links').click();
    cy.get('#registerTab').click();

    //verify errors
    cy.get('#UserFirstName').click();
    cy.get('#UserLastName').click();
    cy.get('#UserEmail').click();

    cy.get('.UserFirstNameformError').should('be.visible');
    cy.get('.UserLastNameformError').should('be.visible');

    cy.get('#UserFirstName').type(user.first);
    cy.get('#UserLastName').type(user.last);

    cy.get('#UserEmail').click();
    cy.get('#UserPassword').click();

    cy.get('.UserEmailformError').should('be.visible');
    cy.get('#UserEmail').type(user.email);
    cy.get('#enrollSubmit').click();

    cy.get('.UserPasswordformError').should('be.visible');
    cy.get('.confirmpasswordformError').should('be.visible');


    //Fill Out Information
    // cy.get('#UserFirstName').type(user.first);
    // cy.get('#UserLastName').type(user.last);
    // cy.get('#UserEmail').type(user.email);
    cy.get('#UserPassword').type(user.password);
    cy.get('#confirmpassword').type(user.password);
    cy.get('#enrollSubmit').click();

});
Cypress.Commands.add('navigateToRegisterPage', (user)=> {
    cy.visit('https://stagingbeta.youniqueproducts.com/register')
});
Cypress.Commands.add('SelectMarket', (user)=> {
    // this.whereDoYouLiveDropDown(market);
    cy.get('#countriesFancy', { timeout: 10000 }).should('be.visible');
    cy.log('*** CLICKED COUNTRIES FANCY **********');
    cy.get('#countriesFancy').click();
    cy.get(`#countriesFancy > ul > li:first-child`).click();
    cy.get("#languageList > li:first-child").click();
    cy.log('*** ENGLISH **********');

});

Cypress.Commands.add('FillOutPersonalInfo', (user) => {

    cy.get('[name="phone"]').click();
    cy.get('[name="date_of_birth"]').click();
    cy.get('div.phoneformError > div.formErrorContent').contains('Phone is required');
    cy.get('[name="phone"]').type('7463334444');
    cy.get('div.bDateformError > div.formErrorContent').contains('Birthdate is required');
    cy.get('[name="date_of_birth"]').click();
    cy.get('[name="date_of_birth"]').type('11111980').type('{enter}');

});
Cypress.Commands.add('SelectPresenter', (user) => {
    cy.get('#sponsorSearch').type('{enter}');
    cy.get('#sponsorSearch').type('Pre Senter');
    cy.get('#ui-id-1 > li > a').should('contain', 'Pre Senter');
    cy.get('#ui-id-1 > li > a').click();
    cy.get('.linkText.ovfl').click();
});
Cypress.Commands.add('FillOutAddress', (user) => {
    //if market 1 choose Registration Type
    cy.get('#step3 > p.row.businessRegistr > span > span:nth-child(1) > label > input').click();

   //Fill Out Address Information
    cy.get('[name="address1"]').click().type(user.street);
    cy.get('[name="city"]').click().type(user.city);
    cy.get('#stateSelector').click();
    cy.get('[name="state"]').select(user.state);
    cy.get('[name="postal_code"]').click().type(user.zip);
    cy.get('#residential_address_category_id').click();
    cy.get('#continuePaymentBtn > a').click();


});

Cypress.Commands.add('PickWebsiteName', (user) => {
//Pick Website name
    let name = Date.now();
    cy.get('#siteName').clear();
    cy.get('#siteName').type("presenter");
    cy.get('a.checkSite').click();

    //Verify error message
    cy.get('#step4 > div.nameResp.taken').should('be.visible');
    cy.get('#step4 > div.nameResp.available').should('not.be.visible');
    //Type correct website name
    cy.get('#siteName').clear();
    cy.get('#siteName').type(name);
    cy.get('a.checkSite').click();
    //Verify error message disappears
    cy.get('#step4 > div.nameResp.taken').should('have.css', 'display', 'none');
    //Verify success message is displayed now
    cy.get('#step4 > div.nameResp.available').should('have.css', 'display', 'block');

});

Cypress.Commands.add('AgreeToTerms', (user) => {
    //Agreement 1
    cy.get('#agree1').click().click();
    cy.get('.agree1formError').should('be.visible');
    cy.get('#agree1').click();
    //Agreement 2
    cy.get('#agree2').click();
    cy.get('#agree2').click();
    cy.get('.agree2formError').should('be.visible');
    cy.get('#agree2').click();
   //Agreement 3
    cy.get('#agree3').click();
    cy.get('#agree3').click();
    cy.get('.agree3formError').should('be.visible');
    cy.get('#agree3').click();
    //Verify all the error messages have disappeared
    cy.get('.agree1formError').should('not.exist');
    cy.get('.agree2formError').should('not.exist');
    cy.get('.agree3formError').should('not.exist');

});

Cypress.Commands.add('SelectBBK', (user) => {
    //Select the BBK
    cy.get('[for="presenter_kit_option-2"]').click();

    //Select Mascara
    cy.get('.pdpItemDropdown').eq(0).click();
    cy.get('.reactSelect__option').eq(0).should('contain', 'MOODSTRUCK EPIC mascara').click();

    // Select Dip and Draw eyeliner or brow
    cy.get('.pdpItemDropdown').eq(1).click();
    cy.get('.reactSelect__option').eq(0).should('contain', 'DRAW eyeliner').click();

    //Select black eyeliner
    cy.get('.pdpItemDropdown').eq(2).click();
    cy.get('.reactSelect__option').eq(0).should('contain', 'Perfect - Deep black').click();

    //Select Lip Gloss
    cy.get('.pdpItemDropdown').eq(3).click();
    cy.get('.reactSelect__option').eq(0).should('contain', 'Loyal - clear shimmer').click();

    //Select Welcome card
    cy.get('.pdpItemDropdown').eq(4).click();
    cy.get('.reactSelect__option').eq(0).should('contain', 'Welcome to Younique! - English').click();

    //Click the continute button
    cy.get('.presenterKitButton').click();
});

Cypress.Commands.add('AddPaymentInfo', (user) => {
    //Click on payment section
    cy.get('.braintree-options-list > div:nth-child(1)').click();

    //Enter credit card number
    cy.get('#braintree-hosted-field-number')
        .then(($iframe) => {
            const $iframeOneBody = $iframe.contents();
            cy.wrap($iframeOneBody)
                .find('[name="credit-card-number"]')
                .type('4111111111111111')
        });
    //Enter exp date
    cy.get('#braintree-hosted-field-expirationDate')
        .then(($iframe) => {
            const $iframeOneBody = $iframe.contents();
            cy.wrap($iframeOneBody)
                .find('[name="expiration"]')
                .type('0924')
        });
    //Enter cvv
    cy.get('#braintree-hosted-field-cvv')
        .then(($iframe) => {
            const $iframeOneBody = $iframe.contents();
            cy.wrap($iframeOneBody)
                .find('[name="cvv"]')
                .type('123')
        });

});


Cypress.Commands.add('CompleteRegistration', (user) => {
    cy.wait(2000);
    cy.get('#send-it').should('contain', 'Complete My Registration').click();
    cy.wait(10000)
   cy.get('#ReceiptPage').should('exist');
});


