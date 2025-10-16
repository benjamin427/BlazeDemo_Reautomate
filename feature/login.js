const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor')
const blazedemoLogin = require('/Users/Benjamin/Documents/CI_CD_Matrix_2/cypress/pageObjects/object_login')

Given("Navigate to the website", () => {
    cy.login_url()
})

Then("Enter login credentials", (datatable) => {
    datatable.hashes().forEach(element => {
        blazedemoLogin.login_credentials(element.email_address, element.password)
    })
})

Then("Click the login button", () => {
    blazedemoLogin.login_button()
})
