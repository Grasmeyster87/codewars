function wrap(value) {
  return {
    value : value 
  };
}
console.log(wrap("MyTest"))  // {value: "MyTest"}

module.exports = wrap;