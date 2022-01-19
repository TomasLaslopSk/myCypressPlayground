import { Actions } from "../support/common/actions"
import { ElementActions } from "../support/common/element-actions";
import { ElementAssertions } from "../support/common/element-assertions";
import { Helpers } from "../support/common/get-element";
import { TestCase, TestStep } from "../support/testCase"
import { addTodoPageIds } from "../support/testLocators/add-todo-page-test-locators";

// Test suite [Before Each] setup data

const initialRoute = 'https://todomvc.com/examples/vanillajs/'
const testOptions = {
  resolutionX: 1920,
  resolutionY: 1080,
}

// Handled selectors
let inputFieldElement = Helpers.getClassSelector(addTodoPageIds.newTodoInputField)
let generalListElement = Helpers.getClassSelector(addTodoPageIds.todoListItem)
let firstListElement = Helpers.getElementFromListByIndexSelector(addTodoPageIds.todoListItem, 0)
let firstListElementLabel = Helpers.getChildSelector(addTodoPageIds.todoListItem, addTodoPageIds.todoListItemLabel, 0)
let secondListElementLabel = Helpers.getChildSelector(addTodoPageIds.todoListItem, addTodoPageIds.todoListItemLabel, 1)
let firstListElementToggleButton = Helpers.getChildSelector(addTodoPageIds.todoListItem, addTodoPageIds.toggle, 0)

// Testing data 

let TODO_ITEM_ONE = 'buy some cheese'
let TODO_ITEM_TWO = 'feed the cat'

const tests: Array<TestStep> = [

  /**
  * This is alternative approach where as a argument we can 
  * pass direct resolved element selection, nor Css/Xpath selectors which are handled inside Actions methods
  */

  // Test 1

  {
    name: "Test 1",
    steps: () => [
      ElementActions.enterValueToElement(inputFieldElement, TODO_ITEM_ONE),
      ElementActions.pressEnterInInputElement(inputFieldElement),
      ElementActions.enterValueToElement(inputFieldElement, TODO_ITEM_TWO),
      ElementActions.pressEnterInInputElement(inputFieldElement),
      ElementAssertions.assertElementContainsTextElement(firstListElementLabel, TODO_ITEM_ONE),
      ElementAssertions.assertElementContainsTextElement(secondListElementLabel, TODO_ITEM_TWO),
      ElementAssertions.assertElementsInListCountElement(generalListElement, 2)
    ],
  },

  // Test 2

  {
    name: "Test 2",
    steps: () => [
      ElementActions.enterValueToElement(inputFieldElement, TODO_ITEM_ONE),
      ElementActions.pressEnterInInputElement(inputFieldElement),
      ElementActions.enterValueToElement(inputFieldElement, TODO_ITEM_TWO),
      ElementActions.pressEnterInInputElement(inputFieldElement),
      ElementActions.checkElementInListElement(firstListElementToggleButton),
      ElementAssertions.assertElementHasClass(firstListElement, 'completed', true),
      ElementActions.checkElementInListElement(firstListElementToggleButton, false),
      ElementAssertions.assertElementHasClass(firstListElement, 'completed', false)
    ]
  },

  // Test 3

  {
    name: "Test 3",
    steps: () => [
      ElementActions.enterValueToElement(inputFieldElement, TODO_ITEM_ONE),
      ElementActions.pressEnterInInputElement(inputFieldElement),
      ElementActions.enterValueToElement(inputFieldElement, TODO_ITEM_TWO),
      ElementActions.pressEnterInInputElement(inputFieldElement),
      ElementActions.pressElement(Helpers.getSiblingSelector(TODO_ITEM_ONE, addTodoPageIds.input)),
      ElementAssertions.assertElementHasClass(firstListElement, 'completed', true),
      ElementActions.pressElement(Helpers.getSiblingSelector(TODO_ITEM_ONE, addTodoPageIds.input)),
      ElementAssertions.assertElementHasClass(firstListElement, 'completed', false)
    ]
  }
];

TestCase.resolve("Test Suite 1", tests, testOptions, initialRoute)