import { Checkout } from "../../../src/clientContext/authentification/CheckoutDone"

const checkout = new Checkout()

describe('Processo de checkout para inscrição em evento', () => {

    beforeEach(() => {
        cy.clearAllSessionStorage()
        // Dado que o usuário está na página de checkout
        checkout.navigate()
    })
    it('Usuário realiza o checkout com sucesso', () => {

        checkout.buyTicketAsAUser()
        // Então é redirecionado para a página de checkout concluído
        cy.url().should('include', '/done')
        // E visualiza a mensagem de pedido feito com sucesso
        checkout.el.successMessage.should('be.visible')
        //  E visualiza o QR code e o código de inscrição
        checkout.el.getQRCode.should('be.visible')
        checkout.el.registrationCode.should('be.visible')
        // E consegue salvar o comprovante
        checkout.savePDF()
        cy.wait(5000)
        cy.task('hasPdfFiles', 'cypress/downloads').then((hasPdf) => {
            if (hasPdf) {
                //  Log informando que existem arquivos PDF
                cy.log('Existem arquivos PDF na pasta de downloads.')
            } else {
                // Falhar o teste se não houver arquivos PDF
                throw new Error("Teste falhou")
            }
        })         // E possui a opção de visualizar suas inscrições
        checkout.el.viewRegistrationsButton.should('exist')
        // E possui a opção de avaliar sua experiência
        checkout.el.orderEvaluation.should('exist')
    })

    it('Usuário guest realiza o checkout com sucesso', () => {

        checkout.buyTicketAsAGuest()
        // Então é redirecionado para a página de checkout concluído
        cy.url().should('include', '/done')
        // E visualiza a mensagem de pedido feito com sucesso
        checkout.el.successMessage.should('be.visible')
        //  E visualiza o QR code e o código de inscrição
        checkout.el.getQRCode.should('be.visible')
        checkout.el.registrationCode.should('be.visible')
        // E consegue salvar o comprovante
        checkout.savePDF()
        cy.wait(5000)
        cy.task('hasPdfFiles', 'cypress/downloads').then((hasPdf) => {
            if (hasPdf) {
                //  Log informando que existem arquivos PDF
                cy.log('Existem arquivos PDF na pasta de downloads.')
            } else {
                // Falhar o teste se não houver arquivos PDF
                throw new Error("Teste falhou")
            }
        }) 
        // E possui a opção de visualizar suas inscrições
        checkout.el.viewRegistrationsButton.should('exist')
        // E possui a opção de avaliar sua experiência
        checkout.el.orderEvaluation.should('exist')
    });

})
