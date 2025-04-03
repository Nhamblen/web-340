"use strict";
const assert = require("assert");
const calculateDistance = require("../src/distance-calculator");

// Calculate distance between Earth and Mars
function testEarthToMars() {
  try {
    assert.strictEqual(calculateDistance("Earth", "Mars"), 0.52);
    console.log("✅ Passed testEarthToMars");
    return true;
  } catch (error) {
    console.error(`❌ Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

// Calculate distance between Neptune and Mercury
function testNeptuneToMercury() {
  try {
    assert.strictEqual(calculateDistance("Neptune", "Mercury"), 29.68);
    console.log("✅ Passed testNeptuneToMercury");
    return true;
  } catch (error) {
    console.error(`❌ Failed testNeptuneToMercury: ${error.message}`);
    return false;
  }
}

// Calculate distance between Earth and Jupiter
function testEarthToJupiter() {
  try {
    assert.strictEqual(calculateDistance("Earth", "Jupiter"), 4.2);
    console.log("✅ Passed testEarthToJupiter");
    return true;
  } catch (error) {
    console.error(`❌ Failed testEarthToJupiter: ${error.message}`);
    return false;
  }
}

// Handle invalid planet input
function testInvalidPlanet() {
  try {
    calculateDistance("Earth", "Pluto");
    console.error(
      "❌ Failed testInvalidPlanet: Expected an error but none was thrown"
    );
    return false;
  } catch (error) {
    console.log("✅ Passed testInvalidPlanet");
    return true;
  }
}

// Call your test functions here
testEarthToMars();
testNeptuneToMercury();
testEarthToJupiter();
testInvalidPlanet();
