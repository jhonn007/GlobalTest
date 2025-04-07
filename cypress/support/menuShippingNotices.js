class menuShippingNotices {

    homeShippingNotices() {
        cy.get('div')
            .contains('Shipping Notices')
            .should('be.visible')
            .click();
    }
}
const shippingNotices = new menuShippingNotices();
export default shippingNotices;