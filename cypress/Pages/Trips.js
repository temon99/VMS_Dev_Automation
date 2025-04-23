class Trips {
    // Selectors
    tripsRequisition = ':nth-child(2) > div > .relative > .h-full > span'
    addNew = '.flex-row > .bg-red-500'
    commonDropdown = '//div[@role="option"]'
    randomDateSelect = '//button[@name=\'day\' and not(contains(@class, \'day-outside\'))]'
    randomTimeSelect = '//button[@role="combobox" and .//span[contains(text(), "00:00")]]'
    selectTimeOptions= '[role="option"]'
    pickupPoint = '//input[@name=\'pickupLocation\']'
    dropoffPoint = '//input[@name=\'dropLocation\']'
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

    //Common method for random date selection
    selectRandomDate(xpathSelector1) {
        cy.xpath(xpathSelector1)
            .then($days => {
                const randomDay = $days[Math.floor(Math.random() * $days.length)];
                cy.wrap(randomDay).click();
            });
    }

    //Common method for random time selection
    selectRandomTime(xpathSelector2){
        cy.xpath(xpathSelector2).click()
        cy.get(this.selectTimeOptions)
            .then($times => {
                const randomTime = $times[Math.floor(Math.random() * $times.length)];
                cy.wrap(randomTime).click();
            });
    }

    //Test Cases
    selectTrips() {
        cy.get(this.tripsRequisition).click();
        return this;
    }
    newTrip() {
        cy.get(this.addNew).click();
        return this;
    }
    selectTripType() {
        this._selectRandomOption('Select trip type', this.commonDropdown);
        return this;
    }
    selectVehicleType() {
        this._selectRandomOption('Select vehicle type', this.commonDropdown);
        return this;
    }
    selectVehicle() {
        this._selectRandomOption('Select vehicle', this.commonDropdown);
        return this;
    }
    selectTripFor() {
        this._selectRandomOption('Select trip for', this.commonDropdown);
        return this;
    }
    selectRoute() {
        this._selectRandomOption('Select route', this.commonDropdown);
        return this;
        cy.wait(1000)
    }
    selectstartDate(){
        cy.contains('Enter Date Time').click();
        cy.wait(500)
        this.selectRandomDate(this.randomDateSelect)
            cy.wait(1000)
        this.selectRandomTime((this.randomTimeSelect))
        cy.wait(1000)
        cy.contains('Start Date & Time'). click();
        return this;
    }
    selectEndDate(){
        cy.contains('Select...').click();
        cy.wait(500)
        this.selectRandomDate(this.randomDateSelect)
            cy.wait(1000)
        this.selectRandomTime((this.randomTimeSelect))
        cy.wait(1000)
        cy.contains('End Date & Time'). click();
        return this;
    }
    selectPickupPoint(PickPoint) {
        cy.xpath(this.pickupPoint).type(PickPoint);
        return this;
    }
    selectDropoffPoint(DropPoint) {
        cy.xpath(this.dropoffPoint).type(DropPoint);
        return this;
    }
    selectDriver1() {
        this._selectRandomOption('Select driver', this.commonDropdown);
        cy.contains('Save').click()

    }
    specialIns(specialInstruction) {
        cy.xpath(this.specialInstruction).type(specialInstruction);
        cy.wait(2000)
    }
    clickSaveButton(){
       cy.xpath(this.saveTrip).click()
       return this;
   }
}
export default Trips;