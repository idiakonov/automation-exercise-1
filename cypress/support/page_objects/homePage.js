import { navigateTo } from "./navigationPage";

export class homePage {

    verifyHomePage(){
    cy.contains('Home')
      .parent()
      .find('[style="color: orange;"]')
      .should('have.css', 'color', 'rgb(255, 165, 0)').should('be.visible')
    }
    

}

export const navigateToHomePage = new homePage()