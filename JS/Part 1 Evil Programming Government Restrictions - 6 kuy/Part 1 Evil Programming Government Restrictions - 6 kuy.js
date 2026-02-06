var anarchy = function () {
  // Math.PI це приблизно 3.14159...
  // Math.floor обрізає дробову частину
  var three = Math.floor(Math.PI); 
  
  // Math.E це приблизно 2.718...
  var two = Math.floor(Math.E);
  
  // 3 - 2 = 1
  var one = three - two;

  return `I can write numbers like, ${one}, ${two}, ${three}.`;
}

module.exports = anarchy;