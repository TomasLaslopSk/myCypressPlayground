import { Actions } from "../support/common/actions"
import { Assertions } from "../support/common/assertion";
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

  // Test 1

  {
    name: "Test 1",
    steps: () => [
      Actions.enterValue(addTodoPageIds.newTodoInputField, TODO_ITEM_ONE),
      Actions.pressEnterInInput(addTodoPageIds.newTodoInputField),
      Actions.enterValue(addTodoPageIds.newTodoInputField, TODO_ITEM_TWO),
      Actions.pressEnterInInput(addTodoPageIds.newTodoInputField),
      Assertions.assertElementContainsText(addTodoPageIds.todoListItem, addTodoPageIds.todoListItemLabel, TODO_ITEM_ONE, 0),
      Assertions.assertElementContainsText(addTodoPageIds.todoListItem, addTodoPageIds.todoListItemLabel, TODO_ITEM_TWO, 1),
      Assertions.assertElementsInListCount(addTodoPageIds.todoListItem, 2)
    ],
  },

  // Test 2

  {
    name: "Test 2",
    steps: () => [
      Actions.enterValue(addTodoPageIds.newTodoInputField, TODO_ITEM_ONE),
      Actions.pressEnterInInput(addTodoPageIds.newTodoInputField),
      Actions.enterValue(addTodoPageIds.newTodoInputField, TODO_ITEM_TWO),
      Actions.pressEnterInInput(addTodoPageIds.newTodoInputField),
      Actions.checkElementInList(addTodoPageIds.todoListItem, addTodoPageIds.toggle, 0)
    ]
  }

];

TestCase.resolve("Test Suite 1", tests, testOptions, initialRoute)