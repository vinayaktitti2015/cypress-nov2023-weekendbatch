describe("iframes handling", () => {
  it("test iframes using cypress-iframe plugin", () => {
    cy.visit("https://the-internet.herokuapp.com/frames");
    cy.contains("iFrame").click();
    cy.wait(3000);

    // check frame loaded
    cy.frameLoaded();

    // or check frame loaded from specific url
    cy.frameLoaded({ url: "https://the-internet.herokuapp.com/iframe" });

    // or check iframe locator
    cy.frameLoaded("#mce_0_ifr");

    cy.contains("An iFrame containing the TinyMCE WYSIWYG Editor").should(
      "be.visible"
    );

    cy.iframe("#mce_0_ifr")
      .find("#tinymce p")
      .clear()
      .type("test comments")
      .should("have.value", "test comments");
  });

  it.only("handle iframe using custom command", () => {
    cy.visit("https://the-internet.herokuapp.com/frames");
    cy.contains("iFrame").click();
    cy.wait(3000);

    cy.switchToIframe("#mce_0_ifr")
      .find("#tinymce")
      .clear()
      .type("test comments")
      .should("have.value", "test comments");
  });
});
