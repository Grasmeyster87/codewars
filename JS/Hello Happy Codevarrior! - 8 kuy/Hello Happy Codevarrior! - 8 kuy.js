/*function Warrior(n){
  name = n;  
  this.name = function(n){
    if( n ) name=n;
    return name;
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}*/

function Warrior(n) {
  let name = n;   // локальна змінна

  this.name = function(newName) {
    if (newName) name = newName; // якщо передали аргумент — змінюємо
    return name;                 // інакше повертаємо поточне значення
  };
}

Warrior.prototype.toString = function() {
  return "Hi! my name's " + this.name();
};


module.exports = Warrior;