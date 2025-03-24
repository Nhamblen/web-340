/**
 * Author: Noah Hamblen
 * Date: 3/24/25
 * File Name: recipes.js
 * Description: Recipe functions
 */

// Define the createRecipe function
function createRecipe(ingredients) {
  return `Recipe created with ingredients: ${ingredients.join(", ")}`;
}

// Define the setTimer function
function setTimer(minutes) {
  return `Timer set for ${minutes} minutes.`;
}

// Define the quit function
function quit() {
  return "Program exited";
}

module.exports = { createRecipe, setTimer, quit };
