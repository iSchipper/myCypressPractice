/// <reference types="cypress" />

it.only('Extract text values', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    // 1
    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

    // 2
    cy.get('[for="exampleInputEmail1"]').then(label => {
        const labelText = label.text()
        expect(labelText).to.equal('Email address')
    })
    // 3
    cy.contains('nb-card', 'Basic form')
        .find('[for="exampleInputEmail1"]')
        .should('contain', 'Email address')

    cy.get('label[for="exampleInputEmail1"]').invoke('text').then(text => {
        expect(text).to.equal('Email address')
    })

    cy.get('[for="exampleInputEmail1"]').invoke('text').as('labelText').should('contain', 'Email address')


    // 4
    cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then(classValue => {
        expect(classValue).to.equal('label')
    })

    // 5 invoke HTML property
    cy.get('#exampleInputEmail1').type('test@gmail.com')
    cy.get('#exampleInputEmail1').invoke('prop', 'value')
        .should('contain', 'test@gmail.com')
        .then(property => {
            expect(property).to.be.equal('test@gmail.com')
        })
    })