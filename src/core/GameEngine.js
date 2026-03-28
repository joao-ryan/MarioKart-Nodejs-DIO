class GameEngine {
  constructor(players, track) {
    this.players = players;
    this.track = track;
    this.turn = 1;

    // dependências (injetadas no index.js)
    this.race = null;
    this.eventSystem = null;
    this.logger = null;
    this.itemSystem = null;
    this.movementSystem = null;
  }

  start() {
    this.logger?.info("🏎️ Corrida iniciada!");

    while (!this.race.finished) {
      this.runTurn();
      this.turn++;
    }

    this.endGame();
  }

  runTurn() {
    this.logger?.event(`--- TURNO ${this.turn} ---`);

    this.players.forEach(player => {
      this.processPlayerTurn(player);
    });

    this.race.update();
    this.printRanking();
  }

  // 👉 AQUI ESTÁ O CARA QUE VOCÊ PERGUNTOU
  processPlayerTurn(player) {
    const opponents = this.players.filter(p => p !== player);

    // chance de pegar item
    this.itemSystem?.tryGetItem(player);

    // usar item
    if (player.item) {
      this.eventSystem.emit("itemUsed", {
        player,
        item: player.item
      });

      this.itemSystem?.useItem(player, opponents);
    }

    // movimentação
    this.movementSystem?.move(player);

    this.eventSystem.emit("playerMove", player);
  }

  printRanking() {
    const ranking = this.race.getRanking();

    this.logger?.info("\n📊 Ranking:");

    ranking.forEach((p, i) => {
      console.log(`${i + 1}º - ${p.name} (${p.position})`);
    });
  }

  endGame() {
    const winner = this.race.winner;
    this.logger?.success(`🏆 ${winner.name} venceu a corrida!`);
  }
}

module.exports = GameEngine;