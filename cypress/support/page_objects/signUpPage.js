export class signUpPage{

    newUserSignUp(){
        cy.contains('div','New User Signup!')
          .should('be.visible')
        cy.get('[data-qa="signup-name"]').type(userName)
        cy.get('[data-qa="signup-email"]').type(userEmail)
        cy.get('[data-qa="signup-button"]').click()
      }
  
      




}

export const navigateToSignUp = new signUpPage()
