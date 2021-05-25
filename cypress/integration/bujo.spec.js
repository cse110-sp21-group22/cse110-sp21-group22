/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/source/login.html')
    cy.wait(1000)
  })

  // https://on.cypress.io/interacting-with-elements

  it('Can log in with confirmed account', () => {  
    cy.get('#email')
      .type('test@test.com', { delay: 100 })
      .should('have.value', 'test@test.com')

    cy.get('#password')
      .type('password', { delay: 100 })
      .should('have.value', 'password')

    cy.get('#login-form').submit()
    
    cy.get('h6')
      .should('contain', 'How are you feeling?')

    cy.get('#nav-calendar').click()
    cy.get('h1')
      .should('contain', 'Calendar')

    cy.get('#nav-mood').click()
    cy.get('h1')
      .should('contain', 'Mood Tracker')

    cy.get('#nav-settings').click()

    cy.get('.btn-danger').click()
  });
})
