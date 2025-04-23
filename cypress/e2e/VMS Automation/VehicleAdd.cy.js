describe('VehicleAdd', () => {
    it('Vehicle', () => {
        cy.VMS_site_load()
        cy.User_Login()
        cy.Vehicle()

    })
})