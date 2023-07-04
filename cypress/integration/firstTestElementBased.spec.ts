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
      ElementActions.enterValueToElement(Helpers.getClassSelector(addTodoPageIds.newTodoInputField), TODO_ITEM_ONE),
      ElementActions.pressEnterInInputElement(Helpers.getClassSelector(addTodoPageIds.newTodoInputField)),
      ElementActions.enterValueToElement(Helpers.getClassSelector(addTodoPageIds.newTodoInputField), TODO_ITEM_TWO),
      ElementActions.pressEnterInInputElement(Helpers.getClassSelector(addTodoPageIds.newTodoInputField)),
      ElementAssertions.assertElementContainsTextElement(Helpers.getElementFromListByIndexSelector(addTodoPageIds.todoListItem, 0), TODO_ITEM_ONE),
      ElementAssertions.assertElementContainsTextElement(Helpers.getChildSelector(addTodoPageIds.todoListItem, addTodoPageIds.todoListItemLabel, 1), TODO_ITEM_TWO),
      ElementAssertions.assertElementsInListCountElement(Helpers.getClassSelector(addTodoPageIds.todoListItem), 2)
    ],
  },

  // Test 2

  {
    name: "Test 2",
    steps: () => [
      ElementActions.enterValueToElement(Helpers.getClassSelector(addTodoPageIds.newTodoInputField), TODO_ITEM_ONE),
      ElementActions.pressEnterInInputElement(Helpers.getClassSelector(addTodoPageIds.newTodoInputField)),
      ElementActions.enterValueToElement(Helpers.getClassSelector(addTodoPageIds.newTodoInputField), TODO_ITEM_TWO),
      ElementActions.pressEnterInInputElement(Helpers.getClassSelector(addTodoPageIds.newTodoInputField)),
      ElementActions.checkElementInListElement(Helpers.getChildSelector(addTodoPageIds.todoListItem, addTodoPageIds.toggle, 0)),
      ElementAssertions.assertElementHasClass(Helpers.getElementFromListByIndexSelector(addTodoPageIds.todoListItem, 0), 'completed', true),
      ElementActions.checkElementInListElement(Helpers.getChildSelector(addTodoPageIds.todoListItem, addTodoPageIds.toggle, 0), false),
      ElementAssertions.assertElementHasClass(Helpers.getElementFromListByIndexSelector(addTodoPageIds.todoListItem, 0), 'completed', false)
    ]
  },

  // Test 3

  {
    name: "Test 3",
    steps: () => [
      ElementActions.enterValueToElement(Helpers.getClassSelector(addTodoPageIds.newTodoInputField), TODO_ITEM_ONE),
      ElementActions.pressEnterInInputElement(Helpers.getClassSelector(addTodoPageIds.newTodoInputField)),
      ElementActions.enterValueToElement(Helpers.getClassSelector(addTodoPageIds.newTodoInputField), TODO_ITEM_TWO),
      ElementActions.pressEnterInInputElement(Helpers.getClassSelector(addTodoPageIds.newTodoInputField)),
      ElementActions.pressElement(Helpers.getSiblingSelector(TODO_ITEM_ONE, addTodoPageIds.input)),
      ElementAssertions.assertElementHasClass(Helpers.getElementFromListByIndexSelector(addTodoPageIds.todoListItem, 0), 'completed', true),
      ElementActions.pressElement(Helpers.getSiblingSelector(TODO_ITEM_ONE, addTodoPageIds.input)),
      ElementAssertions.assertElementHasClass(Helpers.getElementFromListByIndexSelector(addTodoPageIds.todoListItem, 0), 'completed', false)
    ]
  }
];

TestCase.resolve("Test Suite 1", tests, testOptions, initialRoute)