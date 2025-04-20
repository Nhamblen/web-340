/*
Noah Hamblen
4/20/25
server.spec.js
*/

const http = require("http");
const server = require("../src/server");

// TODO: Implement your tests here
describe("Fantasy Game Character Creation API", () => {
  test("create a character with POST /create", (done) => {
    const data = JSON.stringify({});
    const req = http.request(
      {
        hostname: "localhost",
        port: 3000,
        path: "/create?class=Warrior&gender=Male&funFact=One+arm",
        method: "POST",
      },
      (res) => {
        expect(res.statusCode).toBe(200);
        done();
      }
    );

    req.write(data);
    req.end();
  });

  test("confirm character creation with POST /confirm", (done) => {
    const req = http.request(
      {
        hostname: "localhost",
        port: 3000,
        path: "/confirm",
        method: "POST",
      },
      (res) => {
        expect(res.statusCode).toBe(200);
        done();
      }
    );

    req.end();
  });

  test("retrieve character with GET /view", (done) => {
    http.get("http://localhost:3000/view", (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
});
