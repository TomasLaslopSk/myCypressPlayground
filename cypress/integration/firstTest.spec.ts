
it('Test1', function() {
  cy.visit('https://todomvc.com/examples/vanillajs/')
  cy.get('.new-todo').type('Todo 1{enter}')
  cy.get('.new-todo').type('Todo 2{enter}')
})