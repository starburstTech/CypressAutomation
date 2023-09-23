/// <reference types="cypress" />
import memberData from '../../fixtures/memberData.json'
import HomePage from '../pageObject/HomePage'

let mbrData = memberData

describe('HomePage ',()=>{
    it('test Home Page Properties', ()=>{
        const hp = new HomePage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        hp.getEditBox().type(mbrData.name)
        hp.getEditBox2().type(mbrData.email)
        hp.getEditBox3().type(mbrData.password)

        hp.getGender().select(mbrData.gender)
        hp.getTwoWayDataBinding().should('have.value',mbrData.name)
        
        hp.getEnterpreneur().should('be.disabled')
        //hp.getShopTab().click()

        // mbrData.productName.forEach((product) => {
        //     cy.selectProduct(product)
            
        // });
        





    })
})