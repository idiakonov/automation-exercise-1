// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('isPageLoaded', (urlPath) => {
    cy.url().should('eq', `https://automationexercise.com/${urlPath}`)
  })

  // Cypress.Commands.add('hover', (colorChange) => {
  //   // cy.contains('Home')
  //   //   .parent()
  //   //   .find('[style="color: orange;"]')
  //     should('have.css', 'color', 'rgb(255, 165, 0)').should('be.visible')
  // })

  

