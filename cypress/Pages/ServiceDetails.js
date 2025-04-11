class ServiceDetails {
    serviceDetails = '//button[.//div[contains(text(), \'SERVICE DETAILS\')]]'
    InvoiceDate = '//button[@role=\'gridcell\' and text()=\'23\']'
    DueDate = '//button[contains(@class, \'rdp-button\') and text()=\'22\']'
    AddRow = '//button[contains(@class, \'bg-red-500\') and text()=\'Add Row\']'
    AddRowOption = '//div[@role=\'option\'][normalize-space()=\'Test 01\']'
    ServiceCharge = '//button[@role=\'combobox\' and contains(., \'Select\')]'
    Quantity = '//input[@name=\'tripCharges.0.quantity\']'
    UniteCost='//input[@name=\'tripCharges.0.unitCost\']'
    Discount = '//input[@name=\'tripCharges.0.discount\']'
    saveButton = '//button[contains(@class, \'bg-red-500\') and normalize-space()=\'Save\']'





    clickServiceDetails(serviceDetails) {
        cy.xpath(this.serviceDetails).click();
        return this;
    }
    clickInvoiceDate(InvoiceDate) {
        cy.contains('Enter Invoice Date').click()
        cy.xpath(this.InvoiceDate).click().wait(1000)
        cy.contains('Invoice Date').click().wait(500)
        return this;
    }
    clickDueDate(DueDate) {
        cy.contains('Enter Due Date').click()
        cy.xpath(this.DueDate).click().wait(1000);
        cy.contains('Due Date').click().wait(500)
        return this;
    }
    clickAddRow(AddRow) {
        cy.contains('Add Row').click();
        cy.wait(500)
        return this;
    }
    clickServiceCharge(ServiceCharge) {
        cy.xpath(this.ServiceCharge).click()
        cy.xpath(this.AddRowOption).click();
        return this;
    }
    provideQuantity(Quantity) {
        cy.xpath(this.Quantity).type('5').wait(500);
        return this;
    }
    provideUniteCost(UniteCost) {
        cy.xpath(this.UniteCost).type('4').wait(500);
        return this;
    }
    provideDiscount(Discount) {
        cy.xpath(this.Discount).type('6').wait(500);
        return this;
    }
    clickSave(Save) {
        cy.xpath(this.saveButton).click();
        return this;
    }
}
export default ServiceDetails;