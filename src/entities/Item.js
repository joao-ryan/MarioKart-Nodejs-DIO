class Item {
  constructor(name, effect) {
    this.name = name;
    this.effect = effect;
  }

  use(user, targets) {
    this.effect(user, targets);
  }
}

module.exports = Item;