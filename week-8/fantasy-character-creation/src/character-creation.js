"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// Import modules for promises
const fs = require("fs").promises;
const path = require("path");

// Path for storing character data
const filePath = path.join(__dirname, "characters.json");

async function createCharacter(filePath, character) {
  // Convert the character object into a JSON string with indentation for readability.
  const data = JSON.stringify(character, null, 2);
  // Write the JSON data to the specified file using UTF-8 encoding.
  await fs.writeFile(filePath, data, "utf-8");
}

async function getCharacters(filePath, character) {
  // Read the contents of the file using UTF-8 encoding.
  const data = await fs.readFile(filePath, "utf-8");
  // Parse the JSON string into a JavaScript object and return it.
  return JSON.parse(data);
}

// Export the functions so they can be used in other modules
module.exports = { createCharacter, getCharacters }; // For promises
