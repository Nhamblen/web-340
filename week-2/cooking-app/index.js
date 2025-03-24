/**
 * Author: Noah Hamblen
 * Date: 3/24/25
 * File Name: index.js
 * Description: Import testing
 */

const { createRecipe, setTimer, quit } = require("./recipes");

console.log(createRecipe(["ingredient1", "ingredient2"]));
console.log(setTimer(15));
console.log(quit());
