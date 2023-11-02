// <reference types="cypress" />

import { HeaderPage } from "../support/components/header";

describe('page header', () => {

    const header = new HeaderPage();
    it.only('get SIGN IN link', () => {
        cy.visit('https://www.bomninchevrolet.com')
        header.getToolsLinks().each(($el, index, $list) => {
           const signIn = cy.wrap($el).get('a > span').contains('Sign In', { matchCase: false });
           
          
        })
    })
})