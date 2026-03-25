class Player {
  constructor(name) {
    this.name = name;
    this.position = 0;
    this.speed = 0;
    this.item = null;
    this.status = [];
  }

  applyEffect(effect) {
    this.status.push(effect);
  }
}

module.exports = Player;