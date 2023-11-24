import { Form } from "../../../src/clientContext/insuranceForm/Form";

const form = new Form

describe('Preenchimento do formulário de seguro', () => {
    before(() => {
        cy.clearAllCookies()
    })
    it('Usuário preenche formulário com sucesso', () => {
        // Abre a página do formulário de seguros
        form.navigate()
        // Preencher cada aba do formulário com as informações obrigatórias e dados válidos
        // Preenche aba "Enter Vehicle Data"
        form.fillVehicleData()

        form.goToStepInsurantData()

        //Preenche aba "Enter Insurant Data"
        form.fillInsurantData()

        form.goToStepProductData()

        //Preenche aba "Enter Product Data"
        form.fillProductData()

        form.goToStepPriceOption()

        //Preenche aba "Select Price Option"
        form.selectPriceOption()

        form.goToSendQuote()

        //Preenche aba "Send Quote"
        form.fillSendQuote()

        //Envia o formulário
        form.sendForm()
        cy.wait(5000)
        // Verifica se a mensagem de sucesso é exibida
        form.el.alertSucess.should('be.visible').contains('Sending e-mail success!')
    });
})
