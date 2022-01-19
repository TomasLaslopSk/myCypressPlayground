export class Actions {

  static navigate(
    url: string,
  ): void {
    cy.visit(url);
  }

  static enterValue(
    selector: string,
    value: string,
  ): void {
    cy.get(selector).as("input")
    cy.get("@input").clear()
    cy.get("@input").type(value)
  }

  static press(
    selector: string
  ): void {
    cy.get(selector).as("button")
    cy.get("@button").click()
  }

  static pressEnterInInput(selector: string) {
    cy.get(selector).type('{enter}')
  }

  /**
   * This element must be an <input> with type checkbox or radio.
  */
  static checkElementInList(
    selector: string,
    childSelector: string,
    order = 0,
    check: boolean = true
    ): void {
      const desiredElement = cy
      .get(selector)
      .eq(order)
      .find(childSelector)

      if (check) {
        desiredElement.check()
      } else {
        desiredElement.uncheck()
      }
    }

}