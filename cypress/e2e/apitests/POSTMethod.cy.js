const payload = require("../../fixtures/payload.json");
describe("POST method calls", () => {
  it.only("test create user", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        name: "morpheus",
        job: "leader",
        phone: 6023232322,
        email: "morpheus@yahoo.com",
        city: "BANGALORE",
        country: "INDIA",
      },
    }).then((res) => {
      expect(res.status).to.equal(201);
      expect(res.body.name).to.eq("morpheus");
      expect(res.body.job).to.equal("leader");
      expect(res.body.phone).to.equal(6023232322);

      assert.isNotNull(res.body.id, "id value not found");
      assert.isNotNull(res.body.createdAt, "createdAt value not found");
    });
  });

  it.only("test create user using fixtures json file", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        fixtures: payload,
      },
    }).then((res) => {
      expect(res.status).to.equal(201);
      expect(res.body.fixtures).to.have.property("name", "morpheus");
      expect(res.body.fixtures.job).to.equal("test lead");
      expect(res.body.fixtures.phone).to.equal(6023232322);

      assert.isNotNull(res.body.id, "id value not found");
      assert.isNotNull(res.body.createdAt, "createdAt value not found");
    });
  });

  it("test register user and verify token", async () => {
    await cy
      .request({
        method: "POST",
        url: "https://reqres.in/api/register",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          email: "eve.holt@reqres.in",
          password: "pistol",
        },
      })
      .then(async (res) => {
        await expect(res.status).to.equal(200);

        assert.isNotNull(res.body.token, "token value not found");
        const token = res.body.token;

        cy.writeFile("cypress/fixtures/token.json", { token: token });
        return await token;
      })
      .then((token) => {
        cy.request({
          method: "GET",
          url: "https://reqres.in/api/login",
          headers: {
            "Content-Type": "application/json",
          },
          auth: {
            bearer: token,
          },
        }).then((res) => {
          expect(res.status).to.equal(200);
        });
      });
  });

  it("test register user and verify unsuccessful status code", async () => {
    await cy
      .request({
        method: "POST",
        url: "https://reqres.in/api/register",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          email: "sydney@fife",
        },
        failOnStatusCode: false,
      })
      .then((res) => {
        expect(res.status).to.equal(400);
        expect(res.body.error).to.eq("Missing password");
      });
  });
});
