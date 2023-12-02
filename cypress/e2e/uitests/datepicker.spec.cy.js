describe("date picker handling", () => {
  it("inject date format directly", () => {
    cy.visit("/automation-practice-form");
    cy.get("#dateOfBirthInput").scrollIntoView();
    cy.get("#dateOfBirthInput").clear().type("11/25/2023");
  });
});
