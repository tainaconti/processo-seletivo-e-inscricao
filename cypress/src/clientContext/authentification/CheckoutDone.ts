import { SignIn } from "./SignIn"

class CheckoutElements {
    get addButton () {
        return cy.get('[tabindex="0"] > .MuiIconButton-label > .MuiSvgIcon-root')
    }

    get continueButton () {
        return cy.get('.MuiButton-label')
    }

    get participanteChoose () {
        return cy.get('#participantChooser')
    }

    get finishButton () {
        return cy.get('.MuiButton-label')
    }

    get successMessage () {
        return cy.get('.MuiGrid-container > :nth-child(1) > .MuiTypography-root')
    }

    get getQRCode () {
        return cy.get('canvas')
    }

    get registrationCode () {
        return cy.get(':nth-child(3) > :nth-child(2) > .cxJVGM')
    }

    get saveReceiptButton () {
        return cy.get('[style="position: relative; display: inline-block; width: auto;"] > .MuiButtonBase-root > .MuiButton-label')
    }

    get viewRegistrationsButton () {
        return cy.get(':nth-child(4) > .MuiButtonBase-root > .MuiButton-label')
    }

    get orderEvaluation () {
        return cy.get(':nth-child(5) > .MuiPaper-root')
    }

    get continueWithoutAAccount () {
        return cy.get(':nth-child(4) > .MuiButtonBase-root-279 > .MuiButton-label-253')
    }

    get nameInput () {
        return cy.get('form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input')
    }

    get documentInput () {
        return cy.get('.MuiSelect-root')
    }

    get numberDocumentInput () {
        return cy.get('.MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    
    get mailInput () {
        return cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input')

    }

}


export class Checkout {
    el = new CheckoutElements()

    navigate () {
        cy.visit('https://checkout.einscricao.app/?event_id=75524&apiUrl=https://www.e-inscricao.com&msApiUrl=https://safe2pay-paymentflow.einscricao.workers.dev/&LOG=false&receiptUrl=https://recibo.e-inscricao.tech&apiParticipantsUrl=https://ei-mysql-readonly.raise.workers.dev')
    }

    buyTicketAsAUser () {
        const signIn = new SignIn()
        // Quando seleciona uma quantidade de ingressos maior que zero
        this.el.addButton.click()
        // E clica no botão "Continuar"
        this.el.continueButton.click()
        // // E realiza o login com credenciais válidas
        signIn.continueWithEmail()
        // E seleciona participante existente
        this.el.participanteChoose.click()
        cy.contains('.MuiAutocomplete-option', 'Teste Silva').click();
        // E clica no botão "Finalizar"
        this.el.finishButton.click()
        cy.wait(100)
    }

    buyTicketAsAGuest () {
        this.el.addButton.click()
        // E clica no botão "Continuar"
        this.el.continueButton.click()
        // // E realiza o login com credenciais válidas
        this.el.continueWithoutAAccount.click()
        // E preenche os dados válidos do participante
        this.el.nameInput.type('Teste Guest')
        this.el.documentInput.select('CPF')
        this.el.numberDocumentInput.type('896.465.860-40')
        this.el.mailInput.type('automatedtesteseincricaoguest@gmail.com')
        // E clica no botão "Finalizar"
        this.el.finishButton.click()
        cy.wait(100)
    }
}