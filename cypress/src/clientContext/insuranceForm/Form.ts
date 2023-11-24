class FormElements {
    get makeSelect() {
        return cy.get('#make')
    }

    get modelSelect() {
        return cy.get('#model')
    }

    get cylinderCapacity() {
        return cy.get('#cylindercapacity')
    }

    get enginePerformance() {
        return cy.get('#engineperformance')
    }

    get dateOfManufacture() {
        return cy.get('#dateofmanufacture')
    }

    get numberOfSeats() {
        return cy.get('#numberofseats')
    }

    get righHandDriveYes() {
        return cy.get('.group #righthanddriveyes')
    }

    get numberOfSeatsMotorcycle() {
        return cy.get('#numberofseatsmotorcycle')
    }

    get fuelType() {
        return cy.get('#fuel')
    }

    get payload() {
        return cy.get('#payload')
    }

    get totalweight() {
        return cy.get('#totalweight')
    }

    get listPrice() {
        return cy.get('#listprice')
    }

    get licensePlateNumber() {
        return cy.get('#licenseplatenumber')
    }

    get annualMileage() {
        return cy.get('#annualmileage')
    }

    get nextInsurantDataButton() {
        return cy.get('#nextenterinsurantdata')
    }

    get firstName() {
        return cy.get('#firstname')
    }

    get nextProductDataButton() {
        return cy.get('#nextenterproductdata')
    }

    get lastName() {
        return cy.get('#lastname')
    }

    get birthdate() {
        return cy.get('#birthdate')
    }

    get country() {
        return cy.get('#country')
    }

    get zipcode() {
        return cy.get('#zipcode')
    }

    get occupation() {
        return cy.get('#occupation')
    }

    get cliffDiving() {
        return cy.get('.group')
    }

    get startDate() {
        return cy.get('#startdate')
    }

    get insuranceSum() {
        return cy.get('#insurancesum')
    }

    get meritRating() {
        return cy.get('#meritrating')
    }

    get damageInsurance() {
        return cy.get('#damageinsurance')
    }

    get LegalDefenseInsurance() {
        return cy.get('#LegalDefenseInsurance')
    }

    get courtesyCar() {
        return cy.get('#courtesycar')
    }

    get nextPriceOptionButton() {
        return cy.get('#nextselectpriceoption')
    }

    get choosePrice() {
        return cy.get('tr > .group')
    }

    get nextSendQuoteButton() {
        return cy.get('#nextsendquote')
    }

    get email() {
        return cy.get('#email')
    }

    get userName() {
        return cy.get('#username')
    }

    get password() {
        return cy.get('#password')
    }

    get confirmPassword() {
        return cy.get('#confirmpassword')
    }

    get sendEmailButton() {
        return cy.get('#sendemail')
    }

    get alertSucess() {
        return cy.get('.sweet-alert')
    }
}

export class Form {
    el = new FormElements()

    navigate() {
        cy.visit('https://sampleapp.tricentis.com/101/app.php')
    }

    fillVehicleData() {
        // Obtém as opções do elemento select filtrando a opção "default"
        this.el.makeSelect.find('option:not(.id[value="default"])').then((options) => {
            if (options.length > 0) {
                const randomIndex = Cypress._.random(1, options.length - 1);
                const randomOption = Cypress.$(options[randomIndex]);
                const optionText = randomOption.text();
                // Seleciona a opção aleatória
                this.el.makeSelect.select(optionText);
            }
        })
        this.el.modelSelect.find('option:not(.id[value="default"])').then((options) => {
            if (options.length > 0) {
                const randomIndex = Cypress._.random(1, options.length - 1);
                const randomOption = Cypress.$(options[randomIndex]);
                const optionText = randomOption.text();
                this.el.modelSelect.select(optionText);
            }
            this.el.cylinderCapacity.type('200')
            this.el.enginePerformance.type('500')
            this.el.dateOfManufacture.type('03/02/2023')
            this.el.numberOfSeats.find('option:not(.id[value="default"])').then((options) => {
                if (options.length > 0) {
                    const randomIndex = Cypress._.random(1, options.length - 1);
                    const randomOption = Cypress.$(options[randomIndex]);
                    const optionText = randomOption.text();
                    this.el.numberOfSeats.select(optionText);
                }
                this.el.righHandDriveYes.check(({ force: true }))
                this.el.numberOfSeatsMotorcycle.find('option:not(.id[value="default"])').then((options) => {
                    if (options.length > 0) {
                        const randomIndex = Cypress._.random(1, options.length - 1);
                        const randomOption = Cypress.$(options[randomIndex]);
                        const optionText = randomOption.text();
                        this.el.numberOfSeatsMotorcycle.select(optionText);
                    }
                })
                this.el.fuelType.select('Petrol')
                this.el.payload.type('35')
                this.el.totalweight.type('250')
                this.el.listPrice.type('5000')
                this.el.licensePlateNumber.type('4DC')
                this.el.annualMileage.type('800')
            })
        })
    }

