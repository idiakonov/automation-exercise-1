
/// <reference types="cypress" />

import { accountCreation, navigateToCreateAccount } from "../support/page_objects/accountCreation"
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
      navigateToSignUp.newUserSignUp()
      navigateToCreateAccount.creatNewAccount()
      navigateToCreateAccount.logoutFromAccount()
      navigateToCreateAccount.deleteAccount()
          
    })
      
    it('Test Case 2: Login User with correct email and password',() => {
      navigateTo.homePageIsVisible()
      navigateToCreateAccount.logoutFromAccount()
      navigateToLogin.loginWithPasswordEmail()
      navigateToLogin.loggedAsUser()
      navigateTo.deleteAccount()
      

    })

    it('Test Case 3: Login User with incorrect email and password',()=> {
      navigateTo.homePageIsVisible()
      navigateToSignUp.clickOnSignUpLogin()
      navigateToLogin.loginToAccountIsVissible
      navigateToLogin.loginWithPasswordEmail()
      navigateToLogin.errorMsg()
      
    })

    it('Test Case 4: Logout User',()=> {
      navigateTo.homePageIsVisible()
      navigateToSignUp.clickOnSignUpLogin()
      navigateToLogin.loginToAccountIsVissible()
      navigateToLogin.loginWithPasswordEmail()
      navigateToLogin.loggedAsUser()
      navigateToCreateAccount.logoutFromAccount()
      navigateToSignUp.signupLoginExist()
      
    })

    it('Test Case 5: Register User with existing email',()=> {
      navigateTo.homePageIsVisible()
      navigateToSignUp.clickOnSignUpLogin()
      navigateToSignUp.userSignupIsVisible()
      navigateToSignUp.newUserSignUp()
      navigateToSignUp.errorEmailExist()
            
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