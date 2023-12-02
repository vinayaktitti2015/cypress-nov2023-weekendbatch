describe("tabs handling", () => {
  it("remove the target attr", () => {
    cy.visit("https://phptravels.com/demo");

    // handling tabs
    cy.contains("Login")
      .first()
      .invoke("removeAttr", "target")
      .click({ force: true });

    // cross-origin redirect handling
    cy.origin("https://phptravels.org/login", () => {
      cy.contains("Sign in to your account to continue.").should("be.visible");
      cy.get("#inputEmail").type("admin@yahoo.com");
      cy.get("#inputPassword").type("Admin123");
      cy.get("#login").click();
    });
  });

  it.only("switch to tab using href attr", () => {
    cy.visit("https://phptravels.com/demo");

    // handling tabs
    cy.contains("Login")
      .first()
      .then(($el) => {
        let url = $el.prop("href");

        cy.log(url);

        // cross-origin redirect handling
        cy.visit(url);
        cy.origin(url, (url) => {
          cy.contains("Sign in to your account to continue.").should(
            "be.visible"
          );
          cy.get("#inputEmail").type("admin@yahoo.com");
          cy.get("#inputPassword").type("Admin123");
          cy.get("#login").click();
        });
      });
  });
});
