import serviceDetails from "../../Pages/ServiceDetails";

Cypress.Commands.add('ServiceDetails', () => {
    const providedService= new serviceDetails()


    providedService.clickServiceDetails()
    providedService.clickInvoiceDate()
    providedService.clickDueDate()
    providedService.clickAddRow()
    providedService.clickServiceCharge()
    providedService.provideQuantity()
    providedService.provideUniteCost()
    providedService.provideDiscount()
    providedService.clickSave()

});