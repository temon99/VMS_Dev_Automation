
import vehicleAdd from "../../Pages/VehicleAdd";
Cypress.Commands.add('Vehicle', () => {
    const vehicle = new vehicleAdd()
    const path = require('path');
    const filePath = path.join('cypress/fixtures/Lambo.jpg')

    vehicle.selectMenu()
    vehicle.addVehicleButton()
    //vehicle.uploadImage(filePath)
    vehicle.vehicleName()
    vehicle.selectStatus()
    vehicle.selectManufacturer()
    vehicle.selectModel()
    vehicle.selectManufacturingYear()
    vehicle.selectOwnership()
    vehicle.selectVehicleType()
    vehicle.selectVehicleCategory()
    vehicle.selectColor()
    vehicle.chasisNo()
    vehicle.engineNo()
    vehicle.vehicleCapacity()
    vehicle.passengerCapacity()
    vehicle.regPlateNo()
    vehicle.saveButton()
});