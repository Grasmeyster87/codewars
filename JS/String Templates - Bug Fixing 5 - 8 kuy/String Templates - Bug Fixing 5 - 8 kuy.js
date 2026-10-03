function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

module.exports = buildString;

console.log(buildString('Cheese','Milk','Chocolate'))