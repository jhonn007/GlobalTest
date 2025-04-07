class menuInventory {

    homeInventory() {
        cy.get('div')
            .contains('Inventory')
            .should('be.visible')
            .click();
    }
}
const inventory = new menuInventory();
export default inventory;