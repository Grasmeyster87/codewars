function maxMatch(sentence) {
    let result = [];

    function helper(s) {
        if (s.length === 0) return;

        // ищем самое длинное слово
        for (let i = s.length; i > 0; i--) {
            let word = s.slice(0, i);
            if (VALID_WORDS.has(word)) {
                result.push(word);
                helper(s.slice(i));
                return;
            }
        }

        // если ничего не нашли — берём первый символ
        result.push(s[0]);
        helper(s.slice(1));
    }

    helper(sentence);
    return result;
}
const VALID_WORDS = new Set(["good", "luck", "happy", "day", "in"]);
module.exports = maxMatch;