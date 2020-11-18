/// <reference types="cypress" />
// Include the above line in Cypress tests if you want code completion from Cypress globals in VS Code 
/**
 * A solid test generally covers 3 phases:
 *   1. Set up the application state.
 *   2. Take an action.
 *   3. Make an assertion about the resulting application state.
 * 
 * https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Write-your-first-test
**/

describe('cypress is running', () => {
  it('should pass a test', () => {
    expect(true).to.be(true)
  })
})