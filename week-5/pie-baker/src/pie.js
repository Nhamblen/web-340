/**
 * Author: Noah Hamblen
 * Date: 4/16/25
 * File Name: pie.js
 * Description: Contains the bakePie function, which checks if essential ingredients (flour, sugar, butter) are present for baking a pie.
 */
"use strict";

function bakePie(pieType, ingredients) {
  let essentialIngredients = ["flour", "sugar", "butter"];

  // Check if any essential ingredient is missing from the ingredients list
  for (const item of essentialIngredients) {
    if (!ingredients.includes(item)) {
      console.warn(`Missing essential ingredient: ${item}`);
      process.exit(1);
    }
  }

  // Else return success message
  return `Successfully baked a ${pieType} pie!`;
}

module.exports = { bakePie };
