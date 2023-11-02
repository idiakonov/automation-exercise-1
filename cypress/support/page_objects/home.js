export class HomePage {
  pageIsVisable() {
    cy.contains('Home')
      .parent()
      .find('[style="color: orange;"]')
      .should('have.css', 'color', 'rgb(255, 165, 0)').should('be.visible')
  }
}