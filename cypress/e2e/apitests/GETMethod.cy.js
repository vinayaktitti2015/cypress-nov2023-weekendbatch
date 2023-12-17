describe("get method calls", () => {
  it("test GET list of users", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      expect(res.status).to.equal(200);
    });
  });

  it("test GET list of users and data mapping", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      expect(res.status).to.equal(200);

      // verify properties
      expect(res.body).to.have.property("page", 2);
      expect(res.body).to.have.property("per_page", 6);
      expect(res.body).to.have.property("total", 12);

      expect(res.body.data[0].email).to.eq("michael.lawson@reqres.in");
      expect(res.body.data[0].first_name).to.eq("Michael");
      expect(res.body.data[0].last_name).to.eq("Lawson");

      expect(res.body.support.url).to.eq("https://reqres.in/#support-heading");
      expect(res.body.support.text).to.include(
        "To keep ReqRes free, contributions towards server costs are appreciated!"
      );
    });
  });

  it("test GET list of users for dynamic data assertions", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      expect(res.status).to.equal(200);
      assert.isNotNull(res.body.data[0].email, "email not found");
      assert.isNotNull(res.body.data[0].first_name, "first name not found");
      assert.isNotNull(res.body.data[0].last_name, "last name not found");
    });
  });

  it.only("test GET list of users and verify dynamic data using regex", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      expect(res.status).to.equal(200);

      // verify properties
      expect(res.body).to.have.property("page", 2);
      expect(res.body).to.have.property("per_page", 6);
      expect(res.body).to.have.property("total", 12);

      expect(res.body.data[0].email).to.match(/[A-Za-z0-9]/);
      expect(res.body.data[0].first_name).to.match(/[A-Za-z]/);
      expect(res.body.data[0].last_name).to.match(/[A-Za-z]/);

      expect(res.body.support.url).to.eq("https://reqres.in/#support-heading");
      expect(res.body.support.text).to.include(
        "To keep ReqRes free, contributions towards server costs are appreciated!"
      );
    });
  });
});
