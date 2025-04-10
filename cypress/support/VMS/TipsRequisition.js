import tripsRequistion from "../../Pages/TripsRequistion";
Cypress.Commands.add('TripsRequistion', () => {

    const trips= new tripsRequistion()
    trips.selectTrips()
    trips.newTrip()
    trips.selectTripType()
    trips.selectVehicleType()
    trips.selectVehicle()
    trips.selectTripFor()
    trips.selectRoute()
    trips.selectstartDate1()
    trips.selectEndDate1()
    //trips.selectPickupPoint()
    //trips.selectDropoffPoint()
    trips.selectDriver1()
   // trips.specialIns()
   trips.saveThisTrip()
    });