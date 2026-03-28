class RandomService {
  static chance(probability) {
    return Math.random() < probability;
  }

  static pick(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}

module.exports = RandomService;