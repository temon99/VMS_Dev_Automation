
Cypress.Commands.add('User_Login',()=>{
    cy.get('#\\:r0\\:-form-item').type('tanzim.emon@vivasoftltd.com')
    cy.get('#\\:r2\\:-form-item > .relative > .flex').type('1234')
    cy.get('.bg-red-500').click()
})