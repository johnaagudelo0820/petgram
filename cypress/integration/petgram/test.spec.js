/* eslint-disable no-undef */

describe('Petgram', function () {
  it('pare ver si la pagina funciona', () => {
    cy.visit('/')
  })

  it('vanegamos a una categoria y vemos foto', () => {
    cy.visit('/pet/1')
    cy.get('article')
    cy.visit('/pet/2')
    cy.get('article')
    cy.visit('/pet/5')
    cy.get('article')
  })

  it('podemos navegar con la navbar ala home', () => {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('be', '/')
  })

  it('podemos navegar con la navbar login', () => {
    cy.visit('/pet/1')
    cy.get('nav a').last().click()
    cy.url().should('include', '/login')
  })

  it('formularios de login', () => {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
