const Substitution = () => {
    return {
        Encrypt: (word) => {
            return word
            .split('')
            .map(char => char.charCodeAt(0) + 58)
            .join('');
        },
        Decrypt: (word) => {
            let result = '';
            for(let i = 0; i < word.length; i += 3) {
                let num = parseInt(word.substring(i, i + 3));
                result += String.fromCharCode(num - 58);
            }
            return result;
        },
    };
};

module.exports = Substitution;
