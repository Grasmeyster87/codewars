function onlyOne(...args) {
  return args.filter(Boolean).length === 1;
}

console.log(onlyOne(true, false));
module.exports = onlyOne;