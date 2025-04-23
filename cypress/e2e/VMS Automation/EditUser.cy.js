import Trips from "../../Pages/Trips";

describe('VMS ', () => {
    it('http://52.29.121.231:3002/auth/login', () => {
        cy.VMS_site_load()
        cy.User_Login()
        const trips = new Trips()

        trips.selectTrips()
        trips.newTrip()

// Select random date from calendar
        const selectRandomDate = () => {
            cy.xpath("//button[@name='day' and not(contains(@class, 'day-outside'))]")
                .should('have.length.gt', 0) // Ensure days are found
                .then(($days) => {
                    const randomIndex = Math.floor(Math.random() * $days.length);
                    const randomDay = $days[randomIndex];
                    cy.wrap(randomDay)
                        .click();
                    return cy.wrap(randomDay);
                });
        };

// Select random time from dropdown
        const selectRandomTime = () => {
            cy.get('[role="option"]') // Time options
                .then($times => {
                    const randomTime = $times[Math.floor(Math.random() * $times.length)];
                    cy.wrap(randomTime).click();
                });
        };

// Usage

            // Open date picker
            cy.contains('Enter Date Time').click();

            // Select random date
        selectRandomDate()

            // Open time picker
            cy.xpath('//button[@role="combobox" and .//span[contains(text(), "00:00")]]').click(); // Or target time input field

            // Select random time
            selectRandomTime();


    })
})
