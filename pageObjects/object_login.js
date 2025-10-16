class BlazeDemo_Login {
    login_credentials(emailAddress, password){
        cy.xpath('//input[@type="email"]').should('be.visible').type(emailAddress)
        cy.xpath('//input[@type="password"]').should('be.visible').type(password)
    }
    login_button(){
        cy.xpath('//div/button[@type="submit"]').should('be.visible').click()
    } 
    login_forgotPassword(){
        cy.contains("Forgot Your Password?").should("have.text", "Forgot Your Password?")
        cy.contains("Forgot Your Password?").click()
    }
    login_dashboard_home(){
        cy.contains("BlazeDemo").should("have.text", "BlazeDemo").click()
    }
    login_dashboard_register(){
        cy.contains("Register").should("have.text", "Register").click()
    }
    login_dashboard_login(){
        cy.contains("Login").should("have.text", "Login").click()
    }

}

const blazedemoLogin = new BlazeDemo_Login()
module.exports = blazedemoLogin
