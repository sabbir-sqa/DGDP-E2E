/// <reference types="cypress"/>

it('Bank Checker', function() {
  //cy.visit('http://testing.edp.gov.bd/')
  cy.visit('http://training.edp.gov.bd/')
  //Change User Name
  cy.get('input[name="username"]')
  .type('bank.demo.checker')
  //Change Password
  cy.get('input[name="password"]')
  .type('Sqa@12345')
  cy.wait(200)
  cy.get('.MuiButton-contained')
  .click()
  cy.wait(3000)

  //পেমেন্ট ব্যবস্থাপনা
  //cy.get('#__next > div > nav > div > div > div > ul > div > div:nth-child(1) > ul > div:nth-child(9)')
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(9) > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(200)

  //ব্যাংক পেমেন্ট
  cy.get('.MuiCollapse-wrapperInner > .MuiList-root > a > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(200)

  //Collapsed Sidebar
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .MuiToolbar-root > .css-12d2mry > .css-1mwz337 > .sidebar-toggler')
  .click()
  cy.wait(300)

  //Details
  cy.get(':nth-child(2) > .css-wt5tyy > a > .MuiButtonBase-root')
  .click()
  cy.wait(300)

  //Verified
  cy.get('.buttons-box > .MuiBox-root > .MuiButton-contained')
  .click()
  cy.wait(500)

})