export class LoginPage {

  loginWithPasswordEmail() {
    cy.contains('div', 'Login to your account')
      .should('be.visible')
    cy.get('[data-qa="login-password"]').type(userPassword)
    cy.get('[data-qa="login-email"]').type(userEmail)
    cy.get('[data-qa="login-button"]').click()
  }

  loginToAccountIsVissible() {
    cy.contains('div', 'Login to your account')
      .should('be.visible')
  }

  loggedAsUser() {
    cy.contains('div', 'Logged in as David')
      .contains('Logged in as David')
  }

  errorMsg() {
    cy.contains('div', 'Login to your account')
      .contains('Your email or password is incorrect!')
  }

  verifyLoginPage() {
    cy.url().should('include', '/login') // => true
    cy.url().should('eq', 'https://automationexercise.com/login')
  }

  creatNewAccount() {
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
    cy.get('[id="city"]').type('Boca City')
    cy.get('[id="zipcode"]').type('33140')

    cy.get('[id="mobile_number"]').type('847-948-9499')
    cy.get('[data-qa="create-account"]').click()

    cy.contains('Account Created!')
      .should('be.visible')
    cy.get('[data-qa="continue-button"]').click()

  }

  logoutFromAccount() {
    cy.contains('Logout')
      .should('be.visible')
  }
}