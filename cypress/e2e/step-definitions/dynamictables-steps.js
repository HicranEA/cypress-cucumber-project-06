/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import DynamicTables from "../pages/DynamicTables";

const dynamictables = new DynamicTables;

Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.visit(url)
});

Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
	dynamictables.getInventoryHeading().should('have.text', heading)
});


Then(/^the user should see the table with the headers below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()
	
	dynamictables.getTableHeaders().each(($el, index) => {
	  cy.wrap($el).should('contain', arr[index])
});
});

Then(/^the user should see the table with the rows below$/, (dataTable) => {

	const rows = dataTable.rawTable.flat()

	dynamictables.getTableCells().each(($el, index) => {
		cy.wrap($el).should('have.text', rows[index])
	  
	});
})

Then(/^the user should see the "([^"]*)" button is enabled$/, (button) => {
		dynamictables.getButtons(button).should('be.enabled');
		
});

Then(/^the user should see the "([^"]*)" text displayed$/, (text) => {
	dynamictables.getTotalAmount().should('have.text', text)
});

When(/^the user clicks on the "([^"]*)" button$/, (button) => {
	dynamictables.ClickOnButtons(button);
});

Then(/^the user should see the "([^"]*)" modal with its heading$/, (title) => {
	dynamictables.getModalTitle().should('have.text', title)
});


Then(/^the user should see the "([^"]*)" label$/, (label) => {
	dynamictables.getLabel(label).should('have.text', label)
});

Then(/^the user should see the "([^"]*)" input box is enabled$/, () => {
	dynamictables.getInputFields().each(($el) => {
		cy.wrap($el).should('be.enabled')
	})
});

Then(/^the user should not see the "([^"]*)" modal$/, () => {
	dynamictables.getModalTitle().should('not.exist')
});


Then(/^the user enters the quantity as "([^"]*)"$/, () => {
	const quantity = 2;

	dynamictables.getQuantityInputBox().type(quantity)
});

Then(/^the user enters the product as "([^"]*)"$/, () => {
	const product = "Mouse";
	
	dynamictables.getProductInputBox().type(product);
});


Then(/^the user enters the price as "([^"]*)"$/, () => {
	const price = 100;

	dynamictables.getPriceInputBox().type(price)
});

Then(/^the user should see the table with the new row below$/, (dataTable) => {
	const rows = dataTable.rawTable.flat()

	dynamictables.getLastRowCells().each(($el, index) => {
		cy.wrap($el).should('have.text', rows[index])
	  
	});
});




