const inquirer = require("inquirer");

class CLI {
  static async chooseAction(player) {
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: `${player.name}, escolha:`,
        choices: ["Acelerar", "Usar Item", "Nada"]
      }
    ]);

    return answer.action;
  }
}

module.exports = CLI;