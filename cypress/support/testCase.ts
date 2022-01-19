import { Actions } from "./common/actions";

export interface TestStep {
  name: string;
  steps: () => any[];
}

export class TestCase {
  /**
   * Main method include describe, before and beforeEach hooks
   * @param testCaseName Test case name
   * @param steps Steps to be used (it). Step contains one or more test method
   * @param options Options object
   * @param navigationUrl Initial route
   */

  static resolve(
    testCaseName: string,
    steps: TestStep[],
    options: {
      resolutionX: number;
      resolutionY: number;
    },
    navigationUrl: string
  ): void {

    describe(testCaseName, () => {

      // This is setup for every tets which happens before test steps
      beforeEach(() => {
        cy.viewport(options.resolutionX, options.resolutionY)
        Actions.navigate(navigationUrl)
      });

      // This are conrete test case steps
      steps.forEach((step) => {
        it(step.name, () => {
          step.steps?.();
        });
      });
    });
  };
}