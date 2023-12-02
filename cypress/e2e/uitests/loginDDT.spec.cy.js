//import data from  "../fixtures/users.json"
const data = require("../../fixtures/loginDDT.json");
describe("p+  anfd _ve ", () => {
  beforeEach(function () {
    // cy.fixture("loginDDT").then(function (data) {
    //   this.data = data;
    // });
  });
  it("correct login", () => {
    //cy.visit("/web/index.php/auth/login");

      cy.log("username", data[0].username);
      cy.log("password", data[0].password);
  });
});
