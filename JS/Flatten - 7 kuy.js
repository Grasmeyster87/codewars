/*
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3])  ==> [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  ==> [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]])  ==> [[1,2,3]]

//------------------------------------

Напишите функцию, которая преобразует массив объектов Array в плоский массив. Функция должна выполнять только один уровень преобразования.
flatten([1,2,3])  ==> [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  ==> [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]])  ==> [[1,2,3]]
*/
function flatten(array) {
    return array.reduce((acc, item) => {
        return Array.isArray(item) ? acc.concat(item) : acc.concat([item]);
    }, []);
}



/*
describe("Tests", () => {
    const chai = require('chai'), {assert} = chai;
    chai.config.truncateThreshold = 0;

    function doTest(array, expected) {
        const message = `array = ${JSON.stringify(array)}\n\n`;
        const actual = flatten(array);
        assert.deepEqual(actual, expected, message);
    }

    it("sample tests", function() {
        doTest([], []);
        doTest([1, 2, 3], [1, 2, 3]);
        doTest([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]], [1, 2, 3, "a", "b", "c", 1, 2, 3]);
        doTest([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]], [3, 4, 5, [9, 9, 9], "a,b,c"]);
        doTest([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]], [[3], [4], [5], 9, 9, 8, [1, 2, 3]]);
    });
});
*/