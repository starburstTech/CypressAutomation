/// <reference types="cypress" />

describe('UI Regression for GREENCART ',()=>{
    it('homePage test case', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        //dynamic dropDown handling
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el,inbox,$list)=>{
            if($el.text()==="India"){
                cy.wrap($el).click()
            }
        })
        //handling alert
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.be.eq('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str)=>{
            expect(str).to.be.eq('Hello , Are you sure you want to confirm?')
        })


    })
})