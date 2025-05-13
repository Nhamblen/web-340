// game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters("../src/game-characters-data.js");
  });

  test("should return game characters data", (done) => {
    gameCharacters.getCharacters((err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual(expect.any(Array));
      expect(data[0]).toHaveProperty("class");
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // TODO: Implement this test
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // TODO: Implement this test
  });
});
