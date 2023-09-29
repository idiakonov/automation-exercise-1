export class signUpPage{

    newUserSignUp(){
        cy.contains('div','New User Signup!')
          .should('be.visible')
        cy.get('[data-qa="signup-name"]').type(userName)
        cy.get('[data-qa="signup-email"]').type(userEmail)
        cy.get('[data-qa="signup-button"]').click()
      }
  
      clickOnSignUpLogin(){
        cy.contains('Signup / Login')
      .click()
      //Option 2
      // cy.contains('Signup / Login')
      // .parent()
      // .find('.fa')
      // .click()
      }

      signupLoginExist(){
        cy.contains('Signup / Login')
        .should('exist')
      }
      
      userSignupIsVisible(){
        cy.contains('div', 'New User Signup!')
        .should('be.visible')
      }
       errorEmailExist(){
        cy.contains('div','New User Signup!')
      .should('contain','Email Address already exist!')
       }

}

export const navigateToSignUp = new signUpPage()
