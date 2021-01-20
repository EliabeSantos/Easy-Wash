context("Login Page", ()=>{
  it('logs in with faild credentials',()=>{
    cy.viewport(1440,900)
    cy.visit('http://localhost:3000/login')

    cy.contains('Email')
    cy.contains('Senha')
    cy.contains('Entrar')
    cy.get('.sc-kstrdz > .MuiButtonBase-root').contains('Entrar')

    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('carro@homail.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('1234')
    cy.get('.sc-kstrdz > .MuiButtonBase-root > .MuiButton-label').click();
    cy.contains('Senha ou usuário inválido')
  })
})