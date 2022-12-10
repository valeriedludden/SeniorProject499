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
    //Navigate to Create Account tab
    cy.get('.desktop-guest-links').click();
    cy.get('#registerTab').click();

    // //Verify all inputs are visible
    cy.get('#UserFirstName').should('be.visible');
    cy.get('#UserLastName').should('be.visible');
    cy.get('#UserEmail').should('be.visible');
    cy.get('#UserPassword').should('be.visible');
    cy.get('#confirmpassword').should('be.visible');
    cy.get('#enrollSubmit').click();

    //Verify first name error message appears

    cy.wait(2000);
    cy.get('#UserFirstName').clear();
    cy.get('#UserLastName').type(user.last);
    cy.get('#UserEmail').type(user.email);
    cy.get('#UserPassword').type(user.password);
    cy.get('#confirmpassword').type(user.password);
    cy.get('#enrollSubmit').click();
    cy.get('.UserFirstNameformError', {timeout: 5000}).should('be.visible');

    //Verify last name error message appears
    cy.get('#UserFirstName').type(user.first).click();
    cy.get('#UserLastName').clear().click();
    cy.get('#enrollSubmit').click();
    cy.get('.UserLastNameformError').should('be.visible');

    //Verify email error message appears
    cy.get('#UserLastName').type(user.last).click();
    cy.get('#UserEmail').clear().click();
    cy.get('#enrollSubmit').click();
    cy.get('.UserEmailformError').should('be.visible');

    //Verify password  error message appears
    cy.get('#UserEmail').type(user.email);
    cy.get('#UserPassword').clear().click();
    cy.get('#enrollSubmit').click();
    cy.get('.UserPasswordformError').should('be.visible');


    //Verify password confirmation error message appears
    cy.get('#UserPassword').type(user.password);
    cy.get('#confirmpassword').clear().click();
    cy.get('#enrollSubmit').click();
    cy.get('.confirmpasswordformError').should('be.visible');

    //Verify email format without
    cy.get('#UserEmail').clear().type('janedoe').click();
    cy.get('#confirmpassword').clear().type(user.password);
    cy.get('#enrollSubmit').click();
    cy.get('.UserEmailformError').should('be.visible');

    cy.get('#UserEmail').clear().type('janedoe.com').click();
    // cy.get('#confirmpassword').type(user.password);
    cy.get('#enrollSubmit').click();
    cy.get('.UserEmailformError').should('be.visible');

    cy.get('#UserEmail').clear().type('janedoe@').click();
    // cy.get('#confirmpassword').type(user.password);
    cy.get('#enrollSubmit').click();
    cy.get('.UserEmailformError').should('be.visible');

    //Verify passwords must match
    cy.get('#UserEmail').clear().type(user.email);
    cy.get('#UserPassword').clear().type(user.password);
    cy.get('#confirmpassword').clear().type('123');
    cy.get('#enrollSubmit').click();
    cy.get('.confirmpasswordformError').should('be.visible');

    //Fill out form correctly
    cy.wait(2000);
    cy.get('#UserFirstName').clear().type(user.first).click();
    cy.get('#UserLastName').clear().type(user.last).click();
    cy.get('#UserEmail').clear().type(user.email).click();
    cy.get('#UserPassword').clear().type(user.password).click();
    cy.get('#confirmpassword').clear().type(user.password).click();

    cy.wait(3000);

    //Submit
    cy.get('#enrollSubmit').click();

    //Verify Log in worked
    cy.get('#desktop-account-links > span').should('contain', user.first)
});



Cypress.Commands.add('navigateToRegisterPage', (user)=> {
    cy.visit('https://stagingbeta.youniqueproducts.com/register')
});

Cypress.Commands.add('SelectMarket', (user)=> {
    cy.get('#countriesFancy', { timeout: 1000 }).should('be.visible');
    cy.get('#countriesFancy').click();
    cy.log("****** MARKET # ***********");
    cy.log(user.market);
    if(user.market === 1){
        cy.get(`#countriesFancy > ul > li:first-child`).click();
    }
    if(user.market === 2){
        cy.get(`#countriesFancy > ul > li`).eq(1).click();
    }
    if(user.market === 3){
        cy.get(`#countriesFancy > ul > li`).eq(2).click();
    }
    if(user.market === 4){
        cy.get(`#countriesFancy > ul > li`).eq(3).click();
    }
    if(user.market === 5){
        cy.get(`#countriesFancy > ul > li`).eq(4).click();
    }

    if (user.market < 3) {
        cy.get("#languageList > li:first-child").click();
    }

});

