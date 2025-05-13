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
    const broken = new GameCharacters("./nonexistent.js");
    broken.getCharacters((err, data) => {
      expect(err).toBeTruthy();
      expect(data).toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    const failing = new GameCharacters("../src/failing-script.js");
    failing.getCharacters((err, data) => {
      expect(err).toBeTruthy();
      expect(data).toBeNull();
      done();
    });
  });
});
