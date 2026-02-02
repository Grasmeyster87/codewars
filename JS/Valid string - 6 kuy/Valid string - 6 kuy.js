var validWord = function (dictionary, word) {
    if (dictionary.length === 0) return false;
    const dictSet = new Set(dictionary);

    // dp[i] = true, если префикс word[0..i] можна составить из слов словаря
    const dp = Array(word.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= word.length; i++) {
        for(let j=0; j <=i; j++) {
            if (dp[j] && dictSet.has(word.slice(j, i))){
                dp[i] = true;
                break;
            }
        }
    }
    return dp[word.length];
};

module.exports = validWord;
