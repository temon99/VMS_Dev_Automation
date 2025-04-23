class ServiceDetails {
    serviceDetails = '//button[.//div[contains(text(), \'SERVICE DETAILS\')]]'
    randomDateSelect = '//button[@name=\'day\' and not(contains(@class, \'day-outside\'))]'
    AddRowOption = '//div[@role=\'option\'][normalize-space()=\'Test 01\']'
    ServiceCharge = '//button[@role=\'combobox\' and contains(., \'Select\')]'
    Quantity = '//input[@name=\'tripCharges.0.quantity\']'
    UniteCost='//input[@name=\'tripCharges.0.unitCost\']'
    Discount = '//input[@name=\'tripCharges.0.discount\']'
    saveButton = '//button[contains(@class, \'bg-red-500\') and normalize-space()=\'Save\']'

    selectRandomDate(xpathSelector1) {
        cy.xpath(xpathSelector1)
            .then($days => {
                const randomDay = $days[Math.floor(Math.random() * $days.length)];
                cy.wrap(randomDay).click();
            });
    }
    clickServiceDetails(serviceDetails) {
        cy.xpath(this.serviceDetails).click();
        return this;
    }
    clickInvoiceDate(InvoiceDate) {
        cy.contains('Enter Invoice Date').click()
        this.selectRandomDate(this.randomDateSelect)
        cy.wait(500)
        cy.contains('Invoice Date').click().wait(500)
        return this;
    }
    clickDueDate(DueDate) {
        cy.contains('Enter Due Date').click()
        this.selectRandomDate(this.randomDateSelect)
        cy.wait(500)
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