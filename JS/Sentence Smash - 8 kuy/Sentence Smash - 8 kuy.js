function smash (words) {
   return words.join(' ');
};

let result = smash(['this', 'is', 'a', 'really', 'long', 'sentence']);
console.log(result);
module.exports = smash;
