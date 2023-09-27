export class webPage {

    homePageIsVisible(){
        Cypress.Commands.add('isPageLoaded', (urlPath) => {
            cy.url().should('eq', `https://automationexercise.com/${urlPath}`)
          })


    }
    // cy.contains('Home')
    //   .parent()
    //   .find('[style="color: orange;"]')
    //   .should('have.css', 'color', 'rgb(255, 165, 0)').should('be.visible')
    

    loginWithPasswordEmail(){
      cy.contains('div','Login to your account')
        .should('be.visible')
      cy.get('[data-qa="login-password"]').type(userPassword)
      cy.get('[data-qa="login-email"]').type(userEmail)
      cy.get('[data-qa="login-button"]').click()
    }

    newUserSignUp(){
      cy.contains('div','New User Signup!')
        .should('be.visible')
      cy.get('[data-qa="signup-name"]').type(userName)
      cy.get('[data-qa="signup-email"]').type(userEmail)
      cy.get('[data-qa="signup-button"]').click()
    }

    loginAccountIsVissible(){
      cy.contains('div','Login to your account')
        .should('be.visible')
    }

    deleteAccount(){
      cy.contains('Delete Account')
        .click()
      cy.get('[data-qa="account-deleted"]')
        .should('contain', 'Account Deleted!')
      cy.get('[data-qa="continue-button"]')
        .click()
    }



}

export const navigateTo = new webPage()