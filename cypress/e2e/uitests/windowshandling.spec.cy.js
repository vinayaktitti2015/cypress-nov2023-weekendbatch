describe("windows handling", () => {
  let baseurl =
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo";
  it("test new window popup", () => {
    cy.visit(baseurl, {
      onBeforeLoad(win) {
        cy.stub(win, "open").as("childwindow");
      },
    });

    cy.get("#windowButton").click();

    // switch to the new window
    cy.window().its("open").should("be.calledOnce");
    cy.get("@childwindow")
      .should("be.calledOnce", Cypress.sinon.match.string)
      .then((url) => {
        cy.visit(url.args[0][0]);
        url.restore;
        cy.contains("This is a sample page").should("be.visible");
      });

    // switch back to the previous page or parent window
    cy.visit(baseurl);
  });

  it.only("test facebook new window popup", () => {
    cy.visit(baseurl, {
      onBeforeLoad(win) {
        cy.stub(win, "open").as("childwindow");
      },
    });

    cy.get('[title="Follow @Lambdatesting on Facebook"]').click();

    // switch to the new window
    cy.window().its("open").should("be.calledOnce");
    cy.get("@childwindow")
      .should("be.calledOnce", Cypress.sinon.match.string)
      .then((url) => {
        cy.visit(url.args[0][0]);
        url.restore;

        cy.origin("https://www.facebook.com", () => {
            cy.wait(2000)
          cy.contains("Decline optional cookies").click({force: true});
          cy.contains("Your Request Couldn't be Processed").should("be.visible");
          //cy.contains("Like").should("be.visible").click();
          cy.wait(5000);
        });
      });

    // switch back to the previous page or parent window
    cy.visit(baseurl);
  });
});
