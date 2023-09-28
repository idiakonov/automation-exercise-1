export class loginPage{

    loginWithPasswordEmail(){
        cy.contains('div','Login to your account')
          .should('be.visible')
        cy.get('[data-qa="login-password"]').type(userPassword)
        cy.get('[data-qa="login-email"]').type(userEmail)
        cy.get('[data-qa="login-button"]').click()
      }
      
      loginAccountIsVissible(){
        cy.contains('div','Login to your account')
          .should('be.visible')
      }
  
      




}

export const navigateToLogin = new loginPage()
