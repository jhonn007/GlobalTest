class loginPage {

    enterURL() {
        cy.visit('https://staging-client-wms.g-global.io/login');
    }

    putEmail() {
        cy.get('.jss4 > .MuiGrid-container-6 > :nth-child(2)')
            .type('user@client.com');
    }

    putPass() {
        cy.get('.MuiGrid-container-4526 > :nth-child(3)')
            .type('gglobal.01');
    }

    clickRememberMeCheckBox() {
        cy.get('.jss4753')
            .check(true);
    }

    clickLoginBtn() {
        cy.get(':nth-child(5)')
            .contains("Login")
            .click();
    }

    successLoginBanner() {
        cy.get('*[class="Toastify__toast-body"]')
            .contains('Success Login !');
    }

}
const login = new loginPage();
export default login;
