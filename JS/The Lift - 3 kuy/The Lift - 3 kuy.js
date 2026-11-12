var theLift = function (queues, capacity) {
  // Робимо копію черг, щоб не змінювати вхідні дані
  var waiting = queues.map(function (q) { return q.slice(); });
  var top = waiting.length - 1;
  var stops = [0];
  var lift = []; // пункти призначення пасажирів у ліфті
 
  function visit(floor) {
    if (stops[stops.length - 1] !== floor) stops.push(floor);
  }
 
  function hasPeople() {
    return lift.length > 0 || waiting.some(function (q) { return q.length > 0; });
  }
 
  // Обробка одного поверху: dir = 1 (вгору) або -1 (вниз)
  function process(floor, dir) {
    var stopHere = false;
 
    // 1. Виходять пасажири
    var before = lift.length;
    lift = lift.filter(function (dest) { return dest !== floor; });
    if (lift.length !== before) stopHere = true;
 
    // 2. Ліфт зупиняється, якщо хтось чекає його в цьому напрямку (навіть якщо він повний)
    var queue = waiting[floor];
    var wantsThisWay = queue.some(function (dest) {
      return dir === 1 ? dest > floor : dest < floor;
    });
    if (wantsThisWay) stopHere = true;
 
    // 3. Заходять за чергою ті, хто їде в тому ж напрямку, поки є місце;
    //    ті, кому не вистачило місця, не блокують наступних і залишаються в черзі
    if (wantsThisWay) {
      var rest = [];
      queue.forEach(function (dest) {
        var sameDir = dir === 1 ? dest > floor : dest < floor;
        if (sameDir && lift.length < capacity) lift.push(dest);
        else rest.push(dest);
      });
      waiting[floor] = rest;
    }
 
    if (stopHere) visit(floor);
  }
 
  while (hasPeople()) {
    for (var f = 0; f <= top; f++) process(f, 1);   // рух вгору
    for (var g = top; g >= 0; g--) process(g, -1);  // рух вниз
  }
 
  visit(0); // порожній ліфт повертається на перший поверх
  return stops;
};


module.exports = theLift;