/// <reference types="cypress" />

describe("handling webui controls", () => {
  beforeEach(function () {
    cy.visit("https://www.globalsqa.com/samplepagetest/");

    cy.fixture("testdata.json").then((data) => {
      this.data = data;
    });
  });

  it("should fill the form successfully", function () {
    // upload files
    cy.get('[name="file-553"]').selectFile(this.data.filePath);

    // input fields
    cy.get("#g2599-name")
      .clear()
      .type(this.data.name)
      .should("have.value", this.data.name);

    cy.get("#g2599-email")
      .clear()
      .type(this.data.email)
      .should("have.value", this.data.email);

    cy.get("#g2599-website")
      .clear()
      .type(this.data.website)
      .should("have.value", this.data.website);

    // dropdowns
    cy.get("#g2599-experienceinyears")
      .select(this.data.exp)
      .should("have.value", this.data.exp);

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
          expect(window).to.equal(this.data.alertMessage);
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
      this.data.successMessage
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
        expect(text).to.equal(this.data.successMessage);
      });
  });
});
