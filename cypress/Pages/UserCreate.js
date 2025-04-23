
class UserCreate {

 //Common Methode For Random Selection
    _selectRandomOption(dropdownText, xpathSelector) {
        cy.contains(dropdownText).click();
        cy.xpath(xpathSelector)
            .should('be.visible')
            .then(($items) => {
                const itemCount = $items.length;
                cy.log(itemCount)
                const randomIndex = Math.floor(Math.random() * itemCount);
                cy.log(randomIndex)
                const selectedText = $items[randomIndex].innerText.trim();
                cy.log(`Selected Option: ${selectedText}`);

// Wrap and click the random item
                cy.wrap($items[randomIndex]).click();
            });
    }
    clickUser(){
        cy.contains('Users').click()
    }
    clickAdd(){
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
    selectDepartment() {
        this._selectRandomOption('Select department','//div[@role=\'presentation\']')        // User Department Select
        cy.wait(2000)

    }
    userEmail(Email) {
        cy.contains('Email').type(Email);
    }
    phoneNumber(phoneNumber) {
        cy.contains('Phone Number').type(phoneNumber);
    }
    selectPayment() {
        this._selectRandomOption('Select preferred payment','//div[@role="option"]');
        return this;
    }
    currentAddress(Address) {
       cy.contains('Current Address').type(Address)
       cy.wait(2000)
    }
    selectVehicle() {
        this._selectRandomOption('Select assigned vehicle','//div[@role="option"]');
        return this;
    }
    selectDriver() {
        this._selectRandomOption('Select assigned driver','//div[@role="option"]');
        cy.contains('Assigned Driver').click()
        cy.wait(500)
        return this;
    }
    userSave() {
        cy.contains('Save').click();
        cy.wait(2000)
    }
    userSearch(Search) {
        cy.get('.gap-3 > .items-center > .relative > .flex').type(Search)
        cy.wait(2000)
    }
    clickOnName(Name) {
        cy.contains(Name).click({force: true})
        cy.reload()
        cy.contains(Name).click({force: true})
        cy.wait(6000)
    }
    middleName(middleName) {
        cy.contains('Middle Name').type(middleName)
    }
    actionButton() {
        cy.get('.ml-0 > .inline-flex').click()
        cy.wait(2000)
    }
    deleteUser() {
        cy.xpath("//button[normalize-space()='Delete']").click()
        cy.wait(2000)
    }
    clearSearch() {
        cy.get('.gap-3 > .items-center > .relative > .flex').clear()
        cy.wait(2000)
    }
}
export default UserCreate

