/// <reference types="cypress"/>

import Indent_NameCy from "../../../../Pages/Indent/Indent_Name.cy"
import Indent_UserCy from "../../../../Pages/Indent/Indent_User.cy"
import Indent_SelectionCy from "../../../../Pages/Indent/Indent_Selection.cy"

it('Group One - SSM', function() {

  cy.visit('http://training.edp.gov.bd/')
  //Change User Name
  Indent_UserCy.indentforArmy.indentUserName()
  //Change Password
  Indent_UserCy.indentPass.indentUserPass()
  
  cy.get('.MuiButton-contained')
  .click()
  cy.wait(9000)

  //cy.get('.inactive > .MuiChip-label')
  cy.get('.active > .MuiChip-label')
  .click()
  cy.wait(200)

  //ইন্ডেন্ট প্রক্রিয়া
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(7) > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(2500)

  //ইন্ডেন্ট
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-padding > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > [href="/admin/indent-process/indent"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(250)

  //Sidebar-Toggler
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .MuiToolbar-root > .css-12d2mry > .css-1mwz337 > .sidebar-toggler')
  .click()
  cy.wait(250)

  //Page
  /*cy.get('.css-iz101f > .MuiList-root > :nth-child(4)')
  .click() 
  cy.wait(3000)*/

  Indent_NameCy.element.indentName()

  //Search Indent Name
  /*
  cy.get('.css-z2naod > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root')
  .click()
  .type('ইন্ডেন্ট/অটোমেশন/০৭/০৭/২০২৪/০০১-0005')
  cy.wait(250)*/

  //Action
  Indent_SelectionCy.selectIndent.indentSelect()
  cy.wait(2500)
  
  //SST/SSM & Others
  cy.get('.MuiPaper-root > .MuiList-root > :nth-child(5)')
  .click()
  cy.wait(250)
  
  //Select Item*
  cy.get('#mui-component-select-itemId')
  .click()

  // Step 3: Select the option based on its index (e.g., the second item)
  cy.get('.MuiMenu-list li')
  .eq(1) // Change the index to select a different option
  .click();

  //পরবর্তী
  cy.get('.submitRow > :nth-child(2) > .MuiButtonBase-root')
  .click()
  cy.wait(250)

  //পরবর্তী
  cy.get('.submitRow > :nth-child(2) > .MuiButtonBase-root')
  .click()
  cy.wait(250)

  // Click Edit Button
  cy.get('.MuiButton-containedWarning')
  .click()
  cy.wait(250)

  // Click Add More Button
  cy.get('.css-gg4vpm > .MuiButton-containedPrimary')
  .click()
  cy.wait(250)

  // Select Group Type
  cy.get('.MuiSelect-select')
  .click()
  cy.wait(200)

  // Add Group
  cy.get('.MuiMenu-list li')
  .eq(4) // Change the index to select a different option
  .click();

  //Update
  cy.get('.MuiButton-containedSuccess')
  .click()
  cy.wait(250)

  //আপনি কি ডাটা সাবমিট করতে নিশ্চিত?
  //হ্যাঁ
  cy.get('.swal2-confirm')
  .click()
  cy.wait(200)

  //পরবর্তী
  cy.get(':nth-child(2) > .MuiButton-containedPrimary')
  .click()
  cy.wait(250)

  //Group Four
  cy.get('.css-1wyoukr > :nth-child(1) > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > :nth-child(4)')
  .click()
  cy.wait(250)

  //Item*

  //1. Name *
  cy.get('input[name="nomenclature"]')
  .type('BBCCDDEE')
  cy.wait(250)

  //2. Description
  cy.get('#simple-tabpanel-ADDITIONAL_1 > div > div > div.MuiBox-root.css-1tx28v3 > div > div > div:nth-child(3) > div > div.jodit-react-container > div > div.jodit-workplace')
  .type('BBCCDDEE FFGGHHII JJKKLLMM')
  cy.wait(250)

  //3. Remarks *
  cy.get('#simple-tabpanel-ADDITIONAL_1 > div > div > div.MuiBox-root.css-1tx28v3 > div > div > div:nth-child(4) > div > div.MuiBox-root.css-79elbk > div')
  .type('BBCCDDEE FFGGHHII JJKKLLMM NNOOPPQQ')
  cy.wait(250)

  //যোগ করুন
  cy.get('.css-1hsuwvg > .MuiButton-contained')
  .click()
  cy.wait(500)

  //আপনি কি ডাটা সাবমিট করতে নিশ্চিত?
  //হ্যাঁ
  cy.get('.swal2-confirm')
  .click()
  cy.wait(200)

})