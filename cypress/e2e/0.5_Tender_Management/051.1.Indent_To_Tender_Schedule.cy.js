/// <reference types="cypress"/>

import Indent_NameCy from "../../Pages/Indent/Indent_Name.cy"
import Indent_UserCy from "../../Pages/Indent/Indent_User.cy"
import Indent_SelectionCy from "../../Pages/Indent/Indent_Selection.cy"

it('Indent', function() {

  cy.visit('http://training.edp.gov.bd/')
  // Change User Name
  Indent_UserCy.indentforArmy.indentUserName()
  // Change Password
  Indent_UserCy.indentPass.indentUserPass()
  
  cy.get('.MuiButton-contained')
  .click()
  cy.wait(3000)

  //cy.get('.inactive > .MuiChip-label')
  cy.get('.active > .MuiChip-label')
  .click()
  cy.wait(200)

  // টেন্ডার ব্যবস্থাপনা
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(8) > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(250)

  // ইন্ডেন্ট থেকে টেন্ডারের সময়সূচী
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-padding > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > [href="/admin/tender-management/indent-to-tender-schedule"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(250)

  // Sidebar-Toggler
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .MuiToolbar-root > .css-12d2mry > .css-1mwz337 > .sidebar-toggler')
  .click()
  cy.wait(250)

})
