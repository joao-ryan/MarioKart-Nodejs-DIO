const chalk = require("chalk");

class LoggerService {
  static info(message) {
    console.log(chalk.blue(`ℹ️ ${message}`));
  }

  static success(message) {
    console.log(chalk.green(`✅ ${message}`));
  }

  static warning(message) {
    console.log(chalk.yellow(`⚠️ ${message}`));
  }

  static error(message) {
    console.log(chalk.red(`❌ ${message}`));
  }

  static event(message) {
    console.log(chalk.magenta(`🎮 ${message}`));
  }
}

module.exports = LoggerService;