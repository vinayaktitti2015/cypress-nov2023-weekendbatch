/// <reference types="cypress" />

describe("handling webui controls", () => {
  beforeEach(() => {
    cy.visit("https://www.globalsqa.com/samplepagetest/");
  });

  it("should fill the form successfully", () => {
    // upload files
    cy.get('[name="file-553"]').selectFile("cypress/fixtures/sample.pdf");

    // input fields
    cy.get("#g2599-name")
      .clear()
      .type("james doe")
      .should("have.value", "james doe");

    cy.get("#g2599-email")
      .clear()
      .type("james@gmail.com")
      .should("have.value", "james@gmail.com");

    cy.get("#g2599-website")
      .clear()
      .type("https://nodejs.org/en")
      .should("have.value", "https://nodejs.org/en");

    // dropdowns
    cy.get("#g2599-experienceinyears")
      .select("10+")
      .should("have.value", "10+");

    // checkboxes
    cy.get("input[value='Automation Testing']")
      .should("be.not.checked")
      .check();

    // radiobuttons
    cy.get("input[value='Post Graduate']").should("be.not.checked").check();
    // should is a promise from cypress inbuilt

    // alerts
    cy.get("button[onclick='myFunction()']")
      .click()
      .then(() => {
        cy.on("window:alert", (window) => {
          // expect is from chai assertion library
          expect(window).to.equal("Do you really fill rest of the form?");
          cy.on("window:confirm", () => true);
          cy.on("window:confirm", () => true);
        });
      });

    // input comments
    cy.get("#contact-form-comment-g2599-comment").clear().type("cypress tests");

    // click event
    cy.get("button[type='submit']").click();

    // should assertion
    cy.wait(3000);
    cy.get("div[class='content_bgr'] h3:nth-child(1)").should(
      "have.text",
      "Message Sent (go back)"
    );

    // expect usecase
    cy.get("div[class='content_bgr'] h3:nth-child(1)").then(($element) => {
      const text = $element.text();
      const uppercase = text.toUpperCase();
      expect(uppercase).to.include("MESSAGE SENT");
    });

    // jquery invoke usecase
    cy.get("div[class='content_bgr'] h3:nth-child(1)")
      .invoke("text")
      .then((text) => {
        expect(text).to.equal("Message Sent (go back)");
      });
  });
});
