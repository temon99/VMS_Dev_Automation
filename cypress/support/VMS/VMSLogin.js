
import LoginPage from "../../Pages/LoginPage";

let adminData= {}
before(function(){
    cy.fixture('VMS/AuthData/LoginData.json').as('Login_dataset').then(function(data){
       adminData.data =data
    })
})

Cypress.Commands.add('VMS_site_load',()=>{
    cy.visit(adminData.data.sideloading.siteURL)
})

Cypress.Commands.add('User_Login',()=>{

    const vms =new LoginPage()
    vms.setEmail(adminData.data.Admin.Masudur_Rahman.user_email)
    vms.setPassword(adminData.data.Admin.Masudur_Rahman.user_password)
    vms.clickLogin();

})