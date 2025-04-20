/*
Noah Hamblen
4/20/25
server.spec.js
*/

"use strict";

// Module Imports
const http = require("http");
const server = require("../src/server");

// Group of tests for the Fantasy Game Character Creation
describe("Fantasy Game Character Creation API", () => {
  //
  // Test for creating a character with POST /create
  //
  test("create a character with POST /create", (done) => {
    const data = JSON.stringify({}); // Prepare the request body (empty data for now)
    // Make a POST request to the /create endpoint
    const req = http.request(
      {
        hostname: "localhost", // The server is running locally
        port: 3000, // The server is listening on port 3000
        path: "/create?class=Warrior&gender=Male&funFact=One+arm", // URL with query params for character creation
        method: "POST", // Use POST method for creating a character
      },
      (res) => {
        expect(res.statusCode).toBe(200); // Check that the status code is 200 (OK)
        done(); // Test is complete
      }
    );
    req.write(data); // Write the data to the request body
    req.end(); // End the request
  });

  //
  // Test for confirming character creation with POST /confirm
  //
  test("confirm character creation with POST /confirm", (done) => {
    // Make a POST request to the /confirm endpoint
    const req = http.request(
      {
        hostname: "localhost", // The server is running locally
        port: 3000, // The server is listening on port 3000
        path: "/confirm", // URL path for confirming character creation
        method: "POST", // Use POST method for confirmation
      },
      (res) => {
        expect(res.statusCode).toBe(200); // Check that the status code is 200 (OK)
        done(); // Test is complete
      }
    );
    req.end(); // End the request
  });

  //
  // Test for retrieving the character with GET /view
  //
  test("retrieve character with GET /view", (done) => {
    // Make a GET request to the /view endpoint
    http.get("http://localhost:3000/view", (res) => {
      expect(res.statusCode).toBe(200); // Check that the status code is 200 (OK)
      done(); // Test is complete
    });
  });

  //
  // After all tests, close the server to avoid hanging
  //
  afterAll((done) => {
    server.close(() => {
      console.log("Server closed");
      done(); // Ensure Jest can exit properly after tests are finished
    });
  });
});
