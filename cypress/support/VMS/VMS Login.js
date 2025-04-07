let testData= {}
before(function(){
    cy.fixture('VMS/AuthData/LoginData.json').as('Login_dataset').then(function(data){
        testData.data =data
    })
})

Cypress.Commands.add('VMS_site_load',()=>{
    cy.visit(testData.data.sideloading.siteURL)
})
Cypress.Commands.add('User_Login',()=>{
    cy.get('#\\:r0\\:-form-item').type(testData.data.Admin.Masudur_Rahman.user_email)
    cy.get('#\\:r1\\:-form-item > .relative > .flex').type(testData.data.Admin.Masudur_Rahman.user_password)
    cy.get('.bg-red-500').click().wait(3000)
})