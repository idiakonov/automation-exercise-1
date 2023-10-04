export class accountCreation {

    creatNewAccount(){
      const userName = 'David'
      const userLastName = 'Bowie'
      const userPassword = 'Pass2023'
      
        cy.contains('Enter Account Information')
          .should('be.visible')
          cy.get('[data-qa="password"]')
          .type(userPassword)

          cy.get('[data-qa="days"]').select('2')
          cy.get('[id="months"]').select('9')
          cy.get('[id="years"]').select('1987')

          cy.get('[id="first_name"]').type(userName)
          cy.get('[id="last_name"]').type(userLastName)
          cy.get('[data-qa="company"]').type('Apple')
          cy.get('[id="address1"]').type('Collins Ave')

          cy.get('[data-qa="country"]').select('United States')
          cy.get('[id="state"]').type('FL')
          cy.get ('[id="city"]').type('Boca City')
          cy.get('[id="zipcode"]').type('33140')

          cy.get('[id="mobile_number"]').type('847-948-9499')
          cy.get('[data-qa="create-account"]').click()
      
          cy.contains('Account Created!')
          .should('be.visible')
          cy.get('[data-qa="continue-button"]').click()

      }

      logoutFromAccount(){
        cy.contains('Logout')
        .should('be.visible')
      }
}

export const navigateToCreateAccount = new accountCreation()
