describe("mock test data the network calls", () => {
  it("test mocking and stubbing test data", () => {
    // network call
    cy.intercept("GET", "https://www.abstractapi.com/api/ip-geolocation-api", {
      fixture: "mock.html",
    }).as("response");

    // ui auto
    cy.visit("https://www.abstractapi.com/api/ip-geolocation-api", {
      failOnStatusCode: false,
    });
    cy.wait(10000);
    cy.contains("CYPRESS &TESTS").should("be.visible");
    cy.contains("GOOGLE").should("be.visible");
  });
});
