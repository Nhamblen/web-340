// game-characters.js

// Imports
const { spawn } = require("child_process");
const path = require("path");

class GameCharacters {
  // Constructor takes the name of a script file to be run
  constructor(scriptName) {
    // Build the full path to the script using the current directory
    this.scriptPath = path.join(__dirname, scriptName);
  }

  // Method to execute the script and retrieve character data
  getCharacters(callback) {
    // Spawn a new child process to run the target Node.js script
    const child = spawn("node", [this.scriptPath]);

    let data = ""; // stdout data
    let errorData = ""; // stderr data (errors)

    child.stdout.on("data", (chunk) => (data += chunk)); // Collect data output from the child process
    child.stderr.on("data", (chunk) => (errorData += chunk)); // Collect error output from the child process

    // Handle when the child process has finished
    child.on("close", (code) => {
      // If there is any error output or the exit code is not zero (success), return an error
      if (errorData || code !== 0) {
        return callback(errorData || `Exited with code ${code}`, null);
      }

      try {
        // Attempt to parse the stdout data as JSON
        const parsedData = JSON.parse(data);
        // If successful, return the parsed data
        callback(null, parsedData);
      } catch (err) {
        // If JSON parsing fails, return an error message
        callback("Failed to parse JSON", null);
      }
    });

    // Handle errors that occur while trying to start the child process
    child.on("error", (err) => callback(err.message, null));
  }
}

// Export the GameCharacters class for use in other modules
module.exports = { GameCharacters };
