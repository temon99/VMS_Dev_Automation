describe('VMS ', () => {
    it('http://52.29.121.231:3002/auth/login', () => {
        cy.VMS_site_load()
        cy.User_Login()
        cy.User_Create()
        cy.TripsRequistion()
        cy.ServiceDetails()
        cy.Vehicle()
    })
})