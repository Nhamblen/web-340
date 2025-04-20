/*
Noah Hamblen
4/20/25
server.js
*/

// Module Imports
const http = require("http");
const url = require("url");

// Store the character and confirmation status
let character = null;
let isConfirmed = false;

const server = http.createServer((req, res) => {
  // Parse the incoming URL and extract the pathname and query parameters
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  // Log the incoming request method and path for debugging
  console.log(`${req.method} ${pathname}`);

  //
  // Route: Create character
  //
  // This route handles POST requests to '/create' and creates a character
  if (req.method === "POST" && pathname === "/create") {
    character = {
      // Assign the character attributes from the query
      class: query.class,
      gender: query.gender,
      funFact: query.funFact,
    };
    isConfirmed = false; // Initially, the character is not confirmed

    // Send a response with status code 200 (OK) and a JSON message with the character details
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Character created successfully",
        character, // Return the character object in the response
      })
    );
  }

  //
  // Route: Confirm character
  //
  // This route handles POST requests to '/confirm' and confirms the character
  else if (req.method === "POST" && pathname === "/confirm") {
    // If there is no character created, send an error response
    if (!character) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "No character to confirm" }));
      return;
    }

    // Set the character as confirmed
    isConfirmed = true;

    // Send a response confirming the character creation
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Character confirmed" }));
  }

  //
  // Route: View character
  //
  // This route handles GET requests to '/view' and allows the user to view the character
  else if (req.method === "GET" && pathname === "/view") {
    // If no character exists or the character hasn't been confirmed, return an error
    if (!character || !isConfirmed) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "No confirmed character found" }));
      return;
    }

    // Send the confirmed character information as the response
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(character));
  }

  //
  // Route: Not Found
  //
  // If none of the defined routes are matched, send a 404 error
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

// Start the server, listen on port 3000, and log it in the console
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = server; // Export the server for testing
