import CommonPage from "../../pages/commonPage.po";
import RegisterPage from "../../pages/registerPage.po";
const data = require("../../fixtures/user.json");
import { faker } from "@faker-js/faker";

describe("user signup feature", () => {
  let email = faker.internet.email();
  let password = faker.internet.password();

  let commonpage = new CommonPage();
  let registerPage = new RegisterPage();

  const url = Cypress.env("baseurl");

  beforeEach(() => {
    cy.visit(url);
  });
  it("test user register successfully", () => {
    commonpage.getRegisterLink().click();
    registerPage.getGender().check();
    registerPage.getFirstName().clear().type(data.firstName);
    registerPage.getLastName().clear().type(data.lastName);
    registerPage.getEmail().clear().type(email);
    registerPage.getPassword().clear().type(password);
    registerPage.getConfirmPassword().clear().type(password);
    registerPage.getRegisterButton().click();
    cy.contains("Message Sent (go back)").should("be.visible");
  });
});
