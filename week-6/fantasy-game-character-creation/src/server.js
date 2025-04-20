/*
Noah Hamblen
4/20/25
server.js
*/

const http = require("http");
const url = require("url");

// TODO: Implement your server here
let character = null;
let isConfirmed = false;

const server = http.createServer((req, res) => {
  // TODO: Implement your routes here
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  console.log(`${req.method} ${pathname}`); // Debugging log

  // Route: Create character
  if (req.method === "POST" && pathname === "/create") {
    character = {
      class: query.class,
      gender: query.gender,
      funFact: query.funFact,
    };
    isConfirmed = false;

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Character created successfully",
        character,
      })
    );
  }

  // Route: Confirm character
  else if (req.method === "POST" && pathname === "/confirm") {
    if (!character) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "No character to confirm" }));
      return;
    }

    isConfirmed = true;

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Character confirmed" }));
  }

  // Route: View character
  else if (req.method === "GET" && pathname === "/view") {
    if (!character || !isConfirmed) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "No confirmed character found" }));
      return;
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(character));
  }

  // Route: Not Found
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = server;
