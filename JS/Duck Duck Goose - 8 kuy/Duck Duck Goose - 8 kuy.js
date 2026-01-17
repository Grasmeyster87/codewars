function duckDuckGoose(players, goose) {
  // позиція починається з 1, тому віднімаємо 1
  // використовуємо модуль, щоб обійти коло
  let index = (goose - 1) % players.length;
  return players[index].name;
}

module.exports = duckDuckGoose;