/**
 * Author: Noah Hamblen
 * Date: 4/16/25
 * File Name: pie.spec.js
 * Description: Includes unit tests for the bakePie function using Jest.
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here
// Grouping tests for the bakePie function
describe("bakePie", () => {
  //
  // Test 1: Check if the success message is returned when all essential ingredients are present
  //
  test("success message if all essential ingredients are present", () => {
    // Call the bakePie function with apple pie and all essential ingredients
    const message = bakePie("apple", ["flour", "sugar", "butter"]);

    // Expect the function to return the success message
    expect(message).toBe("Successfully baked a apple pie!");
  });

  //
  // Test 2: Check if process.exit is called when flour is missing
  //
  test("exit the process if flour is missing", () => {
    // Mock process.exit to prevent the actual process from exiting during the test
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});

    // Mock console.warn to prevent the actual warning from being logged during the test
    console.warn = jest.fn();

    // Call the bakePie function with pumpkin pie, but missing flour
    bakePie("pumpkin", ["sugar", "butter"]);

    // Expect console.warn to be called with the appropriate warning message
    expect(console.warn).toHaveBeenCalledWith(
      "Missing essential ingredient: flour"
    );

    // Expect process.exit to be called with status code 1 to indicate failure
    expect(mockExit).toHaveBeenCalledWith(1);

    // Restore the original implementation of process.exit after the test
    mockExit.mockRestore();
  });

  //
  // Test 3: Check if process.exit is called when multiple essential ingredients are missing
  //
  test("exit the process if multiple essential ingredients are missing", () => {
    // Mock process.exit to prevent the actual process from exiting during the test
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});

    // Mock console.warn to prevent the actual warning from being logged during the test
    console.warn = jest.fn();

    // Call the bakePie function with pecan pie, but only one non-essential ingredient
    bakePie("pecan", ["pecans"]);

    // Expect console.warn to be called with the warning about missing flour
    expect(console.warn).toHaveBeenCalledWith(
      "Missing essential ingredient: flour"
    );

    // Expect process.exit to be called with status code 1
    expect(mockExit).toHaveBeenCalledWith(1);

    // Restore the original implementation of process.exit after the test
    mockExit.mockRestore();
  });
});
