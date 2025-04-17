/* ==== Test Created with Cypress Studio ==== */
import UserCreate from "../../Pages/UserCreate";

describe('API Wait Test', function() {
    it('test', function() {
        // Intercepts — set before visit or interaction
        cy.intercept('POST', '**/api/Employees/GetStaffList').as('getStaffList');
        cy.intercept('POST', '**/api/Departments/Getselectlist').as('getDepartments');
        cy.intercept('POST', '**/api/Vehicles/Getselectlist').as('getVehicles');
        cy.intercept('POST', '**/api/PaymentTypes/Getselectlist').as('getPaymentTypes');
        cy.intercept('GET', '**/api/Employees/GetById/12').as('getEmployeeById');
        cy.intercept('POST', '**/api/Employees/GetDriverSelectlist').as('getDriverList');

        // Load site and login
        cy.VMS_site_load();
        cy.User_Login();

        const vms1 = new UserCreate();
        vms1.clickUser();

        cy.contains('Mustafizur Rahman').click();
        cy.reload(true);
        cy.contains('Mustafizur Rahman').click();

        // Only wait for the requests you’re sure will fire
        cy.wait('@getStaffList');
        cy.wait('@getDepartments');
        cy.wait('@getVehicles');

        // Optional: Only wait for these if they're fired after clickUser()
        cy.wait('@getPaymentTypes');
        cy.wait('@getEmployeeById');
        cy.wait('@getDriverList');

    });
});

