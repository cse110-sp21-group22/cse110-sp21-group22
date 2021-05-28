/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    // Change for actual testing
    cy.visit('')
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
    cy.wait(5000)
    
    cy.get('h6')
      .should('contain', 'How are you feeling?')

    cy.get('#nav-calendar').click()
    cy.wait(1000)
    cy.get('h1')
      .should('contain', 'Calendar')

    cy.get('#nav-mood').click()
    cy.wait(1000)
    cy.get('h1')
      .should('contain', 'Mood Tracker')

    cy.get('#nav-settings').click()
    cy.wait(1000)
    cy.get('.btn-danger').click()
  });

  it('Test mood tracker', () => {  
    cy.get('#email')
      .type('test@test.com')
    cy.get('#password')
      .type('password')
    cy.get('#login-form').submit()
    cy.wait(2000)
    
    cy.get('#neutral').click()

    cy.get('#nav-mood').click()
    cy.wait(1000)
    cy.get('h1')
      .should('contain', 'Mood Tracker')
    cy.get('[data-cy=current-date]', { timeout: 10000 })
      .should('have.attr', 'style', 'background-color:yellow');
    cy.get('#very-happy').click()
    cy.get('[data-cy=current-date]')
      .should('have.attr', 'style', 'background-color:green');
    cy.get('#nav-settings').click();
    cy.wait(1000)
    cy.get('#nav-mood').click();
    cy.wait(1000)
    cy.get('[data-cy=current-date]')
    .should('have.attr', 'style', 'background-color:green');

    cy.get('#nav-settings').click()
    cy.wait(1000)
    cy.get('.btn-danger').click()
  });

  it('Test rose and thorn', () => {  
    cy.get('#email')
      .type('test@test.com')
    cy.get('#password')
      .type('password')
    cy.get('#login-form').submit()

    cy.wait(2000)
    
    cy.get('#rose')
      .dblclick()
      .click()
      .type('test');
    cy.get('#thorn')
      .dblclick()
      .click()
      .type('test2');
    cy.get('#nav-settings').click()
    cy.wait(1000)
    cy.get('.navbar-brand').click()
    cy.wait(1000)
    cy.get('#rose')
      .should('contain', 'test')
    cy.get('#thorn')
      .should('contain', 'test2')
    
    cy.get('#nav-settings').click()
    cy.wait(1000)
    cy.get('.btn-danger').click()
  });
})
