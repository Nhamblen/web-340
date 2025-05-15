// Script logs an array of game character objects to the console as a JSON string
console.log(
  JSON.stringify([
    { class: "Warrior", gender: "Male", funFact: "Wields a massive axe" },
    { class: "Mage", gender: "Female", funFact: "Throws snowballs" },
    { class: "Rogue", gender: "Other", funFact: "Is clumsy" },
  ])
);
