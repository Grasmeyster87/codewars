function chain(input, fs) {
  return fs.reduce((value, fn) => fn(value), input);
}

module.exports = chain;