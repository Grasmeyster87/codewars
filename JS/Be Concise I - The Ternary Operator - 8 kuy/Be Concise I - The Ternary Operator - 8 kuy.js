/*function describeAge(age) {
  if (age <= 12) {
    return "You're a(n) kid";
  } else if (age >= 13 && age <= 17) {
    return "You're a(n) teenager";
  } else if (age >= 18 && age <= 64) {
    return "You're a(n) adult";
  } else {
    return "You're a(n) elderly";
  }
}
*/

function describeAge(a){
  return "You're a(n) "+(a<=12?"kid":a<=17?"teenager":a<=64?"adult":"elderly")
}

module.exports = describeAge;