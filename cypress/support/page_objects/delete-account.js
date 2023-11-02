export class deleteAccount{

    deleteAccount(){
        cy.contains('Delete Account')
          .click()
        cy.get('[data-qa="account-deleted"]')
          .should('contain', 'Account Deleted!')
        cy.get('[data-qa="continue-button"]')
          .click()
      }

      




}

export const navigateToDeleteAccount = new deleteAccount()
