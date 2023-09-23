/// <reference types="cypress" />
import memberData from '../../fixtures/memberData.json'
import HomePage from '../pageObject/HomePage'

let mbrData = memberData
describe('data test ',()=>{
    it('test fixture file', ()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
        /*cy.get('h4.card-title').each(($el,index,$list)=>{
            if($el.text().includes('Blackberry')){
                cy.get('button.btn.btn-info').eq(index).click()
            }
        })*/
        mbrData.productName.forEach((product) => {
            cy.selectProduct(product)
            
        });
        





    })
})