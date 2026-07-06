function likes(names) {
    let quantity = names.length;
    if (quantity == 0) {
        return 'no one likes this';
    } else if (quantity == 1){
        return `${names[0]} likes this`
    } else if (quantity == 2){
        return `${names[0]} and ${names[1]} like this`
    } else if (quantity == 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (quantity > 3){
        return `${names[0]}, ${names[1]} and ${quantity - 2} others like this`
    }  
}

module.exports = likes;

/*
function likes([a, b, c, ...rest] = []) {
    if (!a) return 'no one likes this';
    if (!b) return `${a} likes this`;
    if (!c) return `${a} and ${b} like this`;
    if (!rest.length) return `${a}, ${b} and ${c} like this`;
    return `${a}, ${b} and ${rest.length + 1} others like this`;
}

module.exports = likes;
*/