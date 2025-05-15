// game-characters.spec.js
// Import the GameCharacters class from the source module
const { GameCharacters } = require("../src/game-characters");

// Describe the test suite for the GameCharacters class
describe("GameCharacters", () => {
  let gameCharacters;

  // Before each test, create a new instance pointing to a valid data script
  beforeEach(() => {
    gameCharacters = new GameCharacters("../src/game-characters-data.js");
  });

  test("should return game characters data", (done) => {
    gameCharacters.getCharacters((err, data) => {
      // Expect no error
      expect(err).toBeNull();
      // Expect the result to be an array
      expect(data).toEqual(expect.any(Array));
      // Expect at least the object in the array to have a 'class' property
      expect(data[0]).toHaveProperty("class");
      // Indicate async test is complete
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    const broken = new GameCharacters("./nonexistent.js"); // Invalid script path
    broken.getCharacters((err, data) => {
      // Expect an error message to be returned
      expect(err).toBeTruthy();
      // Expect no data to be returned
      expect(data).toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    const failing = new GameCharacters("../src/failing-script.js");
    failing.getCharacters((err, data) => {
      // Expect an error message to be returned
      expect(err).toBeTruthy();
      // Expect no data to be returned
      expect(data).toBeNull();
      done();
    });
  });
});
