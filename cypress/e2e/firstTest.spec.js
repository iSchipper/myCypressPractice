/// <reference types="cypress" />

describe('First test suite', () => {
    it('First test', () => {
        // Theory
        // by two attributes
        // cy.get('[attr1][attr2]')

        // get() - finds elements on the page by locator globally
        // find() - finds a child element by locator
        // contains() - finds HTML text by text and locator

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.contains('[status="warning"]', 'Sign in')
        cy.contains('nb-card', 'Horizontal form').find('button')
        cy.contains('nb-card', 'Horizontal form').contains('Sign in')

        // chining locators in cypress
        // find a form and verify 'Sign in' button is clickable AND click on a checkbox
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()
    })

    it.only('Save subject of the command', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid')
            .find('[for="inputEmail1"]')
            .should('contain', 'Email')

        cy.contains('nb-card', 'Using the Grid')
            .find('[for="inputPassword2"]')
            .should('contain', 'Password')

        // Can't do like this
        // const usingTheGrid = cy.contains('nb-card', 'Using the Grid')
        // usingThegrid.find('[for="inputEmail1"]').should('contain', 'Email')

        // Approach #1 - cypress alias
        cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
        cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')

        // Approach #2 - cypress then() method
        cy.contains('nb-card', 'Using the Grid').then(usingTheGridForm => {
            cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain', 'Email')
            cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('contain', 'Password')
        })
    })
})