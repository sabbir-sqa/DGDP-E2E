describe("Organization Setup", () => {
  it("Verify login", () => {
    cy.visit("http://testing.edp.gov.bd/");
    cy.get('input[name="username"]').type("baf.supplytest.admin");
    cy.get('input[name="password"]').type("Sqa@123456");
    // cy.contains('Sign In').click();
    // cy.get(".MuiButton-contained").click();
    // cy.get('form').contains('button[type="submit"]').click()
    cy.contains("button", "Sign In").click();
    cy.wait(4000);
    cy.url().should("contains", "http://testing.edp.gov.bd/admin");
  });

  it("Create office level", () => {});
});
