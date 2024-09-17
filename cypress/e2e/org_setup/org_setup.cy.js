describe('Organization Setup E2E', () => {
  //   beforeEach(() => {

  //   });
  it('Verify login', () => {
    cy.visit('http://testing.edp.gov.bd/');
    cy.viewport(1360, 768);
    cy.get('.inactive > .MuiChip-label').click();
    cy.get('input[name="username"]').type('baf.supplytest.admin');
    cy.get('input[name="password"]').type('Sqa@123456');
    cy.get('form').contains('button', 'Sign In').click();
    // cy.get('.MuiButton-contained').click();
    cy.wait(4000);
    cy.url().should('contains', 'http://testing.edp.gov.bd/admin');
  });

  it('Create office level', () => {});
});
