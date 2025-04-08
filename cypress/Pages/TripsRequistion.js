class TripsRequistion {

    tripsRequisition= ':nth-child(2) > div > .relative > .h-full > span'
    addNew = '.flex-row > .bg-red-500'
    tripType = ' //div[@id=\'radix-:r6n:\']'
    vehicleTypeSUV = '//div[@id=\'radix-:r7u:\']'
    vehicleTypeSedan = '//div[@id=\'radix-:r7t:\']'
    vehicleSelectBMW = '//div[@id=\'radix-:r84:\']'
    startDate = '//button[@aria-controls=\'radix-:rbt:\']'
    selectStartDate= '//button[normalize-space()=\'17\']'
    endDate = '//button[@aria-controls=\'radix-:rbv:\']'
    selectEndDate = '//button[normalize-space()=\'24\']'
    tripFor = '//div[@id=\'radix-:r84:\']'
    route = '//div[@id=\'radix-:r84:\']'
    pickupPoint = '//input[@id=\':r74:-form-item\']'
    dropoffPoint = '//input[@id=\':r75:-form-item\']'
    selectDriver = '//div[@id=\'radix-:r9c:\']'
    specialInstruction = 'Special Instruction'
    saveTrip ='//button[normalize-space()=\'Save\']'


    selectTrips(tripsRequistions){
   cy.get(this.tripsRequisition).click()
        cy.wait(2000)
    }
    newTrip(addNew){
        cy.get(this.addNew).click()
        cy.wait(2000)
    }
    selectTripType(tripType) {
        cy.get(':nth-child(2) > .space-y-2 > .items-center').click()
        cy.wait(2000)
        cy.xpath(this.tripType).contains('Pick & Drop').click()
        cy.wait(1000)
    }
    selectVehicleType(VehicleType) {
        cy.contains('Vehicle Type')
        cy.wait(1000)
        cy.xpath(this.vehicleTypeSUV).click()
        cy.wait(1000)
    }
}
export default TripsRequistion