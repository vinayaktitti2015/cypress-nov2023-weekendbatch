import CommonPage from "../pages/commonPage.po";
import RegisterPage from "../pages/registerPage.po";
const data = require("../fixtures/user.json");
import { faker } from "@faker-js/faker";

let email = faker.internet.email();
let password = faker.internet.password();

let commonpage = new CommonPage();
let registerPage = new RegisterPage();

Cypress.Commands.add("userRegister", () => {
  commonpage.getRegisterLink().click();
  registerPage.getGender().check();
  registerPage.getFirstName().clear().type(data.firstName);
  registerPage.getLastName().clear().type(data.lastName);
  registerPage.getEmail().clear().type(email);
  registerPage.getPassword().clear().type(password);
  registerPage.getConfirmPassword().clear().type(password);
  registerPage.getRegisterButton().click();
  cy.contains(data.message).should("be.visible");
});
