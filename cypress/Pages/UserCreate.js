
class UserCreate {

    clickUser(user){
        cy.contains('Users').click()
    }

    clickAdd(addUser){
        cy.contains('Add User').click()
    }

    uploadAvatar(Avatar){
        cy.xpath("//*[@id=\"avatar-upload-avatarId\"]").selectFile (Avatar, { force: true })
        cy.wait(3000)
    }

    firstName(firstName) {
        cy.contains('First Name').type(firstName)
    }

    lastName(lastName) {
        cy.contains('Last Name').type(lastName)
    }

    companyName(companyName) {
        cy.contains('Company Name').type(companyName)
    }

    selectDepartment(Department) {
        cy.contains('Select department').click();                                                        // User Department Select
        cy.xpath("//div[@role='presentation']").contains('IT').click()
        cy.wait(2000)

    }
    userEmail(Email) {
        cy.contains('Email').type(Email);
    }

    phoneNumber(phoneNumber) {
        cy.contains('Phone Number').type(phoneNumber);
    }

    selectPayment(payment) {
        cy.contains('Select preferred payment').click()
        cy.xpath("//div[@role='presentation']").contains('Cash').click();
    }

   currentAddress(Address) {
       cy.contains('Current Address').type(Address)
       cy.wait(2000)
    }

    selectVehicle(Vehicle) {
        cy.contains('Select assigned vehicle').click()
        cy.xpath("//div[@role='presentation']").contains('Car One').click()
    }

    selectDriver(Driver) {
        cy.contains('Select assigned driver').click();                                                   // Driver Name
        cy.xpath("//div[@role='presentation']").contains('Abdul Malek').click();       // Fixed typo: 'presentation' → 'presentation'
        cy.wait(1000)
    }

    userSave(Save) {
        cy.contains('Save').click();
        cy.wait(2000)
    }

    userSearch(Search) {
        cy.get('.gap-3 > .items-center > .relative > .flex').type(Search)
        cy.wait(2000)
    }

    clickOnName(Name) {
        cy.contains(Name).click({force: true})
        cy.wait(6000)
    }


    middleName(middleName) {
        cy.contains('Middle Name').type(middleName)
    }

    actionButton(actionButton) {
        cy.get('.ml-0 > .inline-flex').click()
        cy.wait(2000)
    }

    deleteUser(Delete) {
        cy.xpath("//button[normalize-space()='Delete']").click()
        cy.wait(2000)
    }

    clearSearch(clearSearch) {
        cy.get('.gap-3 > .items-center > .relative > .flex').clear()
        cy.wait(2000)
    }

}
export default UserCreate

