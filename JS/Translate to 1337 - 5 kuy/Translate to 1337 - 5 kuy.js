const SCROLL = {
    a: ['4', '@'],
    b: ['|3', '8'],
    d: ['|)', 'o|'],
    e: ['3'],
    f: ['|='],
    g: ['9', '6'],
    h: ['|-|', ']-[', '}-{', '(-)', ')-(', '#'],
    i: ['1', '!', ']['],
    j: ['_|'],
    k: ['|<', '|{'],
    l: ['|_'],
    n: ['|\\|'],
    o: ['0'],
    p: ['|2', '|D'],
    q: ['(,)'],
    r: ['|Z', '|?'],
    s: ['5', '$'],
    t: ['+', '7'],
    v: ['|/', '\\/'],
    w: ['\\^/', '//'],
    x: ['><', '}{'],
    y: ['`/'],
    z: ['(\\)'],
};

function toLeet(str) {
    const counters = {};
    let result = '';

    for (const ch of str) {
        const keys = SCROLL[ch];
        if (!keys) {
            result += ch;
            continue;
        }
        const n = counters[ch] || 0;
        result += keys[n % keys.length];
        counters[ch] = n + 1;
    }
    return result;
}

module.exports = {toLeet, SCROLL};

//console.log(toLeet('stupid')) // '5+u|21|)'