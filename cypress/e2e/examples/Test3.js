/// <reference types="cypress" />
import memberData from '../../fixtures/memberData.json'

let mbrData = memberData
describe('data test ',()=>{
    it('test fixture file', ()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        mbrData.general.forEach((member)=>{
            cy.get("form div input[name='name']").type(member.name)
            cy.get("form div input[name='email']").type(member.email)
            cy.get('input#exampleInputPassword1').type(member.password)
            cy.get('select').select(member.gender)


        })




    })
})