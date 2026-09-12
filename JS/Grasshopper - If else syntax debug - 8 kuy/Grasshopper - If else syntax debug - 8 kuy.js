function checkAlive (health) {
  if (health > 0) {    
    return true
  } else if (health <= 0) {
    return false
  }
}
console.log( checkAlive(5)) // true
console.log(checkAlive(0))  // false

module.exports = checkAlive;