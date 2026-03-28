const boost = new Item("Boost", (user) => {
  user.position += 15;
});

const banana = new Item("Banana", (user, targets) => {
  const target = targets[0];
  target.position -= 10;
});

module.exports = { boost, banana };