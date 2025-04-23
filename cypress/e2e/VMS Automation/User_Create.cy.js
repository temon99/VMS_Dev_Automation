describe('User_create', () => {
    it('login', () => {
        //cy.viewport(1920, 1080)
        cy.VMS_site_load()
        cy.User_Login()
        cy.User_Create()
    })
})