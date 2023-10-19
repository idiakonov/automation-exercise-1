// <reference types="cypress" />

describe('page header', () => {
    beforeEach('login', () => {
        cy.visit('/')
    })
    const headerLinkUrls = [
		'/',
        '/api_list',
        '/contact_us',
        '/login',
        '/products',
        '/test_cases',
        '/view_cart',
        'https://www.youtube.com/c/AutomationExercise',
    ]
    it.only('should have page links with correct url', () => {
        cy.get('.shop-menu > .nav > li > a').each(($el, index, $list) => {
            cy.wrap($el).invoke('attr', 'href')
			.then((href)=>{
				
				if (!!href.length) {
					expect(headerLinkUrls.includes(href), `link with ${href} should exist`).to.be.true;
				}
			})			
        })
    })
})