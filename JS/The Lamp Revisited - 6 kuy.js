/*

Define a class called Lamp. It will have a string attribute for color and boolean attribute, on,
that will refer to whether the lamp is on or not. Define your class constructor with 
a parameter for color and assign on as false on initialize.

Give the lamp an instance method called toggleSwitch that will switch the value of the on attribute.

Define another instance method called state that will return "The lamp is on." 
if it's on and "The lamp is off." otherwise.

//----------------------------------------------------------------------------

Определите класс Lamp. Он будет иметь строковый атрибут color и логический атрибут on, 
который будет указывать, включена лампа или нет. Определите конструктор класса с параметром 
color и присвойте on значение false при инициализации.

Добавьте к лампе метод экземпляра toggleSwitch, который будет переключать значение атрибута on.

Определите другой метод экземпляра state, который будет возвращать значение «Лампа включена», 
если она включена, и «Лампа выключена» в противном случае.
*/
class Lamp {
    constructor(color) {
        this.color = color;
        this.on = false;
    }

    toggleSwitch() {
        this.on = !this.on;
    }

    state() {
        if (this.on) {
            return "The lamp is on.";
        } else {
            return "The lamp is off.";
        }
    }
}

/*test
const assert = require('chai').assert;

const myLamp = new Lamp("Blue")

describe("Sample tests", function() {
  it("Lamp", function() {
    assert.strictEqual(myLamp.color, "Blue")
    assert.strictEqual(myLamp.on, false)
    assert.strictEqual(myLamp.state(), "The lamp is off.")
    // now switch it on
    myLamp.toggleSwitch()
    assert.strictEqual(myLamp.state(), "The lamp is on.")
  })
})
*/