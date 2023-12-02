describe("handling write and read file", () => {
  it("test txt file contents", () => {
    cy.writeFile("cypress/fixtures/test.txt", "Hello Cypress!");

    // read file contents
    cy.readFile("cypress/fixtures/test.txt").then((content) => {
      expect(content).to.equal("Hello Cypress!");
    });
  });

  it("test json file contents", () => {
    cy.writeFile("cypress/fixtures/user.json", {
      name: "James Doe",
      email: "james@yahoo.com",
      phone: 91232323232,
    });

    const expected = {
        name: "James Doe",
        email: "james@yahoo.com",
        phone: 91232323232,
      };

    // read file contents
    cy.readFile("cypress/fixtures/user.json").then((contents) => {
      expect(JSON.stringify(contents)).to.equal(JSON.stringify(expected));
    });

    // cy.fixture("user.json").then((content) => {
    //   expect(content.name).to.equal("James Doe");
    //   expect(content.email).to.equal("james@yahoo.com");
    //   expect(content.phone).to.equal(91232323232);
    // });
  });
});
