export class loginPage{

    loginWithPasswordEmail(){
        cy.contains('div','Login to your account')
          .should('be.visible')
        cy.get('[data-qa="login-password"]').type(userPassword)
        cy.get('[data-qa="login-email"]').type(userEmail)
        cy.get('[data-qa="login-button"]').click()
      }
      
      loginToAccountIsVissible(){
        cy.contains('div','Login to your account')
          .should('be.visible')
      }
  
      loggedAsUser(){
      cy.contains('div','Logged in as David')
      .contains('Logged in as David')
      }

      errorMsg(){
      cy.contains('div','Login to your account')
      .contains('Your email or password is incorrect!')
      }




}

export const navigateToLogin = new loginPage()
