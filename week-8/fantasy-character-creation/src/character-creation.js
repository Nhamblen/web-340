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

// For promises:
const fs = require("fs").promises;
const path = require("path");

// Path for storing character data
const filePath = path.join(__dirname, "characters.json");

async function createCharacter(filePath, character) {
  const data = JSON.stringify(character, null, 2);
  await fs.writeFile(filePath, data, "utf-8");
}

async function getCharacters(filePath, character) {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

module.exports = { createCharacter, getCharacters }; // For promises
