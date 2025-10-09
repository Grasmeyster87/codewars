/*

In this kata you need to build a function to return either true/True or false/False if a string can be seen as the repetition of a simpler/shorter subpattern or not.

For example:

hasSubpattern("a") === false; //no repeated pattern
hasSubpattern("aaaa") === true; //created repeating "a"
hasSubpattern("abcd") === false; //no repeated pattern
hasSubpattern("abababab") === true; //created repeating "ab"
hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern

Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).

If you liked it, go for the next kata of the series!

*/

function hasSubpattern(string){
   const n = string.length;

    for (let len = 1; len <= n / 2; len++) {
        // Only consider lengths that divide n evenly
        if (n % len === 0) {
            let subPattern = string.substring(0, len);
            let repeated = true;

            for (let i = len; i < n; i += len) {
                if (string.substring(i, i + len) !== subPattern) {
                    repeated = false;
                    break;
                }
            }

            // If the substring repeats correctly across the entire string
            if (repeated) return true;
        }
    }

    return false;
}

/*test

const { assert } = require('chai');

describe("String subpattern recognition",() =>{
  it("Example tests", function() {
    assert.strictEqual(hasSubpattern("a"),            false, 'hasSubpattern("a")');
    assert.strictEqual(hasSubpattern("aaaa"),         true,  'hasSubpattern("aaaa")');
    assert.strictEqual(hasSubpattern("abcd"),         false, 'hasSubpattern("abcd")');
    assert.strictEqual(hasSubpattern("abababab"),     true,  'hasSubpattern("abababab")');
    assert.strictEqual(hasSubpattern("ababababa"),    false, 'hasSubpattern("ababababa")');
    assert.strictEqual(hasSubpattern("123a123a123a"), true,  'hasSubpattern("123a123a123a")');
    assert.strictEqual(hasSubpattern("123A123a123a"), false, 'hasSubpattern("123A123a123a")');
    assert.strictEqual(hasSubpattern("abbaabbaabba"), true,  'hasSubpattern("abbaabbaabba")');
    assert.strictEqual(hasSubpattern("abbabbabba"),   false, 'hasSubpattern("abbabbabba")');
    assert.strictEqual(hasSubpattern("abcdabcabcd"),  false, 'hasSubpattern("abcdabcabcd")');
  });
});
*/