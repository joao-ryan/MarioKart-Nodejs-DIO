const RandomService = require("../services/RandomService");
const { boost, banana } = require("../entities/items");

class ItemSystem {
  static tryGetItem(player) {
    if (RandomService.chance(0.3)) {
      player.item = RandomService.pick([boost, banana]);
      console.log(`${player.name} pegou ${player.item.name}`);
    }
  }

  static useItem(player, opponents) {
    if (!player.item) return;

    player.item.use(player, opponents);
    console.log(`${player.name} usou ${player.item.name}`);

    player.item = null;
  }
}

module.exports = ItemSystem;