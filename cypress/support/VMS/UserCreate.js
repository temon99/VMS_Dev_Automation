// let testData= {}
// before(function(){
//     cy.fixture('ConfigData.json').as('ConfigData').then(function(data){
//         testData.data =data
//     })
// })

import { faker } from "@faker-js/faker";
import UserCreate from "../../Pages/UserCreate";
import tripsRequistion from "../../Pages/Trips";


Cypress.Commands.add('User_Create', () => {
    // Generate fresh data each time the command runs
    const firstname = faker.person.firstName('male');
    const lastName = faker.person.lastName('male');
    const middleName = faker.person.middleName('male')
    const companyName = faker.company.name();
    const phoneNumber = faker.phone.number({ style: 'national' });
    const currentAddress = faker.location.streetAddress({ useFullAddress: true });
    const path = require('path');
    const filePath = path.join('cypress/fixtures/VMS/Images/David_Backham_2.jpg');

    const vmsUser=new UserCreate()

    vmsUser.clickUser()
    vmsUser.clickAdd()                                                      // New User Create
    vmsUser.uploadAvatar(filePath)
    vmsUser.firstName(firstname)                                            // User First name
    vmsUser.lastName(lastName)                                              // User Last name
    vmsUser.companyName(companyName)                                        // User Company Name
    vmsUser.selectDepartment()                                              // User Department Select
    vmsUser.userEmail(firstname + "@gmail.com")                       // User Email
    vmsUser.phoneNumber(phoneNumber)                                        // User Phone Number
    vmsUser.selectPayment()                                                 // Payment Type
    vmsUser.currentAddress(currentAddress)                                  // Current Address
    vmsUser.selectVehicle()                                                // Vehicle Name
    vmsUser.selectDriver()                                                 // Driver Name
    vmsUser.userSave()
    vmsUser.userSearch(firstname + "  " + lastName)                 //Search User
    vmsUser.clickOnName(firstname + " " + lastName)
    vmsUser.middleName(middleName)                                         // Edit User Name
    vmsUser.userSave()
    vmsUser.userSearch(firstname +" " + middleName + " "+ lastName)
    vmsUser.actionButton()
    vmsUser.deleteUser()                                                   //Delete User
    vmsUser.clearSearch()

});
