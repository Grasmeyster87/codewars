/*
Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.
Notes:

    Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

    If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

    Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.
//------------------
Каждому начинающему хакеру нужен псевдоним! Phantom Phreak, Acid Burn, Zero Cool и Crash Override — яркие примеры из фильма «Хакеры».

Ваша задача — создать функцию, которая, указав правильные имя и фамилию, вернет правильный псевдоним.

Примечания:

Уже заданы два объекта, возвращающие имя из одного слова в ответ на первую букву имени, и один — на первую букву фамилии. Подробнее см. примеры ниже.

Если первый символ любого из имён, заданных функции, не является буквой от A до Z, вы должны вернуть «Ваше имя должно начинаться с буквы от A до Z».

Иногда люди забывают писать имя заглавным, поэтому ваша функция должна учитывать эти грамматические ошибки.
*/

const firstName = {
    A: "Alpha", B: "Beta", C: "Cache", D: "Data", E: "Electron",
    F: "Function", G: "Glitch", H: "Half-life", I: "Ice", J: "Java",
    K: "Kernel", L: "Logic", M: "Malware", N: "Nagware", O: "Overclock",
    P: "Payload", Q: "Quantum", R: "Router", S: "Spyware", T: "Trojan",
    U: "Ultraviolet", V: "Vanilla", W: "WiFi", X: "Xerox", Y: "Yobibyte",
    Z: "Zero"
};

const surname = {
    A: "Analogue", B: "Bomb", C: "Catalyst", D: "Discharge", E: "Electron",
    F: "Flux", G: "Gigabyte", H: "Hacker", I: "IP", J: "Jabber",
    K: "Killer", L: "Laser", M: "Mike", N: "Nuke", O: "Override",
    P: "Payload", Q: "Quark", R: "Reboot", S: "Spy", T: "T-Rex",
    U: "Ultrasound", V: "Virus", W: "Worm", X: "Xenon", Y: "Yoda",
    Z: "Zombie"
};

function aliasGen(first, last) {
    const firstInitial = first[0].toUpperCase();
    const lastInitial = last[0].toUpperCase();

    if (!/^[A-Z]$/.test(firstInitial) || !/^[A-Z]$/.test(lastInitial)) {
        return "Your name must start with a letter from A - Z.";
    }

    return `${firstName[firstInitial]} ${surname[lastInitial]}`;
}

// тесты 
console.log(aliasGen("Mike", "Millington"));     // "Malware Mike"
console.log(aliasGen("Fahima", "Tash"),);        // "Function T-Rex"
console.log(aliasGen("Daisy", "Petrovic"));      // "Data Payload"
console.log(aliasGen("7393424", "Anumbha"));     // "Your name must start with a letter from A - Z."
console.log(aliasGen("Anuddanumbha", "23200"));  // "Your name must start with a letter from A - Z."