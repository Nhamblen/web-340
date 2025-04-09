/**
 * Author: Noah Hamblen
 * Date: 4/9/25
 * File Name: taco-stand.spec.js
 * Description: Tests for the TacoStandEmitter methods
 */

"use strict";

// Import required modules
const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand.js");
const tacoStand = new TacoStandEmitter();

// Tests the serve customer method
function testServeCustomer() {
  let servedCustomer = "";

  // Register an event listener for the 'serve' event
  tacoStand.on("serve", (customer) => {
    servedCustomer = customer; // Variable to hold the value
  });

  try {
    tacoStand.serveCustomer("Noah");
    assert.strictEqual(servedCustomer, "Noah"); // Check if the event emitted the correct value
    console.log("Passed testServeCustomer"); // If test passes
    return true;
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err}`); // If test fails
    return false;
  }
}

// Tests the prepare taco method
function testPrepareTaco() {
  let preparedTaco = ""; // Variable to hold the value

  // Register an event listener for the 'prepare' event
  tacoStand.on("prepare", (taco) => {
    preparedTaco = taco;
  });

  try {
    tacoStand.prepareTaco("beef");
    assert.strictEqual(preparedTaco, "beef"); // Check if the event emitted the correct value
    console.log("Passed testPrepareTaco"); // If test passes
    return true;
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`); // If test fails
    return false;
  }
}

// Tests the handle rush method
function testHandleRush() {
  let rushTime = ""; // Variable to hold the value

  // Register an event listener for the 'rush' event
  tacoStand.on("rush", (rush) => {
    rushTime = rush;
  });

  try {
    tacoStand.handleRush("breakfast");
    assert.strictEqual(rushTime, "breakfast"); // Check if the event emitted the correct value
    console.log("Passed testHandleRush"); // If test passes
    return true;
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`); // If test fails
    return false;
  }
}

// Run all tests
const allTests = [testServeCustomer, testPrepareTaco, testHandleRush];
let allPassed = true;

// Execute each test and combine the results
allTests.forEach((test) => {
  allPassed = allPassed && test(); // Only true if all tests pass
});

// Print final result
if (allPassed) {
  console.log("All tests passed!");
} else {
  console.log("Some tests failed.");
}
