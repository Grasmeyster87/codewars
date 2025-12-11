const rps = (p1, p2) => {
    if (p1 === p2) return 'Draw!';
    if (
        (p1 === 'rock' && p2 === 'scissors') ||
        (p1 === 'scissors' && p2 === 'paper') ||
        (p1 === 'paper' && p2 === 'rock')
    ) {
        return 'Player 1 won!';
    } else {
        return 'Player 2 won!';
    }
};

let res = rps('scissors', 'rock');
let res1 = rps('scissors', 'paper');
let res2 = rps('rock', 'paper');
let res3 = rps('rock', 'rock');

console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);

module.exports = rps;
