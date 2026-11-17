/* function launchAll(launchMissile) {
  for(var i = 0; i < 5; i++) {
    setTimeout(function() {
      launchMissile(i);
    }, i * 1000);
  }
} */

function launchAll(launchMissile) {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            launchMissile(i);
        }, i * 1000);
    }
}
module.exports = launchAll;