    goToStepInsurantData() {
        this.el.nextInsurantDataButton.click()
    }

    fillInsurantData() {
        this.el.firstName.type('Teste')
        this.el.lastName.type('Silvas')
        this.el.birthdate.type('03/02/1993')
        this.el.country.select('Brazil').blur()
        this.el.zipcode.type('41650320')
        this.el.occupation.find('option:not(.id[value="default"])').then((options) => {
            if (options.length > 0) {
                const randomIndex = Cypress._.random(1, options.length - 1);
                const randomOption = Cypress.$(options[randomIndex]);
                const optionText = randomOption.text();
                this.el.occupation.select(optionText);
            }
        })
        this.el.cliffDiving.contains('.ideal-radiocheck-label', 'Cliff Diving').click();
    }


    goToStepProductData() {
        this.el.nextProductDataButton.click()
    }

    fillProductData() {
        this.el.startDate.type('01/01/2024')
        this.el.insuranceSum.find('option:not(.id[value="default"])').then((options) => {
            if (options.length > 0) {
                const randomIndex = Cypress._.random(1, options.length - 1);
                const randomOption = Cypress.$(options[randomIndex]);
                const optionValue = randomOption.val();
                this.el.insuranceSum.select(optionValue);
                if (optionValue !== 'default') {
                    this.el.insuranceSum.select(optionValue);
                }
            }
        })
        this.el.meritRating.find('option:not(.id[value="default"])').then((options) => {
            if (options.length > 0) {
                const randomIndex = Cypress._.random(1, options.length - 1);
                const randomOption = Cypress.$(options[randomIndex]);
                const optionText = randomOption.text();
                this.el.meritRating.select(optionText);
            }
        })
        this.el.damageInsurance.find('option:not(.id[value="default"])').then((options) => {
            if (options.length > 0) {
                const randomIndex = Cypress._.random(1, options.length - 1);
                const randomOption = Cypress.$(options[randomIndex]);
                const optionText = randomOption.text();
                this.el.damageInsurance.select(optionText);
            }
        })
        this.el.LegalDefenseInsurance.check({force: true})
        this.el.courtesyCar.find('option:not(.id[value="default"])').then((options) => {
            if (options.length > 0) {
                const randomIndex = Cypress._.random(1, options.length - 1);
                const randomOption = Cypress.$(options[randomIndex]);
                const optionText = randomOption.val();
                this.el.courtesyCar.select(optionText);
            }
        })
    }

    goToStepPriceOption() {
        this.el.nextPriceOptionButton.click()
    }

    selectPriceOption() {
        // Usar o método .find() em vez de .invoke() para obter os elementos diretamente
        this.el.choosePrice.then(($group) => {
            if ($group.length > 0) {
                const radios = $group.find('input[type="radio"]');
                if (radios.length > 0) {
                    // Escolher um rádio aleatório
                    const randomIndex = Cypress._.random(0, radios.length - 1);
                    cy.wrap(radios[randomIndex]).check({force:true});
                }
            }
        });
    }

    goToSendQuote() {
        this.el.nextSendQuoteButton.click()
    }

    fillSendQuote() {
        this.el.email.type('teste@teste.com.br')
        this.el.userName.type('testesilva')
        this.el.password.type('Teste123')
        this.el.confirmPassword.type('Teste123')
    }

    sendForm() {
        this.el.sendEmailButton.click()
    }


}
