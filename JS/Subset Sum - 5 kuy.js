/*
Given a possibly empty list of strictly positive numbers and a non-negative target number, return either a subset of the list summing to the target, 
or null or a similar empty value if no such subset exists.

The subset must consist of unique ( by index ) list elements.
If a particular value occurs more than once in the input list, you can use it up to as many times as it occurs.
The empty subset sums to 0.
If multiple valid subsets exist, return any one of them.

The target will never be much bigger than the sum of the input list, and often quite a bit smaller.

//-------------------------------
Дан потенциально пустой список строго положительных чисел и неотрицательное целевое число. Вернуть либо подмножество списка, 
сумма которого равна целевому значению, либо null или аналогичное пустое значение, если такого подмножества не существует.

Подмножество должно состоять из уникальных (по индексу) элементов списка.
Если конкретное значение встречается во входном списке более одного раза, его можно использовать столько раз, сколько раз оно встречается.
Сумма пустого подмножества равна 0.
Если существует несколько допустимых подмножеств, вернуть любое из них.

Целевое значение никогда не будет намного больше суммы входного списка, а зачастую и значительно меньше.
*/
function subsetSum(xs, target) {
  if (target === 0) {
    return [];
  }
  
  const dp = new Array(target + 1).fill(null);
  dp[0] = [];

  for (const num of xs) {
    for (let j = target; j >= num; j--) {
      if (dp[j - num] !== null) {
        dp[j] = [...dp[j - num], num];
      }
    }
  }

  return dp[target];
}


/* ----- test
const { assert } = require("chai");

describe(`Subset Sum`, () => {
  it(`fixed tests`, () => {
    test( possible, [], 0 );
    test( impossible, [], 2 );
    test( possible, [1,2,3,4,5], 0 );
    test( possible, [1,2,3,4,5], 2 );
    test( possible, [1,2,3,4,5], 4 );
    test( possible, [1,2,3,4,5], 6 );
    test( possible, [1,2,3,4,5], 8 );
    test( possible, [1,2,3,4,5], 10 );
    test( possible, [1,2,3,4,5], 12 );
    test( possible, [1,2,3,4,5], 14 );
    test( impossible, [1,2,3,4,5], 16 );
    test( impossible, [2,4,6,8,10], 17 );
  });
  it(`edge case tests`, () => {
    test( possible, [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 64 );
    test( possible, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1], 64 );
  });
});

const impossible = false, possible = true;

function test(possible,xs,target) {
  const actual = subsetSum(xs,target);
  const message = `subsetSum( ${ JSON.stringify(xs) }, ${ target } ) returned ${ JSON.stringify(actual) }\n\n`;
  if ( actual )
    assert.strictEqual( sum(actual), target, message + `solution should sum to target` ),
    assert( isSubsetOf(actual,xs), message + `solution should be a subset of input` );
  else
    assert( possible === impossible, message + `a solution is possible but was not returned` );
}

function isSubsetOf(xs,ys) {
  return new Counter(xs).le(new Counter(ys));
}

const plus = (x,y) => y + x , sum = xs => xs.reduce(plus,0) ;

class Counter extends Map {
  constructor(xs) { super(); for ( const x of xs ) this.inc(x) }
  get0(i) { return this.get(i) || 0 }
  inc(i) { return this.set( i, this.get0(i) + 1 ) }
  le(that) { for ( const [i,x] of this ) if ( x > that.get0(i) ) return false; return true }
}
*/