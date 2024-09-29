/// <reference types="cypress"/>

import Indent_NameCy from "../../../Pages/Indent/Indent_Name.cy"
import Indent_UserCy from "../../../Pages/Indent/Indent_User.cy"
import Indent_SelectionCy from "../../../Pages/Indent/Indent_Selection.cy"

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

  // ইন্ডেন্ট প্রক্রিয়া
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(7) > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(250)

  // ইন্ডেন্ট
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-padding > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > [href="/admin/indent-process/indent"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(250)

  // Sidebar-Toggler
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .MuiToolbar-root > .css-12d2mry > .css-1mwz337 > .sidebar-toggler')
  .click()
  cy.wait(250)

  // Page
  /*cy.get('.css-iz101f > .MuiList-root > :nth-child(4)')
  .click() 
  cy.wait(3000)*/

  Indent_NameCy.element.indentName()
  cy.wait(250)

  // Search Indent Name
  /*
  cy.get('.css-z2naod > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root')
  .click()
  .type('ইন্ডেন্ট/অটোমেশন/০৭/০৭/২০২৪/০০১-0005')
  cy.wait(250)*/

  // Action
  Indent_SelectionCy.selectIndent.indentSelect()
  cy.wait(2500)
 
  // Main/Major Item
  cy.get('.MuiPaper-root > .MuiList-root > :nth-child(6)')
  .click()
  cy.wait(250)

  // SAMPLE ADD
  cy.get('.MuiTabs-flexContainer > [tabindex="-1"]')
  .click()
  cy.wait(250)

  // MAIN/MAJOR ITEM
  cy.get('#mui-component-select-mainEquipmentId')
  .click()
  cy.wait(250)

  //Select Item
  cy.get('.MuiMenu-list li')
  .eq(2) // Change the index to select a different option
  .click();
  cy.wait(250)

  //Sample Name*
  cy.get('input[name="name"]')
  .type('Sample')
  cy.wait(250)

  //Description
  cy.get('input[name="description"]')
  .type('Description')
  cy.wait(250)

  //Remark
  cy.get('input[name="remark"]')
  .type('Description')
  cy.wait(250)

  //ADD
  cy.get('.css-fa580s > .singleColumnRow > :nth-child(2) > .css-1hsuwvg > .MuiButton-contained')
  .click()
  cy.wait(250)

  //Submit
  cy.get('.css-13olndq > :nth-child(2) > .css-1hsuwvg > .MuiButton-contained')
  .click()
  cy.wait(250)

  //আপনি কি ডাটা সাবমিট করতে নিশ্চিত?
  //হ্যাঁ
  cy.get('.swal2-confirm')
  .click()
  cy.wait(200)

})
