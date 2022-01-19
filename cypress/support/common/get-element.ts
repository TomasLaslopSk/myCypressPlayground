export class Helpers {

  static getIdSelector(selector: string | number) {
    return cy.get(`[data-test-id=${selector}]`)
  }

  static getClassSelector(selector: string) {
    return cy.get(selector)
  }

  static getContextSelector(selector: string, context: string, elementType: string) {
    return cy.get(context).contains("label", selector).siblings(elementType)
  }

  static getSiblingSelector(selector: string, elementType: string) {
    return cy.contains("label", selector).siblings(elementType)
  }

  static getChildSelector(selector: string, childSelector:string, order: number) {
    return cy.get(selector).eq(order).find(childSelector)
  }

  static getElementFromListByIndexSelector(selector: string, order: number) {
    return cy.get(selector).eq(order)
  }
}