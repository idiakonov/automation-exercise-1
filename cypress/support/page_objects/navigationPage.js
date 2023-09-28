export class webPage {

    homePageIsVisible(){
        Cypress.Commands.add('isPageLoaded', (urlPath) => {
            cy.url().should('eq', `https://automationexercise.com/${urlPath}`)
          })


    }
    
    

    

    

    
   


}

export const navigateTo = new webPage()