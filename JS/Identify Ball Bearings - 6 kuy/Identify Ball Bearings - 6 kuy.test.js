const {assert} = require("chai");
const identifyBB = require("./Identify Ball Bearings - 6 kuy.js");

describe("Identify Ball Bearings", function() {
  it("fixed tests", function() {
    const a = new Bearing(0), b = new Bearing(1), c = new Bearing(2), d = new Bearing(3), e = new Bearing(4);
    assert( identifyBB( [a,b],       buildWeigh(a) ) === a, "You did not identify the deluxe bearing" );
    assert( identifyBB( [a,b,c],     buildWeigh(c) ) === c, "You did not identify the deluxe bearing" );
    assert( identifyBB( [a,b,c],     buildWeigh(b) ) === b, "You did not identify the deluxe bearing" );
    assert( identifyBB( [a,b,c,d,e], buildWeigh(d) ) === d, "You did not identify the deluxe bearing" );
  });
});

class Bearing extends Number {
  toString() { return `Bearing from Box ${ this.valueOf() }`; }
}

function buildWeigh(deluxe) {
  let used = false;
  return function weigh(...bearings) {
    if ( used )
      throw new Error("weigh has already been used!");
    else if ( ! bearings.every( bearing => bearing instanceof Bearing ) )
      throw new Error("all arguments should be bearings!");
    else {
      used = true;
      return bearings.reduce( (weight,bearing) => weight + 10 + Number(bearing === deluxe) , 0 );
    }
  } ;
}