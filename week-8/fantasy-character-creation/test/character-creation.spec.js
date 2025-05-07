"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For promises:
const fs = require("fs").promises;
const path = require("path");

// Path for storing character data
const filePath = path.join(__dirname, "characters.json");

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    ({
      createCharacter,
      getCharacters,
    } = require("../src/character-creation.js"));
  });

  afterEach(async () => {
    await fs.unlink(filePath).catch(() => {}); // cleanup
  });

  // Test: Write a new character to a file
  test("Write a new character to a file", async () => {
    const character = {
      class: "Mage",
      gender: "Female",
      funFact: "Can talk to squirrels",
    };

    await createCharacter(filePath, character);
    const data = await fs.readFile(filePath, "utf-8");
    const parsed = JSON.parse(data);
    expect(parsed).toEqual(character);
  });
});

// 2. Test that getCharacters reads characters from the file
// 3. Test that createCharacter handles errors when writing to the file
