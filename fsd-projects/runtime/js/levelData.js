var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 125, damage: 10, image: "img/sawblade.png", offsetX: -25, offsetY: -25, scale: 1, rotation: 2},
          { type: "sawblade", x: 600, y: groundY - 125, damage: 10, image: "img/sawblade.png", offsetX: -25, offsetY: -25, scale: 1, rotation: 2},
          { type: "sawblade", x: 800, y: groundY - 125, damage: 15, image: "img/sawblade.png", offsetX: -25, offsetY: -25, scale: 1, rotation: 2},
          { type: "enemy", x: 700, y: groundY - 50, speed: -2, image: "img/flyingmonkeyYES.png", offsetX: -90, offsetY: -90, scale: 0.12},
          { type: "enemy", x: 500, y: groundY - 50, speed: -2, image: "img/flyingmonkeyYES.png", offsetX: -90, offsetY: -90, scale: 0.12},
          { type: "reward", x: 1600, y: groundY - 50, speed: -3, image: "img/Background.png", offsetX: -35, offsetY: -70, scale: 0.23},
          { type: "marker", x: 1750, y: groundY - 50, speed: -3, image: "img/elphabaYES.png", offsetX: -70, offsetY: -95, scale: 0.3},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 125, damage: 10, image: "img/sawblade.png", offsetX: -25, offsetY: -25, scale: 1, rotation: 2},
          { type: "sawblade", x: 600, y: groundY - 125, damage: 10, image: "img/sawblade.png", offsetX: -25, offsetY: -25, scale: 1, rotation: 2},
          { type: "sawblade", x: 800, y: groundY - 125, damage: 15, image: "img/sawblade.png", offsetX: -25, offsetY: -25, scale: 1, rotation: 2},
          { type: "enemy", x: 700, y: groundY - 50, speed: -2, image: "img/OZMAN.png", offsetX: -30, offsetY: -80, scale: 0.3},
          { type: "enemy", x: 500, y: groundY - 50, speed: -2, image: "img/EVILLg.png", offsetX: -80, offsetY: -60, scale: 0.7},
          { type: "reward", x: 1600, y: groundY - 50, speed: -3, image: "img/goatguy.png", offsetX: -70, offsetY: -90, scale: 0.12},
          { type: "marker", x: 1750, y: groundY - 50, speed: -3, image: "img/elphabaYES.png", offsetX: -70, offsetY: -95, scale: 0.3},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
