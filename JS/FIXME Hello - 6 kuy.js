/*
The code provided has a method hello which is supposed to show only those attributes which have been explicitly set. Furthermore, it is supposed to say them in the same order they were set.

But it's not working properly.
Notes

There are 3 attributes

    name
    age
    sex ('M' or 'F')

When the same attribute is assigned multiple times the hello method shows it only once. If this happens the order depends on the first assignment of that attribute, but the value is from the last assignment.
Examples

    Hello.
    Hello. My name is Bob. I am 27. I am male.
    Hello. I am 27. I am male. My name is Bob.
    Hello. My name is Alice. I am female.
    Hello. My name is Batman.

Task

Fix the code so we can all go home early.

//----------------------------------------

В представленном коде есть метод hello, который должен отображать только явно заданные атрибуты. Более того, он должен отображать их в том же порядке, в котором они были заданы.

Но он работает неправильно.

Примечания

Есть 3 атрибута:

имя

возраст

пол («М» или «Ж»)

Если один и тот же атрибут назначается несколько раз, метод hello отображает его только один раз. В этом случае порядок зависит от первого назначения этого атрибута, но значение берётся из последнего назначения.

Примеры

Здравствуйте.

Здравствуйте. Меня зовут Боб. Мне 27 лет. Я мужчина.

Здравствуйте. Мне 27 лет. Я мужчина. Меня зовут Боб.

Здравствуйте. Меня зовут Алиса. Я женщина.

Здравствуйте. Меня зовут Бэтмен.

Задание

Исправьте код, чтобы мы все могли уйти домой пораньше.


*/

/* class Dinglemouse {

    constructor() {
        this.name = this.age = this.sex = 0
    }

    setAge(age) {
        this.age = age
        return this
    }

    setSex(sex) {
        this.sex = sex
        return this
    }

    setName(name) {
        this.name = name
        return this
    }

    hello() {
        return `Hello. My name is ${this.name}. I am ${this.age}. I am ${this.sex == 'M' ? "male" : "female"}.`
    }

} */

class Dinglemouse {
    constructor() {
        this.attributes = new Map(); // Зберігає останні значення атрибутів
        this.order = []; // Зберігає порядок встановлення
    }

    setName(name) {
        if (!this.order.includes("name")) this.order.push("name");
        this.attributes.set("name", name);
        return this;
    }

    setAge(age) {
        if (!this.order.includes("age")) this.order.push("age");
        this.attributes.set("age", age);
        return this;
    }

    setSex(sex) {
        if (!this.order.includes("sex")) this.order.push("sex");
        this.attributes.set("sex", sex);
        return this;
    }

    hello() {
        let result = ["Hello."];
        for (let key of this.order) {
            let value = this.attributes.get(key);
            if (key === "name") {
                result.push(`My name is ${value}.`);
            } else if (key === "age") {
                result.push(`I am ${value}.`);
            } else if (key === "sex") {
                result.push(`I am ${value === 'M' ? "male" : "female"}.`);
            }
        }
        return result.join(" ");
    }
}



//----------------------------------- тесты

describe("ExampleTests", function(){
    it("testBob27Male", function(){
        let dm = new Dinglemouse().setName("Bob").setAge(27).setSex('M')
        let expected = "Hello. My name is Bob. I am 27. I am male."
        doTest(expected, dm.hello())
    })

    it("test27MaleBob", function(){
        let dm = new Dinglemouse().setAge(27).setSex('M').setName("Bob")
        let expected = "Hello. I am 27. I am male. My name is Bob."
        doTest(expected, dm.hello())
    })

    it("testAliceFemale", function(){
        let dm = new Dinglemouse().setName("Alice").setSex('F')
        let expected = "Hello. My name is Alice. I am female."
        doTest(expected, dm.hello())
    })

    it("testBatman", function(){
        let dm = new Dinglemouse().setName("Batman")
        let expected = "Hello. My name is Batman."
        doTest(expected, dm.hello())
    })
})

//----------------------------------------------