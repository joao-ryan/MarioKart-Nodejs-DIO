const RandomService = require("../services/RandomService");

class MovementSystem {
  static move(player) {
    const baseSpeed = Math.floor(Math.random() * 10) + 1;

    player.position += baseSpeed;
  }
}

module.exports = MovementSystem;