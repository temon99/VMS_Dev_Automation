class LoginPage {

    setEmail(email){
        cy.get('#\\:r0\\:-form-item').type(email)
    }

    setPassword(password){
        cy.get('#\\:r1\\:-form-item > .relative > .flex').type(password)
    }

   clickLogin(login){
        cy.get('.bg-red-500').click()
    }

}




export default LoginPage