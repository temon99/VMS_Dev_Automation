// let testData= {}
// before(function(){
//     cy.fixture('ConfigData.json').as('ConfigData').then(function(data){
//         testData.data =data
//     })
// })

import { faker } from "@faker-js/faker";

Cypress.Commands.add('User_Create', () => {
    // Generate fresh data each time the command runs
    const firstname = faker.person.firstName('male');
    const lastName = faker.person.lastName('male');
    const companyName = faker.company.name();
    const phoneNumber = faker.phone.number({ style: 'national' });
    const currentAddress = faker.location.streetAddress({ useFullAddress: true });
    const path = require('path');
    const filePath = path.join('cypress/fixtures/VMS/Images/David_Backham_2.jpg');

    cy.contains('Users').click();
    cy.contains('Add User').click();                                                                 // New User Create
    cy.contains('First Name').type(firstname);                                                       // User First name
    cy.contains('Last Name').type(lastName);                                                         // User Last name

    // File Upload Process (commented out, uncomment if needed)




    cy.xpath("//*[@id=\"avatar-upload-avatarId\"]").selectFile (filePath,  { force: true })


    // cy.xpath( "//*[@id='avatar-upload-avatarId']", { timeout: 10000 }).then(($uploadArea) => {
    //     cy.wrap($uploadArea).find('input[type="file"]').selectFile(filePath, { force: true });
    // });

    cy.contains('Company Name').type(companyName);                                                   // User Company Name
    cy.contains('Select department').click();                                                        // User Department Select
    cy.xpath("//div[@role='presentation']").contains('IT').click();                                  // User department Select
    cy.contains('Email').type(`${firstname}@gmail.com`);                                         // User Email
    cy.contains('Phone Number').type(phoneNumber);                                                   // User Phone Number
    cy.contains('Select preferred payment').click();                                                 // Payment Type
    cy.xpath("//div[@role='presentation']").contains('Cash').click();
    cy.contains('Current Address').type(currentAddress);                                             // Current Address
    cy.contains('Select assigned vehicle').click();                                                  // Vehicle Name
    cy.xpath("//div[@role='presentation']").contains('Car One').click();
    cy.contains('Select assigned driver').click();                                                   // Driver Name
    cy.xpath("//div[@role='presentation']").contains('Abdul Malek').click();       // Fixed typo: 'presentation' → 'presentation'
    cy.contains('Save').click();

    // Search and delete (consider moving to a separate command)
    cy.get('.gap-3 > .items-center > .relative > .flex').type(firstname).wait(2000)
    cy.get('.ml-0 > .inline-flex').click().wait(2000)
    cy.xpath("//button[normalize-space()='Delete']").click().wait(2000)
    cy.get('.gap-3 > .items-center > .relative > .flex').clear().wait(2000)
});
