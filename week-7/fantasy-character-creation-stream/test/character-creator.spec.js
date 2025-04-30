const CharacterCreator = require("../src/character-creator");

describe("CharacterCreator", () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    let result = "";

    characterCreator.on("data", (chunk) => {
      result += chunk.toString();
    });

    characterCreator.on("end", () => {
      expect(result).toBe("You created a Male Warrior who loves cats.");
      done();
    });

    characterCreator.write("Warrior,Male,loves cats");
    characterCreator.end();
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
  });

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
  });
});
