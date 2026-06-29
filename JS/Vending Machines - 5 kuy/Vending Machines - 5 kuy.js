/*function findSpecialIdx(vms) {
  // FIXME: This isn't a solution :(
  var prediction = 100;
  for (var i = 0 ; i < 100 ; i++) {
    vms[i].vend();
    if (vms.weigh() != prediction) return i;
    else prediction += 100;
  }
};*/


function findSpecialIdx(vms) {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j <= i; j++) {
      vms[i].vend();
    }
  }

  return vms.weigh() - 505000 - 1;
}


module.exports = findSpecialIdx;