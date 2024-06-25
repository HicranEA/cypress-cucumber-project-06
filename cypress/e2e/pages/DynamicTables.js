class DynamicTables {

    /*Locators*/

    getInventoryHeading () {
        return cy.get('.is-size-3')
    }
    getTableHeaders () {
        return cy.get('.DynamicTables_tableHeaders__k53h5 > th')
    }

    getButtons(button) {
        switch (button) {
          case "ADD PRODUCT":
            return cy.get('#add_product_btn')
          case "X":
            return cy.get('.delete')
          case "SUBMIT":
            return cy.get('#submit')
          default:
            throw new Error(`Invalid Button!`)
        }
      }

    getTotalAmount() {
        return cy.get('#total_amount')
    }

    getTableCells() {
        return cy.get('tbody > tr > td')
    }

    getLastRowCells() {
        return cy.get('tbody > tr').last().find('td')
    }

    getModalTitle() {
        return cy.get('#modal_title')
    }

    getLabel(label) {
        switch (label) {
          case "Please select the quantity":
            return cy.get('.field > label').first()
          case "Please enter the name of the product":
            return cy.get('.field > label').eq(1)
          case "Please enter the price of the product":
            return cy.get('.field > label').last()
          default:
            throw new Error(`Invalid Label!`)
        }
       }
  
    getInputFields() {
        return cy.get('.input')
    }

    getQuantityInputBox() {
        return cy.get('#quantity')
    }

    getProductInputBox() {
        return cy.get('#product')
    }

    getPriceInputBox() {
        return cy.get('#price')
    }

    /*Methods*/

    ClickOnButtons(button) {
        this.getButtons(button).click()
      }

}

export default DynamicTables