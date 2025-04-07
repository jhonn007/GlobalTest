class menuDashboard {

    homeDashboard() {
        cy.get('div')
            .contains('Dashboard')
            .should('be.visible')
            .click();
    }

    onQueue() {
        cy.get('[href="/orders?status=On%20Queue%2CReplenishment"]')
            .should('be.visible')
            .contains('On Queue');
    }

    inProcess() {
        cy.get('[href="/orders?status=In%20Process"]')
            .should('be.visible')
            .contains('In Process');
    }

    readyToLoad() {
        cy.get('[href="/orders?status=Ready%20to%20Load"]')
        .should('be.visible')
        .contains('Ready to Load');
    }

    inTransit() {
        cy.get('[href="/orders?status=In%20Transit"]')
        .should('be.visible')
        .contains('In Transit');
    }

    shippingAccuracy() {
        cy.get('.orderStatus > :nth-child(5)')
        .should('be.visible')
        .contains('Shipping Accuracy');
    }

    inventoryAccuracy() {
        cy.get('.orderStatus > :nth-child(6)')
        .should('be.visible')
        .contains('Inventory Accuracy');
    }

    inReview() {
        cy.get('.crmFeatured > :nth-child(1)')
        .should('be.visible')
        .contains('In review');
    }

    backorder() {
        cy.get('.crmFeatured > :nth-child(2)')
        .should('be.visible')
        .contains('Backorder');
    }

    fulfillmentsEventsOnHold() {
        cy.get('.crmFeatured > :nth-child(3)')
        .should('be.visible')
        .contains('Fulfillments Events On Hold');
    }

    unprocessable() {
        cy.get('.crmFeatured > :nth-child(4)')
        .should('be.visible')
        .contains('Unprocessable');
    }

    backOrdersToBeFullfilled() {
        cy.get('.crmFeatured > :nth-child(5)')
        .should('be.visible')
        .contains('BackOrders To Be Fullfilled');
    }

    globalFullfillmentEvents() {
        cy.get('.crmFeatured > :nth-child(6)')
        .should('be.visible')
        .contains('G-Global Fulfillment Events');
    }

    lasWeekUnitsReceived() {
        cy.get('.crmFeatured > :nth-child(7)')
        .should('be.visible')
        .contains('Last Week Units Receive');
    }

    graphigTableOne() {
        cy.get(':nth-child(1) > :nth-child(3)')
        .should('be.visible')
    }

    graphigTableTwo() {
        cy.get(':nth-child(1) > :nth-child(4)')
        .should('be.visible')
    }

    graphigTableThree() {
        cy.get(':nth-child(1) > :nth-child(5)')
        .should('be.visible')
    }

    graphigTableFour() {
        cy.get(':nth-child(1) > :nth-child(6)')
        .should('be.visible')
    }

    graphigTableFive() {
        cy.get(':nth-child(1) > :nth-child(7)')
        .should('be.visible')
    }

    graphigTableSix() {
        cy.get(':nth-child(1) > :nth-child(8)')
        .should('be.visible')
    }

    graphigTableSeven() {
        cy.get(':nth-child(1) > :nth-child(9)')
        .should('be.visible')
    }

}
const dashboard = new menuDashboard();
export default dashboard;