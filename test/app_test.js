const assert = require("assert");
const request = require("supertest");
const app = require("../app");

describe("The express app", () => {
  it("handles a get request", (done) => {
    request(app)
      .get("/api")
      .end((err, res) => {
        assert(res.body.hi === 'there')
        done()
      });
  });


});