/// <reference types="cypress"/>

describe('Drag test suite', function(){
    it('Drag test 1', function(){
        cy.visit("http://the-internet.herokuapp.com/drag_and_drop")
        cy.get('#column-a').drag('#column-b')
    })
})