const CharacterCreator = require("../src/character-creator");

describe("CharacterCreator", () => {
  let characterCreator;

  // Create a new instance before each test
  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  // Test 1: Check that valid input is processed and outputted correctly
  test("should process data correctly when written to", (done) => {
    let result = "";

    // Listen for data output from the stream
    characterCreator.on("data", (chunk) => {
      result += chunk.toString();
    });

    // When the stream ends, verify the output format
    characterCreator.on("end", () => {
      expect(result).toBe("You created a Male Warrior who loves cats.");
      done();
    });

    // Write valid input
    characterCreator.write("Warrior,Male,loves cats");
  });

  // Test 2: Check that an error is emitted for invalid input (empty string)
  test("should emit 'error' when invalid data is written", (done) => {
    // Listen for an error event
    characterCreator.on("error", (err) => {
      expect(err).toBeInstanceOf(Error); // Check it's an Error instance
      expect(err.message).toBe("Input can't be empty"); // Check the message
      done();
    });

    // Write invalid input
    characterCreator.write("");
  });

  // Test 3: Check that input is transformed correctly
  test("should transform data correctly when written to", (done) => {
    let result = "";

    // Listen for data output from the stream
    characterCreator.on("data", (chunk) => {
      result += chunk.toString();
    });

    // When the stream ends, verify the output format
    characterCreator.on("end", () => {
      expect(result).toBe("You created a Female Warrior who is blind.");
      done();
    });

    // Write valid input
    characterCreator.write("Warrior,Female,is blind");
  });
});
