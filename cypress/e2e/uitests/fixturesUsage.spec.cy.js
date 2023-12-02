/// <reference types="cypress" />

describe("handling webui controls", () => {
  beforeEach(() => {
    cy.visit("https://www.globalsqa.com/samplepagetest/");
  });

  it("should fill the form successfully", () => {
    cy.fixture("testdata.json").then((data) => {
      // upload files
      cy.get('[name="file-553"]').selectFile(data.filePath);

      // input fields
      cy.get("#g2599-name")
        .clear()
        .type(data.name)
        .should("have.value", data.name);

      cy.get("#g2599-email")
        .clear()
        .type(data.email)
        .should("have.value", data.email);

      cy.get("#g2599-website")
        .clear()
        .type(data.website)
        .should("have.value", data.website);

      // dropdowns
      cy.get("#g2599-experienceinyears")
        .select(data.exp)
        .should("have.value", data.exp);

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
            expect(window).to.equal(data.alertMessage);
            cy.on("window:confirm", () => true);
            cy.on("window:confirm", () => true);
          });
        });

      // input comments
      cy.get("#contact-form-comment-g2599-comment")
        .clear()
        .type("cypress tests");

      // click event
      cy.get("button[type='submit']").click();

      // should assertion
      cy.wait(3000);
      cy.get("div[class='content_bgr'] h3:nth-child(1)").should(
        "have.text",
        data.successMessage
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
          expect(text).to.equal(data.successMessage);
        });
    });
  });

  it("TC 002", () => {
    cy.fixture("testdata.json").then((data) => {});
  });

  it("TC 003", () => {
    cy.fixture("testdata.json").then((data) => {});
  });

  it("TC 004", () => {
    cy.fixture("testdata.json").then((data) => {});
  });
});
