class menuOrdersMonitor {

    homeOrdersMonitor() {
        cy.get('div')
            .contains('Orders Monitor')
            .should('be.visible')
            .click();
    }

    tittle() {
        cy.get('h4')
            .contains('Orders Monitor')
            .should('be.visible')
    }

    ordersBtn() {
        cy.get('button[class*=MuiButtonBase-root]')
            .contains('Orders')
            .should('be.visible')
            .click();
    }

    eventsBtn() {
        cy.get('button[class*=MuiButtonBase-root]')
            .contains('Events')
            .should('be.visible')
            .click();
    }

    importBtn() {
        cy.get('button[class*=MuiButtonBase-root]')
            .contains('Events')
            .should('be.visible')
            .click();
    }

    filtersDropBox() {
        cy.get('.MuiAccordionSummary-content')
            .contains('Filters')
            .click()
            .click();
    }

    filtersPresentFilters() {
        cy.get('#default-filters')
            /*.click()
            .should('have.value', ' - ')
            .and('have.value', 'Pending - 24 h')
            .and('have.value', 'Pending - 48 h')
            .and('have.value', 'Pending - 72 h');*/
    }

}
const ordersMonitor = new menuOrdersMonitor();
export default ordersMonitor;