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

// Import modules for promises
const fs = require("fs").promises;
const path = require("path");

// Path for storing character data
const filePath = path.join(__dirname, "characters.json");

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  // Import the module before each test to get a fresh instance
  beforeEach(() => {
    ({
      createCharacter,
      getCharacters,
    } = require("../src/character-creation.js"));
  });

  // Remove the file after each test
  afterEach(async () => {
    await fs.unlink(filePath).catch(() => {}); // Ignore if file doesn't exist
  });

  //
  // Test: Write a new character to a file
  //
  test("Write a new character to a file", async () => {
    const character = {
      class: "Mage",
      gender: "Female",
      funFact: "Can talk to squirrels",
    };

    // Call the function and verify the written data matches the character
    await createCharacter(filePath, character);
    const data = await fs.readFile(filePath, "utf-8");
    const parsed = JSON.parse(data);
    expect(parsed).toEqual(character);
  });

  //
  // Test: getCharacters reads characters from the file
  //
  test("Read character data from a file", async () => {
    const character = {
      class: "Rogue",
      gender: "Female",
      funFact: "Has 3 arms",
    };

    // Write directly to the file, then verify that getCharacters reads it correctly
    await fs.writeFile(filePath, JSON.stringify(character), "utf-8");
    const result = await getCharacters(filePath);
    expect(result).toEqual(character);
  });

  //
  // Test: createCharacter handles errors when writing to the file
  //
  test("Handles errors when writing to a file", async () => {
    const character = {
      class: "Warrior",
      gender: "Male",
      funFact: "Left Handed",
    };

    // Provide an invalid path to trigger an error
    const badPath = "/invalid/path/characters.json";
    await expect(createCharacter(badPath, character)).rejects.toThrow();
  });
});
