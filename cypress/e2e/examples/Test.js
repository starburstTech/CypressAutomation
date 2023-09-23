/// <reference types="cypress" />

describe('UI Regression for GREENCART ',()=>{
    it('homePage test case', ()=>{
        //find the length of visible product when typing 'ca' and select the 2nd product

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').should('have.length',4)
        //cy.get('.products').find('.product').eq(2).contains("ADD TO CART").click()
        cy.get('.products').find('.product').each(($el,index,$list)=>{
           let prdName = $el.find('h4.product-name').text()
           if(prdName.includes("Cashews")){
            cy.wrap($el).find("button").click()
           }
        })
        cy.get('.brand').then((brandLogo)=>{
            cy.log(brandLogo.text())

        })

        
    })
})