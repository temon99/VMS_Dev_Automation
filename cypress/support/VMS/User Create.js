// let testData= {}
// before(function(){
//     cy.fixture('ConfigData.json').as('ConfigData').then(function(data){
//         testData.data =data
//     })
// })

import {faker} from "@faker-js/faker";
const firstname = faker.person.firstName('male')
const lastName = faker.person.lastName('male')
const companyName = faker.company.name()
const phoneNumber = faker.phone.number({ style: 'national' })
const currentAddress = faker.location.streetAddress({ useFullAddress: true })
Cypress.Commands.add('User_Create',()=>{
    cy.contains('Users').click()
    cy.contains('Add User').click()                                                                       //New User Create
    cy.contains('First Name'). type(firstname)                                                           // User First name
    cy.contains('Last Name'). type(lastName)                                                             // User Last name
    //cy.xpath('//div[@class=\'flex items-center justify-center w-full h-full\']').selectFile(cypress/fixtures/VMS/Images/David_Backham.jpg);
    //cy.wait(8000)
    cy.contains ('Company Name'). type(companyName)                                                      // User Company Name
    cy.contains('Select department').click()                                                             // User Department Select
    cy.xpath("//div[@role='presentation']").contains('IT').click().wait(2000)      // User department Select
    cy.contains('Email').type(faker.internet.exampleEmail({allowSpecialCharacters: true}))        // User Email
    cy.contains('Phone Number').type(phoneNumber)                                                        // User Phone NUmber
    cy.contains ('Select preferred payment') .click()                   // Payment Type
    cy.xpath("//div[@role='presentation']").contains('Cash').click().wait(2000)
    cy.contains('Current Address') .type(currentAddress)                                                  // Current Address
    cy.contains ('Select assigned vehicle').click()                                                       // Vehicle Name
    cy.xpath("//div[@role='presentation']").contains('Car One').click()
    cy.contains('Select assigned driver').click()                                                         // Driver Name
    cy.xpath("//div[@role='presentation']").contains('Abdul Malek').click()
    cy.contains ('Save').click(). wait (2000)
    cy.get('.gap-3 > .items-center > .relative > .flex'). type(firstname ).wait (2000)
    //cy.xpath("//tbody/tr[1]").click()
    cy.get('.ml-0 > .inline-flex').click()
    cy.xpath("//button[normalize-space()='Delete']") .wait(2000).click().wait(2000)
})