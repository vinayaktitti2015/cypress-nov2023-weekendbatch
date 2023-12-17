describe("spy the network calls", () => {
  it("test IG login network log calls", () => {
    // network call - prestate
    cy.intercept(
      "POST",
      "https://www.instagram.com/api/v1/web/accounts/login/ajax/"
    ).as("response");

    // ui automation test
    cy.visit("https://www.instagram.com/");
    cy.contains("Allow all cookies").click()
    cy.wait()
    cy.contains("Log In").click()
    //cy.get(":nth-child(1) > .x1i10hfl > ._acan > ._aacl").click(); // css
    cy.get("input[name='username']").clear().type("934434343"); // xpath
    cy.get("input[name='password']").clear().type("Test@221212");
    cy.get("button[type='submit']")
      .click()
      .then(() => {

        // open network call logs and verify the response
        cy.wait("@response").should(({ response }) => {
          expect(response.body).to.have.property(
            "message",
            "Sorry, your password was incorrect. Please double-check your password."
          );
          expect(response.body).to.have.property("status", "fail");
          expect(response.statusCode).to.equal(403);

          console.log("response ", response);
        });
      });
  });
});
