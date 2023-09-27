

import { navigateTo } from "../support/page_objects/navigationPage"


    describe('template spec', () => {
        beforeEach('login', () => {
        cy.visit('https://automationexercise.com/')
        })
      const userName = 'David'
      const userLastName = 'Bowie'
      const userEmail = 'Bowie@gmail.com'
      const userPassword = 'Pass2023'
      const messageText = 'In other words, based on the commands and the events happening, Cypress automatically alters its expected timeouts to match web application behavior.'

    
    it('Test Case 1: Register User', () => {
  
      navigateTo.homePageIsVisible()

      cy.url().should('include', '/https://automationexercise.com/') // => true
      cy.url().should('eq', 'https://automationexercise.com/')
    
        cy.contains('Signup / Login')
        .click()

        navigateTo.newUserSignUp()
        
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

          cy.contains('Logout')
          .should('be.visible')

          //Delete account 
          // cy.contains('Delete Account')
          // .click()

          // cy.get('[data-qa="account-deleted"]')
          // .should('contain', 'Account Deleted!')

          // cy.get('[data-qa="continue-button"]')
          // .click()
    })
      
    it('Test Case 2: Login User with correct email and password',() => {
    
      navigateTo.homePageIsVisible()

      cy.contains('Signup / Login')
      .click()

      navigateTo.loginWithPasswordEmail()
    
      cy.contains('div','Logged in as David')
      .contains('Logged in as David')


      navigateTo.deleteAccount()
      

    })

    it('Test Case 3: Login User with incorrect email and password',()=> {
      //cy.visit('https://automationexercise.com/')
      
      navigateTo.homePageIsVisible()

      cy.contains('Signup / Login')
      .click()

      cy.contains('div','Login to your account')
      .should('be.visible')

      cy.get('[data-qa="login-password"]').type(userPassword)
      cy.get('[data-qa="login-email"]').type(userEmail)
      cy.get('[data-qa="login-button"]').click()

      cy.contains('div','Login to your account')
      .contains('Your email or password is incorrect!')
      
    })

    it('Test Case 4: Logout User',()=> {
      
      navigateTo.homePageIsVisible()

      cy.contains('Signup / Login')
      .click()

      cy.contains('div','Login to your account')
      .should('be.visible')

      cy.get('[data-qa="login-password"]').type(userPassword)
      cy.get('[data-qa="login-email"]').type(userEmail)
      cy.get('[data-qa="login-button"]').click()

      cy.contains('div','Logged in as David')
      .contains('Logged in as David')

      cy.contains('div','Logout')
      .contains('Logout')
      .click()

      cy.contains('Signup / Login')
      .should('exist')


    })

    it.only('Test Case 5: Register User with existing email',()=> {
      
      navigateTo.homePageIsVisible()

      cy.contains('Signup / Login')
      .parent()
      .find('.fa')
      .click()

    cy.contains('div', 'New User Signup!')
    .should('be.visible')

    //  cy.contains('div','New User Signup!')  //by attribute name and value 
    //  .then(signupForm => {
    //   const nameLabelFirst = signupForm.find('[placeholder="Name"]').text()
    //   const emailLabelFirst = signupForm.find('[placeholder="Email Address"]').text()
    //   //expect(nameLabelFirst).to.equal('name')
      
    //   cy.wrap(signupForm).find('[placeholder="Name"]')
    //   cy.wrap(signupForm).find('[placeholder="Email Address"]')

      
      cy.get('[data-qa="signup-name"]').type(userName)
      cy.get('[data-qa="signup-email"]').type(userEmail)

      cy.get('[data-qa="signup-button"]')
      .click()

      cy.contains('div','New User Signup!')
      .should('contain','Email Address already exist!')


    //  })




      
    })

    it('Test Case 6: Contact Us Form', ()=> {
    
      navigateTo.homePageIsVisible()


      cy.contains('Contact us')
      .click()

      cy.contains('div', 'Get In Touch')
      .should('contain','Get In Touch')
    
      cy.get('[data-qa="name"]').type(userName)
      cy.get('[data-qa="email"]').type(userEmail)
      cy.get('[data-qa="subject"]').type('Auto Test')
      cy.get('[data-qa="message"]').type(messageText)

      cy.get('[name="upload_file"]')
      .selectFile('cypress/fixtures/data.json')

      cy.get('[data-qa="submit-button"]').click()

      cy.contains('div', 'Get In Touch')
      .should('contain','Success! Your details have been submitted successfully.') 

      cy.contains('div', 'Get In Touch')
      .find('.fa')
      .click()
      
      navigateTo.homePageIsVisible()


    })

    it.only('Test Case 7: Verify Test Cases Page',() => {
      
      navigateTo.homePageIsVisible()

      cy.contains('Test Cases')
      .click()
      

      cy.contains('h2','Test Cases')
      .should('have.class', 'title')
      cy.url().should('include', '/test_cases') // => true
      cy.url().should('eq', 'https://automationexercise.com/test_cases')
      
     
    })

    })


    //this method can be reused for any page
    pageIsLoaded = function(pageRoute: string) {//pageRoute will be login  or products...
    //logic goes here
}