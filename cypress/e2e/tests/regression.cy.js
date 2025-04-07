import login from "../../support/loginPage.js";
import dashboard from "../../support/menuDashboard.js";
import inventory from "../../support/menuInventory.js";
import orderMonitor from "../../support/menuOrderMonitor.js";
import shippingNotices from "../../support/menuShippingNotices.js";
import returns from "../../support/menuReturns.js";

describe('Regression', () => {
    /*it('Login with correct credentials', () => {
        login.enterURL();
        login.putEmail();
        login.putPass();
        login.clickLoginBtn();
        login.successLoginBanner(cy.wait(300));
    });*/

    /*it('Valitating left Menu Dashboard', () => {
        login.enterURL();
        login.putEmail();
        login.putPass();

        login.clickLoginBtn();
        login.successLoginBanner(cy.wait(300));

        dashboard.homeDashboard(cy.wait(300));
        dashboard.onQueue();
        dashboard.inProcess();
        dashboard.readyToLoad();
        dashboard.inTransit();
        dashboard.shippingAccuracy();
        dashboard.inventoryAccuracy();

        dashboard.inReview();
        dashboard.backorder();
        dashboard.fulfillmentsEventsOnHold();
        dashboard.unprocessable();
        dashboard.backOrdersToBeFullfilled();
        dashboard.globalFullfillmentEvents();
        dashboard.lasWeekUnitsReceived();
        dashboard.graphigTableOne();
        dashboard.graphigTableTwo();
        dashboard.graphigTableThree();
        dashboard.graphigTableFour();
        dashboard.graphigTableFive();
        dashboard.graphigTableSix();
        dashboard.graphigTableSeven();

    });*/

    it('Valitating left Menu Orders Monitor', () => {
        login.enterURL();
        login.putEmail();
        login.putPass();
        login.clickLoginBtn();
        login.successLoginBanner(cy.wait(300));

        orderMonitor.homeOrdersMonitor();
        orderMonitor.ordersBtn();
        orderMonitor.tittle();
        orderMonitor.importBtn();
        orderMonitor.filtersDropBox();
        orderMonitor.filtersPresentFilters()

        orderMonitor.eventsBtn();
        orderMonitor.filtersDropBox();

    });

    it('Valitating left Menu Inentory', () => {
        login.enterURL();
        login.putEmail();
        login.putPass();
        login.clickLoginBtn();
        login.successLoginBanner(cy.wait(300));

        inventory.homeInventory();

    });

    it('Valitating left Menu Shipping Notices', () => {
        login.enterURL();
        login.putEmail();
        login.putPass();
        login.clickLoginBtn();
        login.successLoginBanner(cy.wait(300));

        shippingNotices.homeShippingNotices();

    });

    it('Valitating left Menu Returns', () => {
        login.enterURL();
        login.putEmail();
        login.putPass();
        login.clickLoginBtn();
        login.successLoginBanner(cy.wait(300));

        returns.homeReturns();

    });
});