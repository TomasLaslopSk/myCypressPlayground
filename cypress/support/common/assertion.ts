export class Assertions {

  static assertElementsInListCount(
    selector: string,
    count: number
  ): void {
    cy.get(selector).should('have.length', count)
  }

  static assertElementContainsText(
    selector: string,
    childSelector: string,
    text: string,
    order = 0
    ): void {
      cy.get(selector)
      .eq(order)
      .find(childSelector)
      .should('contain', text)
    }
}