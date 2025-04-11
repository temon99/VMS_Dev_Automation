import trips from "../../Pages/Trips";
import Trips from "../../Pages/Trips";
Cypress.Commands.add('TripsRequistion', () => {

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
    trips.selectPickupPoint()
    trips.selectDropoffPoint()
    trips.selectDriver1()
    trips.specialIns()
    trips.clickSaveButton()
    });