/// <reference types="cypress"/>

it('Bank Maker', function() {
  //cy.visit('http://testing.edp.gov.bd/')
  cy.visit('http://training.edp.gov.bd/')
  //Change User Name
  cy.get('input[name="username"]')
  .type('bank.demo.maker')
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

  //পেমেন্ট আইডি
  cy.get('#simple-tabpanel-0 > div > div > div.MuiBox-root.css-t52if6 > div > div.MuiBox-root.css-fa580s > div.MuiBox-root.css-1klg879 > form > div.MuiBox-root.css-70qvj9 > div.MuiBox-root.css-bgqwnl > div.MuiBox-root.css-79elbk > div > div')
  .type('372A117DE5')
  cy.wait(200)

  //Search button
  cy.get('.css-1ykqpqj > .submit-row > .submitBtnBox > .MuiButton-contained')
  .click()
  cy.wait(200)

  //কোম্পানির নাম
  //অর্থপ্রদানের উদ্দেশ্য*
  //পরিমাণ
  //পেমেন্ট মোড*
  cy.get('#mui-component-select-bankPaymentModeId')
  .click()
  cy.wait(300)
  cy.contains('li.MuiMenuItem-root', 'Account to Account')
  .click()

  //ব্যাংক লেনদেন আইডি (যদি থাকে)
  cy.get('#simple-tabpanel-0 > div > div > div.MuiBox-root.css-t52if6 > div > div.MuiBox-root.css-fa580s > div.MuiBox-root.css-13g0i8l > div > form > div > div:nth-child(3) > div > div.MuiBox-root.css-79elbk > div > div')
  .click()
  .type('19685743214500665')
  cy.wait(300)

  //বর্ণনা
  cy.get('#simple-tabpanel-0 > div > div > div.MuiBox-root.css-t52if6 > div > div.MuiBox-root.css-fa580s > div.MuiBox-root.css-13g0i8l > div > form > div > div:nth-child(4) > div > div.MuiBox-root.css-79elbk > div')
  .click()
  .type('Payment complete')
  cy.wait(300)

  //File Name:
  cy.get('input[name="additionalAttachments.0.fileMetaName"]')
  .type('Bank Documents')
  cy.wait(300)

  //Attachment
  cy.get('.addFileBox')
  .selectFile('cypress/fixtures/bank_slip.jpg') 
  cy.wait(300)

  //ব্যাংক চেকারকে পাঠান Button
  cy.get(':nth-child(6) > .submit-row > .submitBtnBox > .MuiButton-contained')
  .click()
  cy.wait(300)
})