describe('User_create', () => {
    it('login', () => {
        cy.VMS_site_load()
        cy.User_Login()
        cy.TripsRequistion()
        cy.ServiceDetails()

    })
})