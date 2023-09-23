class homePage
{
    getEditBox(){
        return cy.get("form div input[name='name']");
        
    }
    getEditBox2(){
        
        return cy.get("form div input[name='email']")
    }
    getEditBox3(){
        
        return cy.get('input#exampleInputPassword1')
    }
    getTwoWayDataBinding(){
        return cy.get("h4 input.ng-untouched")
    }
    getGender(){
        return cy.get("select")
    }
    getEnterpreneur(){
        return cy.get("#inlineRadio3")
    }
    getShopTab(){
        return cy.get(":nth-child(2) > .nav-link")
    }

}
export default homePage;
