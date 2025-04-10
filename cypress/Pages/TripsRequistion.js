class TripsRequistion {
    // Selectors
    tripsRequisition = ':nth-child(2) > div > .relative > .h-full > span'
    addNew = '.flex-row > .bg-red-500'
    tripType = '//div[@role="presentation"]'
    vehicleTypeSUV = '//div[@role="presentation"]'
    vehicleTypeSedan = '//div[@id="radix-:r7t:"]'
    vehicleSelectBMW = '//div[@role="presentation"]'
    startDate = '//button[@aria-controls="radix-:rbt:"]'
    selectStartDate = '//button[normalize-space()="17"]'
    endDate = '//button[@aria-controls="radix-:rbv:"]'
    selectEndDate = '//button[normalize-space()="24"]'
    tripFor = '//div[@role="presentation"]'
    route = '//div[@role="presentation"]'
    pickupPoint = '#\\:r20\\:-form-item'
    dropoffPoint = '#\\:r21\\:-form-item'
    selectDriver = '//div[@role="presentation"]'
    specialInstruction = '#\\:r24\\:-form-item'
    saveTrip = '//button[normalize-space()=\'Save\']'
    serviceDetails = '#radix-\\:r17\\:-trigger-2'

    // Common method for random selection
    _selectRandomOption(dropdownText, xpathSelector) {
        cy.contains(dropdownText).click();
        cy.xpath(xpathSelector)
            .should('be.visible')
            .then(($items) => {
                const itemCount = $items.length;
                const randomIndex = Math.floor(Math.random() * itemCount);

// Wrap and click the random item
                cy.wrap($items[randomIndex]).click();
            });
    }

    selectTrips() {
        cy.get(this.tripsRequisition).click();
        return this;
    }

    newTrip() {
        cy.get(this.addNew).click();
        return this;
    }

    selectTripType() {
        this._selectRandomOption('Select trip type', this.tripType);
        return this;
    }

    selectVehicleType() {
        this._selectRandomOption('Select vehicle type', this.vehicleTypeSUV);
        return this;
    }

    selectVehicle() {
        this._selectRandomOption('Select vehicle', this.vehicleSelectBMW);
        return this;
    }

    selectTripFor() {
        this._selectRandomOption('Select trip for', this.tripFor);
        return this;
    }

    selectRoute() {
        this._selectRandomOption('Select route', this.route);
        return this;
    }

    selectstartDate1() {
        cy.contains('Enter Date Time').click();
        cy.xpath(this.selectStartDate).click();
        cy.contains('Start Date & Time'). click();
        return this;
    }

    selectEndDate1() {
        cy.contains('Select...').click();
        cy.xpath(this.selectEndDate).click();
        cy.contains('End Date & Time'). click();
        return this;
    }

    selectPickupPoint() {
        cy.get(this.pickupPoint).type('From Airport Terminal 3');
        return this;
    }

    selectDropoffPoint() {
        cy.get(this.dropoffPoint).type('Hotel Sheraton');
        return this;
    }

    selectDriver1() {
        this._selectRandomOption('Select driver', this.selectDriver);
        cy.wait(2000)
        return this;

    }

    specialIns() {
        cy.get(this.specialInstruction).type('Selling a car is a challenge, especially because vehicles');
        cy.wait(2000)    }

    saveThisTrip() {
        cy.xpath('//button[normalize-space()=\'Save\'][contains(text(), "Save")]',{ timeout: 10000 }).click()
        cy.wait(2000)}
}

export default TripsRequistion;