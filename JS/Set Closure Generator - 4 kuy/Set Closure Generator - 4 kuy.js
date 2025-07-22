//npm install @datastructures-js/priority-queue  Очередь с приоритетом (min-heap). Node.js не содержит такую по умолчанию, поэтому для работы тестов можно использовать

/*
Given a set of integers S, the closure of S under multiplication is the smallest set that contains S and such that for any x, 
y in the closure of S, the product x * y is also in the closure of S.

Example 1: Given S = {2}, the closure of S is the set {2, 4, 8, 16, 32, 64, ... }.

Example 2: Given S = {1, 2, 3}, the closure of S is the set {1, 2, 3, 4, 6, 8, 9, 12, 16, 18, 24, 27, 32, 36, ...}. 
This set contains, e.g, 6 because 6 = 2 * 3. It further contains 12 and 18 because 12 = 2 * 6 and 18 = 3 * 6. Etc.

Example 3: Given S the set of prime numbers, the closure of S is the set of all positive integers greater than or equal to 2.

Your task is to write a generator function that generates the members of the closure of any given finite set of positive numbers S in ascending order.
//------------------------------------------------
Для заданного множества целых чисел S замыкание S при умножении — это наименьшее множество, содержащее S и такое, что для любых x, 
y из замыкания S произведение x * y также содержится в замыкании S.

Пример 1: Если S = {2}, замыканием S является множество {2, 4, 8, 16, 32, 64, ... }.

Пример 2: Если S = {1, 2, 3}, замыканием S является множество {1, 2, 3, 4, 6, 8, 9, 12, 16, 18, 24, 27, 32, 36, ...}. 
Это множество содержит, например, 6, потому что 6 = 2 * 3. Оно также содержит 12 и 18, потому что 12 = 2 * 6 и 18 = 3 * 6. И так далее.

Пример 3: Если S — множество простых чисел, то замыкание S — это множество всех положительных целых чисел, больших или равных 2.

Ваша задача — написать функцию-генератор, которая генерирует элементы замыкания любого заданного конечного множества 
положительных чисел S в порядке возрастания.
*/
/* const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

function* closureGen(S) {
  const seen = new Set();                  // Храним уже посещённые числа
  const pq = new MinPriorityQueue();       // Очередь с приоритетом для чисел в порядке возрастания

  for (const x of S) {
    if (!seen.has(x)) {
      pq.enqueue(x, x);                    // Приоритет = значение
      seen.add(x);
    }
  }

  while (!pq.isEmpty()) {
    const current = pq.dequeue().element;
    yield current;

    for (const x of seen) {
      const prod = current * x;
      if (!seen.has(prod)) {
        seen.add(prod);
        pq.enqueue(prod, prod);
      }
    }
  }
} */

/*   function* closureGen(S) {
  const seen = new Set();         // Set<bigint>
  const heap = [];
  const resultList = [];

  const add = x => {
    if (!seen.has(x)) {
      seen.add(x);
      heapPush(heap, x);
    }
  };

  for (const x of S) {
    add(x);
  }

  while (heap.length > 0) {
    const current = heapPop(heap);
    yield current;
    resultList.push(current);

    for (const x of resultList) {
      const prod = current * x;
      if (!seen.has(prod)) {
        seen.add(prod);
        heapPush(heap, prod);
      }
    }
  }
}

// ---------- Min Heap (на BigInt)
function heapPush(heap, value) {
  heap.push(value);
  let i = heap.length - 1;
  while (i > 0) {
    const parent = Math.floor((i - 1) / 2);
    if (heap[parent] <= heap[i]) break;
    [heap[parent], heap[i]] = [heap[i], heap[parent]];
    i = parent;
  }
}

function heapPop(heap) {
  const result = heap[0];
  const last = heap.pop();
  if (heap.length === 0) return result;
  heap[0] = last;
  let i = 0;
  while (true) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let smallest = i;

    if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
    if (right < heap.length && heap[right] < heap[smallest]) smallest = right;
    if (smallest === i) break;
    [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
    i = smallest;
  }
  return result;
} */

function* closureGen(S) {
  if (S.length === 0) return;

  const base = Array.from(new Set(S.map(BigInt))).sort((a, b) => (a < b ? -1 : 1));
  const seen = new Set();
  const heap = [];

  const add = x => {
    const key = x.toString();
    if (!seen.has(key)) {
      seen.add(key);
      heapPush(heap, x);
    }
  };

  for (const x of base) {
    add(x);
  }

  const output = [];

  while (heap.length > 0) {
    const curr = heapPop(heap);
    yield curr;
    output.push(curr);

    for (const x of base) {
      const prod = curr * x;
      // Т.к. замыкание должно быть замкнуто, добавляем только если прод не был сгенерирован
      if (!seen.has(prod.toString())) {
        add(prod);
      }
    }
  }
}

// ---------- Min Heap (на BigInt)
function heapPush(heap, value) {
  heap.push(value);
  let i = heap.length - 1;
  while (i > 0) {
    const parent = Math.floor((i - 1) / 2);
    if (heap[parent] <= heap[i]) break;
    [heap[parent], heap[i]] = [heap[i], heap[parent]];
    i = parent;
  }
}

function heapPop(heap) {
  const result = heap[0];
  const last = heap.pop();
  if (heap.length === 0) return result;
  heap[0] = last;
  let i = 0;
  while (true) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let smallest = i;

    if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
    if (right < heap.length && heap[right] < heap[smallest]) smallest = right;
    if (smallest === i) break;
    [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
    i = smallest;
  }
  return result;
}




/*
//----------------------- тесты
const {assert,config} = require("chai"); config.truncateThreshold = 0;
const take = n => xs => Array.from( function*() { for ( const x of xs ) if ( n-- ) yield x; else return; } () ) ;

describe("Set closure generator", function() {
  describe("fixed tests", function() {
    it("empty set", function() {
      assert.deepEqual( take(1)(closureGen([])), [] );
    });
    it("singleton unit", function() {
      assert.deepEqual( take(2)(closureGen([1n])), [1n] );
    });
    it("singleton non-unit", function() {
      assert.deepEqual( take(10)(closureGen([2n])), [2n,4n,8n,16n,32n,64n,128n,256n,512n,1024n] );
    });
    it("doubletons", function() {
      assert.deepEqual( take(10)(closureGen([2n,3n])), [2n, 3n, 4n, 6n, 8n, 9n, 12n, 16n, 18n, 24n] );
      assert.deepEqual( take(10)(closureGen([7n,2n])), [2n, 4n, 7n, 8n, 14n, 16n, 28n, 32n, 49n, 56n] );
    });
    it("100th element - small gaps", function() {
      assert.strictEqual( take(100)(closureGen([1n,2n,3n,5n,7n,11n]))[99], 280n );
    });
    it("100th element - large gaps", function() {
      assert.strictEqual( take(100)(closureGen([131n,1001n,2003n]))[99], 16_128_424_744_729_378_081n );
    });
  });
});
*/

const take = n => xs => Array.from((function* () {
  for (const x of xs)
    if (n--) yield x;
    else return;
})());

console.log(take(10)(closureGen([2n, 3n])));
// [2n, 3n, 4n, 6n, 8n, 9n, 12n, 16n, 18n, 24n]

console.log(take(10)(closureGen([7n, 2n])));
// [2n, 4n, 7n, 8n, 14n, 16n, 28n, 32n, 49n, 56n]

console.log(take(10)(closureGen([131n, 1001n, 2003n])));
// Работает и не зависает