/**
 * Author: Noah Hamblen
 * Date: 4/9/25
 * File Name: index.js
 * Description: CLI program
 */

"use strict";

// Import required modules and declare variables
const readline = require("readline");
const TacoStandEmitter = require("./taco-stand.js");
const tacoStand = new TacoStandEmitter();

// Set up readline interface for interactive command-line input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Event listeners
// Register event listener for the "serve" event
tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

// Register event listener for the "prepare" event
tacoStand.on("prepare", (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});

// Register event listener for the "rush" event
tacoStand.on("rush", (rushTime) => {
  console.log(`Taco Stand handles rush: ${rushTime}`);
});

// Listen for input line-by-line from the user
rl.on("line", (input) => {
  const [command, ...args] = input.split(" "); // Split the input into a command and its arguments
  const argument = args.join(" "); // In case the user enters multiple words (e.g. "lunch rush")

  // Handle the user's command
  switch (command) {
    case "serve":
      tacoStand.serveCustomer(argument); // Emit the "serve" event
      break;
    case "prepare":
      tacoStand.prepareTaco(argument); // Emit the "prepare" event
      break;
    case "rush":
      tacoStand.handleRush(argument); // Emit the "rush" event
      break;
    case "exit":
      console.log("Exiting taco stand...");
      rl.close(); // Close the readline interface and end the program
      break;
    default:
      console.log("Unknown command. Please use serve, prepare, or rush."); // Handle any unknown command
  }
});

// Print instructions to the user
console.log(
  `Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`
);
