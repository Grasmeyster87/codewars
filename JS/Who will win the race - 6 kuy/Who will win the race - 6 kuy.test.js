const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const whoWillWin = require("./Who will win the race - 6 kuy");

describe("Basic Tests", function() {
  it("Alex wins", function() {
    assert.deepEqual(whoWillWin([
      {name:"Alex",speed:"3 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Sophia",speed:"6 meter(s) per second",distanceToRun:"300 meter(s)"},
      {name:"Timmy",speed:"4 meter(s) per second",distanceToRun:"200 meter(s)"},
      {name:"Ben",speed:"2 meter(s) per second",distanceToRun:"68 meter(s)"},
    ]), "Alex won the race in 33 second(s)!");
  });
  
  it("No racers", function() {
    assert.deepEqual(whoWillWin([]), "No one raced!");
  });
  
  it("Just a turtle", function() {
    assert.deepEqual(whoWillWin([
      {name:"A Turtle",speed:"0.1 meter(s) per second",distanceToRun:"1000 meter(s)"}
    ]), "A Turtle won the race in 10000 second(s)!");
  });

  it("Everyone gets disqualified", function() {
    assert.deepEqual(whoWillWin([
      {name:"Backwards Bob",speed:"-1 meter(s) per second",distanceToRun:"1 meter(s)"},
      {name:"Supersonic Shirly",speed:"10000 meter(s) per second",distanceToRun:"0 meter(s)"},
      {name:"Backwards Larry",speed:"-1 meter(s) per second",distanceToRun:"0 meter(s)"},
      {name:"A Random Rock",speed:"0 meter(s) per second",distanceToRun:"0 meter(s)"},
      {name:"Another Random Rock",speed:"0 meter(s) per second",distanceToRun:"23 meter(s)"}
    ]), "Everyone was disqualified!");
  });
  
  it("Everyone gets disqualified except a Turtle", function() {
    assert.deepEqual(whoWillWin([
      {name:"Backwards Bob",speed:"-1 meter(s) per second",distanceToRun:"1 meter(s)"},
      {name:"Supersonic Shirly",speed:"10000 meter(s) per second",distanceToRun:"0 meter(s)"},
      {name:"Backwards Larry",speed:"-1 meter(s) per second",distanceToRun:"0 meter(s)"},
      {name:"A Random Rock",speed:"0 meter(s) per second",distanceToRun:"0 meter(s)"},
      {name:"Another Random Rock",speed:"0 meter(s) per second",distanceToRun:"23 meter(s)"},
      {name:"A Turtle",speed:"0.1 meter(s) per second",distanceToRun:"1000 meter(s)"}
    ]), "A Turtle won the race in 10000 second(s)!");
  });
  
  it("A NASCAR Race", function() {
    assert.deepEqual(whoWillWin([
      {name:"Racecar #1",speed:"62.4 meter(s) per second",distanceToRun:"2000 meter(s)"},
      {name:"Racecar #2",speed:"64.5 meter(s) per second",distanceToRun:"2000 meter(s)"},
      {name:"Racecar #3",speed:"54.3 meter(s) per second",distanceToRun:"2000 meter(s)"},
      {name:"Racecar #4",speed:"58.8 meter(s) per second",distanceToRun:"2000 meter(s)"},
    ]), "Racecar #2 won the race in 31 second(s)!");
  });
  
  it("A Turtle wins a NASCAR Race?", function() {
    assert.deepEqual(whoWillWin([
      {name:"Racecar #1",speed:"62.4 meter(s) per second",distanceToRun:"2000 meter(s)"},
      {name:"Racecar #2",speed:"64.5 meter(s) per second",distanceToRun:"2000 meter(s)"},
      {name:"Racecar #3",speed:"54.3 meter(s) per second",distanceToRun:"2000 meter(s)"},
      {name:"Racecar #4",speed:"58.8 meter(s) per second",distanceToRun:"2000 meter(s)"},
      {name:"A Turtle",speed:"0.1 meter(s) per second",distanceToRun:"3 meter(s)"}
    ]), "A Turtle won the race in 30 second(s)!");
  });
  
  it("Alex and Sophia tie", function() {
    assert.deepEqual(whoWillWin([
      {name:"Alex",speed:"3 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Sophia",speed:"6 meter(s) per second",distanceToRun:"200 meter(s)"},
    ]), "2 people tied in 33 second(s)!");
  });
  
  it("Alex wins by a hair", function() {
    assert.deepEqual(whoWillWin([
      {name:"Alex",speed:"3.01 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Sophia",speed:"3 meter(s) per second",distanceToRun:"100 meter(s)"},
    ]), "Alex won the race in 33 second(s)!");
  });
  
  it("10 robots tie", function() {
    assert.deepEqual(whoWillWin([
      {name:"Robot #1",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #2",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #3",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #4",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #5",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #6",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #7",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #8",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #9",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #10",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"}
    ]), "10 people tied in 10 second(s)!");
  });
  
  it("5 robots tie and 5 are disqualified", function() {
    assert.deepEqual(whoWillWin([
      {name:"Robot #1",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #2",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #3",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #4",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #5",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #6",speed:"10 meter(s) per second",distanceToRun:"0 meter(s)"},
      {name:"Robot #7",speed:"10 meter(s) per second",distanceToRun:"-100 meter(s)"},
      {name:"Robot #8",speed:"0 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #9",speed:"-10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #10",speed:"-100 meter(s) per second",distanceToRun:"-100 meter(s)"}
    ]), "5 people tied in 10 second(s)!");
  });
  
  it("A slightly faster robot wins and 5 are disqualified", function() {
    assert.deepEqual(whoWillWin([
      {name:"Robot #1",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #2",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #3",speed:"11 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #4",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #5",speed:"10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #6",speed:"10 meter(s) per second",distanceToRun:"0 meter(s)"},
      {name:"Robot #7",speed:"10 meter(s) per second",distanceToRun:"-100 meter(s)"},
      {name:"Robot #8",speed:"0 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #9",speed:"-10 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Robot #10",speed:"-100 meter(s) per second",distanceToRun:"-100 meter(s)"}
    ]), "Robot #3 won the race in 9 second(s)!");
  });
});