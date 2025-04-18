import trips from "../../Pages/Trips";
import Trips from "../../Pages/Trips";
import { faker } from "@faker-js/faker";
Cypress.Commands.add('TripsRequistion', () => {
    const pickUpPoint = faker.location.streetAddress({ useFullAddress: true })
    const dropOffPoint = faker.location.streetAddress({ useFullAddress: true });
    const trips = new Trips()
   trips.selectTrips()
    trips.newTrip()
    trips.selectTripType()
    trips.selectVehicleType()
    trips.selectVehicle()
    trips.selectTripFor()
    trips.selectRoute()
    trips.selectstartDate1()
    trips.selectEndDate1()
    trips.selectPickupPoint(pickUpPoint)
    trips.selectDropoffPoint(dropOffPoint)
    trips.selectDriver1()
    trips.specialIns()
    trips.clickSaveButton()
    });