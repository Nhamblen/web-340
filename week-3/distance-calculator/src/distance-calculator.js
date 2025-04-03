"use strict";

function calculateDistance(planet1, planet2) {
  const planetDistances = {
    Mercury: 0.39,
    Venus: 0.72,
    Earth: 1.0,
    Mars: 1.52,
    Jupiter: 5.2,
    Saturn: 9.58,
    Uranus: 19.18,
    Neptune: 30.07,
  };

  if (!(planet1 in planetDistances) || !(planet2 in planetDistances)) {
    throw new Error("Invalid planet name");
  }

  return Math.abs(planetDistances[planet1] - planetDistances[planet2]);
}

module.exports = calculateDistance;
