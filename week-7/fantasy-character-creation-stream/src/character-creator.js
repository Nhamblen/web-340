const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options); // Call parent constructor
    this.data = ""; // Store incoming data for processing
  }

  // Handles data written to the stream
  _write(chunk, encoding, callback) {
    const input = chunk.toString().trim(); // Convert buffer to string and trim whitespace

    // Emit an error if input is empty
    if (!input) {
      this.emit("error", new Error("Input can't be empty"));
      callback();
      return;
    }

    // Store the input for later transformation in _read
    this.data += input;
    callback(); // Signal that the write is complete
  }

  // Called when data is being read from the stream
  _read(size) {
    // If we have data, process and push it
    if (this.data) {
      // Expected input format: "Class,Gender,FunFact"
      const [charClass, gender, funFact] = this.data.split(",");

      // Format the output string
      const output = `You created a ${gender} ${charClass} who ${funFact}.`;

      // Push the output to the readable side
      this.push(output);

      // Clear stored data
      this.data = "";
    } else {
      // No more data to read
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;
