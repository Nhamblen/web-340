/**
 * Author: Noah Hamblen
 * Date: 3/19/25
 * File Name: weight-converter.js
 * Description: script that converts pounds to kilograms
 */

"use strict";

// TODO: Implement the weight conversion logic here

// Get the command line arguments
const args = process.argv.slice(2);

const pounds = args[0];

// Check if an argument is provided
if (args.length === 0) {
  console.error("Usage: node weight-converter.js <pounds>");
  process.exit(1);
}

// Check if the argument is a valid number
if (isNaN(pounds)) {
  console.error("Input must be a number.");
  process.exit(1);
}

const kilograms = (parseFloat(pounds) / 2.205).toFixed(2); // Pound to kilogram calculation (rounded 2 decimal places)
console.log(kilograms); // Print the result