Cypress.Commands.add('FillOutPersonalInfo', (user) => {
    cy.wait(5000);
    cy.get('[name="phone"]', {timeout: 6000}).click();
    cy.get('[name="date_of_birth"]').click();
    cy.get('div.phoneformError > div.formErrorContent').should('contain','Phone is required');
    cy.get('[name="phone"]').type('7463334444');
    cy.get('div.bDateformError > div.formErrorContent').should('contain','Birthdate is required');
    cy.get('[name="date_of_birth"]').click();
    cy.get('[name="date_of_birth"]').type('11111980').type('{enter}');
    if(user.market === 2){
        cy.get('#ssn').type('323456789').type('{enter}');
    }
    if(user.market === 4){
        cy.get('#ssn').type('323456789').type('{enter}');
    }
    if(user.market === 5){
        cy.get('#ssn').type('ZR014223A').type('{enter}');
    }

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
    if(user.market === 1){
        cy.get('#step3 > p.row.businessRegistr > span > span:nth-child(1) > label > input').click();
    }

    //Verify address is needed
    cy.get('#continuePaymentBtn > a').click();
    cy.get('.formErrorContent').should('contain', 'Your address is required');
    cy.get('[name="address1"]').click().type(user.street);


    //Verify zip code is needed
    cy.get('#continuePaymentBtn > a').click();
    cy.get('.formErrorContent').should('contain', 'Postal code is required.');
    cy.get('[name="postal_code"]').click().type(user.zip);

    //Verify city is needed
    cy.get('#continuePaymentBtn > a').click();
    cy.get('.formErrorContent').should('contain', 'City is required.');
    cy.get('[name="city"]').click().type(user.city);

    //Verify state is needed
    if(user.market < 3){
        cy.get('#continuePaymentBtn > a').click();
        cy.get('.formErrorContent').should('contain', 'State is required');
        cy.get('#stateSelector').click();
        cy.get('[name="state"]').select(user.state);
    }
    else{
        cy.get('[name="state"]').select(user.state);
    }

    cy.get('#continuePaymentBtn > a').click();

    if(user.market === 1){
        cy.get('#residential_address_category_id').click();
    }
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
    if(user.market === 1){
        cy.get('#agree1').click().click();
        cy.get('.agree1formError').should('be.visible');
        cy.get('#agree1').click();
    }
    else {
        cy.get('#agree1').click();
    }

    //Agreement 2
    cy.get('#agree2').click();
    cy.get('#agree2').click();
    cy.get('.agree2formError').should('be.visible');
    cy.get('#agree2').click();
   //Agreement 3
    if(user.market != 3){
        cy.get('#agree3').click();
        cy.get('#agree3').click();
        cy.get('.agree3formError').should('be.visible');
        cy.get('#agree3').click();
    }

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
    if(user.market < 3){
        cy.get('.pdpItemDropdown').eq(4).click();
        cy.get('.reactSelect__option').eq(0).should('contain', 'Welcome to Younique! - English').click();
    }

    //Click the continute button
    cy.get('.presenterKitButton').click();
});

Cypress.Commands.add('AddPaymentInfo', (user) => {
    //Click on payment section
    if(user.market < 3){
        cy.get('.braintree-options-list > div:nth-child(1)').click();
    }

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
                .type('123').type('{enter}');
        });
    if(user.market === 5){
        cy.wait(6000);
        cy.get('#Cardinal-CCA-IFrame')
            .then(($iframe) => {
                const $iframeOneBody = $iframe.contents();
                cy.wrap($iframeOneBody)
                    .find('input.input-field')
                    .type('1234');
            });
        cy.get('#Cardinal-CCA-IFrame')
            .then(($iframe) => {
                const $iframeOneBody = $iframe.contents();
                cy.wrap($iframeOneBody)
                    .find('[value="SUBMIT"]')
                    .type('{enter}');
            });
        cy.wait(5000);
        cy.get('#uk_wealth_warning').check();
    }

});


Cypress.Commands.add('CompleteRegistration', (user) => {
    cy.wait(3000);
    cy.get('#send-it').should('contain', 'Complete My Registration').click();
    cy.get('#ReceiptPage', {timeout:15000}).should('exist');


});

Cypress.Commands.add('Logout', () => {
    cy.get('.y_link.y_font1-m').click();
    cy.get('[data-testid="Mic_Drop"]').click();
    cy.get('.desktop-guest-links').should('contain', 'Log in');
});

Cypress.Commands.add('Login', () => {
    cy.get('.desktop-guest-links').click();
    cy.get('#login-form').should('be.visible');
    cy.get('[name="email"]').type('youniquetesting+presenter@outlook.com');
    cy.get('[name="password"]').type('F@kep');
    cy.get('[value="LOG IN"]').click();
    cy.get('#loginError').should('contain','Invalid email or password.');
    cy.get('[name="email"]').type('youniquetesr@outlook.com');
    cy.get('[name="password"]').type('F@kepr3senter');
    cy.get('[value="LOG IN"]').click();
    cy.get('#loginError').should('contain','Invalid email or password.');
    cy.get('[name="email"]').type('youniquetesting+presenter@outlook.com');
    cy.get('[name="password"]').type('F@kepr3senter');
    cy.get('[value="LOG IN"]').click();
    cy.get('#desktop-account-links > span').should('contain', 'Pre')
});


