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
            // E possui a opção de salvar o comprovante
            checkout.el.saveReceiptButton.should('exist')
            // E possui a opção de visualizar suas inscrições
            checkout.el.viewRegistrationsButton.should('exist')
            // E possui a opção de avaliar sua experiência
            checkout.el.orderEvaluation.should('exist')
        })

        it.only('Guest realiza o checkout com sucesso', () => {
            
            checkout.buyTicketAsAGuest()
            // Então é redirecionado para a página de checkout concluído
            cy.url().should('include', '/done')
            // E visualiza a mensagem de pedido feito com sucesso
            checkout.el.successMessage.should('be.visible')
            //  E visualiza o QR code e o código de inscrição
            checkout.el.getQRCode.should('be.visible')
            checkout.el.registrationCode.should('be.visible')
            // E possui a opção de salvar o comprovante
            checkout.el.saveReceiptButton.should('exist')
            // E possui a opção de visualizar suas inscrições
            checkout.el.viewRegistrationsButton.should('exist')
            // E possui a opção de avaliar sua experiência
            checkout.el.orderEvaluation.should('exist')
    })
})
