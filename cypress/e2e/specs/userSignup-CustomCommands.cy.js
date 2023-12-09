describe("user signup feature using custom commands", () => {
  const url = Cypress.env("baseurl");

  beforeEach(() => {
    cy.visit(url);
  });
  it("test user register successfully", () => {
    cy.userRegister();
  });
});
