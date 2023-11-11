describe("main describe suite - UI Tests", () => {
  before(() => {
    cy.log("parent describe before each");
  });

  // tests
  it("TC 001", () => {});

  it("TC 002", () => {});

  // nested tests
  describe.skip("nested describe  - API Tests", function () {
    beforeEach(() => {
      cy.log("beforeEach Hooks");
    });

    it("should save with error", function () {
      cy.log("nested tests");
    });

    it("should save without error", function () {
      cy.log("nested tests");
    });
  });


  // nested tests
  describe("nested describe - DB Tests", function () {
    beforeEach(() => {
      cy.log("beforeEach Hooks");
    });

    it("should save with error", function () {
      cy.log("nested tests");
    });

    it("should save without error", function () {
      cy.log("nested tests");
    });
  });
});
