Cypress.Commands.add('User_Create',()=>{
    cy.get(':nth-child(1) > div > .relative > .h-full > span').click()
    cy.get('.flex-row > .bg-red-500').click()
    cy.xpath("//input[@name='firstName']").type('Tanzim')
    cy.xpath ("//input[@name='lastName']"). type('Emon')
    cy.xpath("//input[@name='companyName']").type('Vivasoft Ltd')
    cy.xpath("//span[normalize-space()='Select department']").click()






})