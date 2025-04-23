class VehicleAdd{

    vehicleMenu = '//span[normalize-space()=\'Vehicles\']'
    addVehicle = '//button[normalize-space()=\'Add Vehicle\']'
    commonDropdownXpath = '//div[@role="option"]'
    vehicleImage = '//div[@class=\'flex items-center justify-center w-full h-full\']'
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
    createRandomNumber(){
        const  randomNumber = Math.floor(10000000 + Math.random() * 90000000);
        return `${randomNumber}`
    }
    createRegNumber(){
        const firstNumber = Math.floor(10 + Math.random() * 90).toString();
        const secondNumber = Math.floor(1000 + Math.random() * 9000).toString();
        return `${firstNumber}-${secondNumber}`;
    }
    generateRandomYear(){
        return Math.floor(2008 + Math.random() * (2024 - 2008 + 1));
    }
    capacity(){
        const Capacity = Math.floor(Math.random() * 7) + 3;
                return `${Capacity}`
    }
    color(){
        const colors = ['Red', 'Black', 'Purple', 'Blue', 'Green', 'Yellow', 'Orange', 'Pink', 'Brown',
                              'Gray', 'Teal', 'Cyan', 'Magenta', 'Maroon', 'Olive', 'Navy', 'Lime', 'Gold', 'Beige', 'Coral'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return `${randomColor}`
    }
    carName(){
        const carName = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes', 'Audi', 'Lexus', 'Nissan',
            'Hyundai', 'Kia', 'Volkswagen', 'Mazda', 'Subaru', 'Jeep', 'Tesla', 'Volvo', 'Porsche', 'Ferrari', 'Lamborghini']
        const randomCar = carName[Math.floor(Math.random() * carName.length)];
        return `${randomCar}`
    }
    selectMenu(){
        cy.xpath(this.vehicleMenu).click()
    }
    addVehicleButton(){
        cy.xpath(this.addVehicle).click()
        cy.wait(3000)
    }
    uploadImage(Image){
        cy.xpath(this.vehicleImage).selectFile (Image, { force: true })
        cy.wait(500)
    }
    vehicleName(){
        cy.contains('Vehicle Name').type(this.carName())
    }
    selectStatus(){
        this._selectRandomOption('Select current status', this.commonDropdownXpath)
        return this
    }
    selectManufacturer(){
        this._selectRandomOption('Select manufacturer', this.commonDropdownXpath)
        return this
    }
    selectModel() {
        this._selectRandomOption('Select model', this.commonDropdownXpath)
        cy.wait(500)
        return this
    }
    selectManufacturingYear() {
        cy.contains('Manufacturing Year').type(this.generateRandomYear())
        cy.wait(500)
    }
    selectOwnership() {
        this._selectRandomOption('Select ownership', this.commonDropdownXpath)
        return this
    }
    selectVehicleType() {
        this._selectRandomOption('Select vehicle type', this.commonDropdownXpath)
        return this
    }
    selectVehicleCategory() {
        this._selectRandomOption('Select vehicle category', this.commonDropdownXpath)
        cy.wait(2000)
        return this
    }
    selectColor(){
        cy.contains('Color'). type(this.color())
        cy.wait(2000)

    }
    chasisNo(){
        cy.contains('Chasis No').type(this.createRandomNumber())
    }
    engineNo(){
        cy.contains('Engine No').type(this.createRandomNumber())
    }
    vehicleCapacity(){
        cy.contains('Vehicle Capacity').type(this.capacity())
    }
    passengerCapacity(){
        cy.contains('Passenger Capacity').type(this.capacity())
    }
    regPlateNo(){
        cy.contains('Reg. Plate No').type(this.createRegNumber())
    }
    saveButton(){
        cy.contains('Save').click()
    }
}
export default VehicleAdd