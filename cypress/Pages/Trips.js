class Trips {
    // Selectors
    tripsRequisition = ':nth-child(2) > div > .relative > .h-full > span'
    addNew = '.flex-row > .bg-red-500'
    tripType = '//div[@role="option"]'
    vehicleTypeSUV = '//div[@role="option"]'
    vehicleSelectBMW = '//div[@role="option"]'
    selectStartDate = '//button[normalize-space()="17"]'
    selectEndDate = '//button[normalize-space()="24"]'
    tripFor = '//div[@role="option"]'
    route = '//div[@role="option"]'
    pickupPoint = '//input[@name=\'pickupLocation\']'
    dropoffPoint = '//input[@name=\'dropLocation\']'
    selectDriver = '//div[@role="option"]'
    specialInstruction = '//textarea[@name=\'specialInstruction\']'
    saveTrip = '//*[@id="right-pane"]/div/button'

    // Common method for random selection
    _selectRandomOption(dropdownText, xpathSelector) {
        cy.contains(dropdownText).click();
        cy.xpath(xpathSelector)
            .should('be.visible')
            .then(($items) => {
                const itemCount = $items.length;
                cy.log(itemCount)
                const randomIndex = Math.floor(Math.random() * itemCount);
                cy.log(randomIndex)
                const selectedText = $items[randomIndex].innerText.trim();
                cy.log(`Selected Option: ${selectedText}`);

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
        cy.xpath(this.pickupPoint).type('From Airport Terminal 3');
        return this;
    }

    selectDropoffPoint() {
        cy.xpath(this.dropoffPoint).type('Hotel Sheraton');
        return this;
    }

    selectDriver1() {
        this._selectRandomOption('Select driver', this.selectDriver);
        cy.contains('Save').click()

    }

    specialIns() {
        cy.xpath(this.specialInstruction).type('Selling a car is a challenge, especially because vehicles');
        cy.wait(2000)
    }

   clickSaveButton(Save){

       cy.xpath(this.saveTrip).click()
       return this;
   }
}

export default Trips;