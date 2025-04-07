class menuReturns {

    homeReturns() {
        cy.get('div')
            .contains('Returns')
            .should('be.visible')
            .click();
    }
}
const returns = new menuReturns();
export default returns;