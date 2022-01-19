export class ElementAssertions {

  static assertElementsInListCountElement(
    selector: Cypress.Chainable<JQuery<HTMLElement>>,
    count: number
  ): void {
    selector.should('have.length', count)
  }

  static assertElementContainsTextElement(
    selector: Cypress.Chainable<JQuery<HTMLElement>>,
    text: string
    ): void {
      selector.should('contain', text)
    }

  static assertElementExist(selector: Cypress.Chainable<JQuery<HTMLElement>>): void {
    selector.should('be.visible')
  }

  static assertElementHasClass(selector: Cypress.Chainable<JQuery<HTMLElement>>, expectedClass: string, expect: boolean): void {
    if (expect) {
      selector.should('have.class', expectedClass)
    } else {
      selector.should('not.have.class', expectedClass) 
    }
  }

}