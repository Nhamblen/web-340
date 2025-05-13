// game-characters.js
const { spawn } = require("child_process");
const path = require("path");

class GameCharacters {
  constructor(scriptName) {
    this.scriptPath = path.join(__dirname, scriptName);
  }

  getCharacters(callback) {
    const child = spawn("node", [this.scriptPath]);

    let data = "";
    let errorData = "";

    child.stdout.on("data", (chunk) => (data += chunk));
    child.stderr.on("data", (chunk) => (errorData += chunk));

    child.on("close", (code) => {
      if (errorData || code !== 0) {
        return callback(errorData || `Exited with code ${code}`, null);
      }

      try {
        const parsedData = JSON.parse(data);
        callback(null, parsedData);
      } catch (err) {
        callback("Failed to parse JSON", null);
      }
    });

    child.on("error", (err) => callback(err.message, null));
  }
}

module.exports = { GameCharacters };
