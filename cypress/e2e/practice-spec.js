
/// <reference types="cypress" />

import { navigateToCreateAccount } from "../support/page_objects/accountCreation"
import { navigateToLogin } from "../support/page_objects/loginPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { navigateToSignUp } from "../support/page_objects/signUpPage"


    describe('template spec', () => {
        beforeEach('login', () => {
        cy.visit('https://automationexercise.com/')
        })
      const userName = 'David'
      const userLastName = 'Bowie'
      const userEmail = 'Bowie@gmail.com'
      const userPassword = 'Pass2023'
      const messageText = 'In other words, based on the commands and the events happening, Cypress automatically alters its expected timeouts to match web application behavior.'

    
    it.only('Test Case 1: Register User', () => {
  
      navigateTo.homePageIsVisible()

      // cy.url().should('include', '/https://automationexercise.com/') // => true
      // cy.url().should('eq', 'https://automationexercise.com/')
    
      //   cy.contains('Signup / Login')
      //   .click()

        navigateToSignUp.newUserSignUp()
        
        navigateToCreateAccount.creatNewAccount()
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

      navigateToLogin.loginWithPasswordEmail()
    
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
      navigateToLogin.loginWithPasswordEmail()
      
      cy.contains('div','Login to your account')
      .contains('Your email or password is incorrect!')
      
    })

    it('Test Case 4: Logout User',()=> {
      
      navigateTo.homePageIsVisible()

      cy.contains('Signup / Login')
      .click()

      cy.contains('div','Login to your account')
      .should('be.visible')

      navigateToLogin.loginWithPasswordEmail()

      cy.contains('div','Logged in as David')
      .contains('Logged in as David')

      cy.contains('div','Logout')
      .contains('Logout')
      .click()

      cy.contains('Signup / Login')
      .should('exist')


    })

    it('Test Case 5: Register User with existing email',()=> {
      
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