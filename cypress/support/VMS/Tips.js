import Trips from "../../Pages/Trips";
import { faker } from "@faker-js/faker";
Cypress.Commands.add('TripsRequistion', () => {
    const pickUpPoint = faker.location.streetAddress({ useFullAddress: true })
    const dropOffPoint = faker.location.streetAddress({ useFullAddress: true });
    const specialInstruction = faker.lorem.lines({ min: 2, max: 4 })
    const trips = new Trips()
    trips.selectTrips()
    trips.newTrip()
    trips.selectTripType()
    trips.selectVehicleType()
    trips.selectVehicle()
    trips.selectTripFor()
    trips.selectRoute()
    trips.selectstartDate()
    trips.selectEndDate()
    trips.selectPickupPoint(pickUpPoint)
    trips.selectDropoffPoint(dropOffPoint)
    trips.selectDriver1()
    trips.specialIns(specialInstruction)
    trips.clickSaveButton()
    });