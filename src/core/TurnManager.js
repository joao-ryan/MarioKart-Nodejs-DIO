const MovementSystem = require("../systems/MovementSystem");
const ItemSystem = require("../systems/ItemSystem");

processPlayerTurn(player){
  const opponents = this.players.filter(p => p !== player);

  ItemSystem.tryGetItem(player);

  if (player.item) {
    ItemSystem.useItem(player, opponents);
  }

  MovementSystem.move(player);

  console.log(`${player.name} → ${player.position}`);
}