export class SignUp {
	newUserSignUp() {
		const userName = 'David'
		const userEmail = 'Bowie@gmail.com'

		cy.contains('div', 'New User Signup!')
			.should('be.visible')
		cy.get('[data-qa="signup-name"]').type(userName)
		cy.get('[data-qa="signup-email"]').type(userEmail)
		cy.get('[data-qa="signup-button"]').click()
	}

	signupLoginExist() {
		cy.contains('Signup / Login')
			.click()
			.should('exist')
	}

	userSignupIsVisible() {
		cy.contains('div', 'New User Signup!')
			.should('be.visible')
	}

	errorEmailExist() {
		cy.contains('div', 'New User Signup!')
			.should('contain', 'Email Address already exist!')
	}
}