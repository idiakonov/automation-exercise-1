// <reference types="cypress" />

export class HeaderPage {
    headerLinkUrls = [
		'/',
        '/api_list',
        '/contact_us',
        '/login',
        '/products',
        '/test_cases',
        '/view_cart',
        'https://www.youtube.com/c/AutomationExercise',
    ]; 

    getNavLinks = ()=> {
        return cy.get('.shop-menu > .nav > li > a > span');
    }

    getToolsLinks = () => {
        return cy.get('.navigation-menu.logged-out > ul[class="tools"] > li');
    }

    getNavigationLinks = () => {
        return cy.get('.navigation'); 
    }
}