/// <reference types="cypress" />
// test suite
describe("Orange HRM login", () => {
  // hooks

  beforeEach(() => {
    // user login
    cy.log("open website");
    cy.visit("/web/index.php/auth/login");
  });

  // test case
  it("valid login", () => {
    cy.get('[name="username"]').clear().type("Admin");
    cy.get('[name="password"]').clear().type("admin123");

    // cy.wait(6000)
    cy.get('[type="submit"]').click();

    // apply assertion
    cy.get(".oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      "Dashboard"
    );
  });
});

/**
 * deafult timeout - 4s
 * cy.wait(5000) - static wait
 * {timeout: 10000} - explicit timeout
 *
 * // plugins
 * cy-wait-until plugin
 */
