
Cypress.Commands.add('VMS_User',()=>{
    cy.visit("http://52.29.121.231:3002/auth/login")
})
Cypress.Commands.add('User_Login',()=>{
    cy.get('#\\:r0\\:-form-item').type('masudur.rahman+auto@vivasoftltd.com')
    cy.get('#\\:r1\\:-form-item > .relative > .flex').type('Admin001')
    cy.get('.bg-red-500').click()
})