const GameEngine = require("./core/GameEngine");
const Player = require("./entities/Player");
const Track = require("./entities/Track");
const Race = require("./core/Race");
const EventSystem = require("./systems/EventSystem");
const Logger = require("./services/LoggerService");

// Criar jogadores
const players = [
  new Player("Mario"),
  new Player("Luigi"),
  new Player("Yoshi")
];

// Criar pista
const track = new Track(100);

// Criar sistemas
const eventSystem = new EventSystem();

// Criar corrida
const race = new Race(players, track);

// Criar engine
const game = new GameEngine(players, track);

// Injetar dependências (nível profissional)
game.race = race;
game.eventSystem = eventSystem;
game.logger = Logger;

// Eventos (DESACOPLADO 🔥)
eventSystem.on("itemUsed", ({ player, item }) => {
  Logger.event(`${player.name} usou ${item.name}`);
});

eventSystem.on("playerMove", (player) => {
  Logger.info(`${player.name} avançou para ${player.position}`);
});

// Start
game.start();