function duplicateEncode(word) {    
    return word.toLowerCase().split('').map(
        (el) =>{ 
        let target = el;
        let count = 0;

        for (let i = 0; i < word.length; i++) {
        if (word[i] === target) {
         count++;
        }
        }
        if (count % 2 == 0) {
            el = ')'            
        } else {
            el = '('            

        }
    }
    );
}
let res = duplicateEncode('Success'); //")())())"

console.log(res);

module.exports = duplicateEncode;
