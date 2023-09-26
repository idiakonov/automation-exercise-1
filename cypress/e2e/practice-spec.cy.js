

    describe('template spec', () => {
      const userName = 'David'
      const userEmail= 'Bowie@gmail.com'
      const messageText = 'In other words, based on the commands and the events happening, Cypress automatically alters its expected timeouts to match web application behavior.'


    it('Test Case 1: Register User', () => {
        cy.visit('https://automationexercise.com/')
      
      cy.contains('Home')
      .parent()
      .find('[style="color: orange;"]')
      .should('have.css', 'color', 'rgb(255, 165, 0)').should('be.visible')

        cy.contains('Signup / Login')
        .click()

        cy.contains('div','New User Signup!')
        .should('be.visible')

        cy.get('[data-qa="signup-name"]').type('David')
        cy.get('[data-qa="signup-email"]').type('Bowie2@gmail.com')
        cy.get('[data-qa="signup-button"]').click()
      
      

          cy.contains('Enter Account Information')
          .should('be.visible')
          cy.get('[data-qa="password"]')
          .type('Pass2023')


          cy.get('[data-qa="days"]').select('2')
          cy.get('[id="months"]').select('9')
          cy.get('[id="years"]').select('1987')

          cy.get('[id="first_name"]').type('David')
          cy.get('[id="last_name"]').type('Bowie')
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
      cy.visit('https://automationexercise.com/')


      cy.contains('Home')
      .parent()
      .find('[style="color: orange;"]')
      .should('have.css', 'color', 'rgb(255, 165, 0)')
      .should('be.visible')

      cy.contains('Signup / Login')
      .click()

      cy.contains('div','Login to your account')
        .should('be.visible')

      cy.get('[data-qa="login-password"]').type('Pass2023')
      cy.get('[data-qa="login-email"]').type('Bowie2@gmail.com')
      cy.get('[data-qa="login-button"]').click()
      

      cy.contains('div','Logged in as David')
      .contains('Logged in as David')


      cy.contains('Delete Account')
        .click()

      cy.get('[data-qa="account-deleted"]')
        .should('contain', 'Account Deleted!')
          
        cy.get('[data-qa="continue-button"]')
        .click()

    })

    it('Test Case 3: Login User with incorrect email and password',()=> {
      cy.visit('https://automationexercise.com/')
      
      cy.contains('Home')
      .parent()
      .find('[style="color: orange;"]')
      .should('have.css', 'color', 'rgb(255, 165, 0)')
      .should('be.visible')

      cy.contains('Signup / Login')
      .click()

      cy.contains('div','Login to your account')
      .should('be.visible')

      cy.get('[data-qa="login-password"]').type('Pass2029')
      cy.get('[data-qa="login-email"]').type('Bow@gmail.com')
      cy.get('[data-qa="login-button"]').click()

      cy.contains('div','Login to your account')
      .contains('Your email or password is incorrect!')
      
    })

    it('Test Case 4: Logout User',()=> {
      cy.visit('https://automationexercise.com/')
      
      cy.contains('Home')
      .parent()
      .find('[style="color: orange;"]')
      .should('have.css', 'color', 'rgb(255, 165, 0)')
      .should('be.visible')

      cy.contains('Signup / Login')
      .click()

      cy.contains('div','Login to your account')
      .should('be.visible')

      cy.get('[data-qa="login-password"]').type('Pass2023')
      cy.get('[data-qa="login-email"]').type('Bowie@gmail.com')
      cy.get('[data-qa="login-button"]').click()

      cy.contains('div','Logged in as David')
      .contains('Logged in as David')

      cy.contains('div','Logout')
      .contains('Logout')
      .click()

      cy.contains('Signup / Login')
      .should('exist')


    })

    it('Test Case 5: Register User with existing email',()=> {
      cy.visit('https://automationexercise.com/')

      cy.contains('Home')
      .parent()
      .find('[style="color: orange;"]')
      .should('have.css', 'color', 'rgb(255, 165, 0)')
      .should('be.visible')


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
      cy.get('[data-qa="signup-email"]').type(`${userEmail}`)

      cy.get('[data-qa="signup-button"]')
      .click()

      cy.contains('div','New User Signup!')
      .should('contain','Email Address already exist!')


    //  })




      
    })

    it('Test Case 6: Contact Us Form', ()=> {
      cy.visit('https://automationexercise.com/')


      cy.contains('Home')
      .parent()
      .find('[style="color: orange;"]')
      // the current CSS definition is expressed in RGB triple string
      .should('have.css', 'color', 'rgb(255, 165, 0)')
      .should('be.visible')



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
      
      cy.contains('Home')
      .parent()
      .find('[style="color: orange;"]')
      .should('have.css', 'color', 'rgb(255, 165, 0)')
      .should('be.visible')


    })

    it('Test Case 7: Verify Test Cases Page',() => {
      cy.visit('https://automationexercise.com/')

      cy.contains('Home')
      .parent()
      .find('[style="color: orange;"]')
      // the current CSS definition is expressed in RGB triple string
      .should('have.css', 'color', 'rgb(255, 165, 0)')
      .should('be.visible')

      cy.contains('Test Cases')
      .click()
      

      cy.contains('h2','Test Cases')
      .should('have.class', 'title')
      cy.url().should('include', '/test_cases') // => true
      cy.url().should('eq', 'https://automationexercise.com/test_cases')
      
      

    })

    })