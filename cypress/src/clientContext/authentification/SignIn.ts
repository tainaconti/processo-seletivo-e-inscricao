class SignInElements {
    get mailInput () {
        return cy.get('input[name="email"]')
    }

    get passwordInput () {
        return cy.get('input[name="password"]')
    }

    get submitButton () {
        return cy.get('.MuiBox-root-333 > div > .MuiButtonBase-root-279 > .MuiButton-label-253')
    }

    get loginButton () {
        return cy.get(':nth-child(3) > .MuiButtonBase-root-279 > .MuiButton-label-253')
    }
}

export class SignIn {
    continueWithEmailWithEmail() {
        throw new Error("Method not implemented.")
    }
    el = new SignInElements()

    continueWithEmail() {
        this.el.loginButton.click()
        this.el.mailInput.type('automatedtesteseincricao@gmail.com')
        this.el.passwordInput.type('123456')
        this.el.submitButton.click() 
    }
}

