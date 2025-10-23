/*
Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. 
Each piece of land will be marked with 'X' while the water fields are represented as 'O'. 
Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO'] 

 should return: "Total land perimeter: 24".

 Following input:

['XOOO',
 'XOXO',
 'XOXO',
 'OOXX',
 'OOOO']

which represents:
should return: "Total land perimeter: 18"
*/
const arr1 = ['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO'] ;

function landPerimeter(arr) {
    if (arr.length === 0 || arr[0].length === 0) {
        return "Total land perimeter: 0";
    }

    const rows = arr.length;
    const cols = arr[0].length;
    let perimeter = 0;

    // Проходимо по кожній клітинці
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (arr[i][j] === 'X') {
                // Для кожної клітинки 'X' додаємо 4 сторони
                perimeter += 4;

                // Перевіряємо сусідів зверху
                if (i > 0 && arr[i - 1][j] === 'X') {
                    perimeter -= 1; // Віднімаємо 1, бо спільна сторона
                }

                // Перевіряємо сусідів знизу
                if (i < rows - 1 && arr[i + 1][j] === 'X') {
                    perimeter -= 1;
                }

                // Перевіряємо сусідів зліва
                if (j > 0 && arr[i][j - 1] === 'X') {
                    perimeter -= 1;
                }

                // Перевіряємо сусідів справа
                if (j < cols - 1 && arr[i][j + 1] === 'X') {
                    perimeter -= 1;
                }
            }
        }
    }

    return `Total land perimeter: ${perimeter}`;
}

console.log(landPerimeter(arr1))

/*
const { assert } = require('chai');

describe("Testing", function() {
  it("Test 1 should return 'Total land perimeter: 60'", () => {
    assert.strictEqual(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]), "Total land perimeter: 60");
  });

  it("Test 2 should return 'Total land perimeter: 52'", () => {
    assert.strictEqual(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"]), "Total land perimeter: 52");
  });

  it("Test 3 should return 'Total land perimeter: 40'", () => {
    assert.strictEqual(landPerimeter(["XXXXXOOO", "OOXOOOOO", "OOOOOOXO", "XXXOOOXO", "OXOXXOOX"]), "Total land perimeter: 40");
  });

  it("Test 4 should return 'Total land perimeter: 54'", () => {
    assert.strictEqual(landPerimeter(["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"]), "Total land perimeter: 54");
  });

  it("Test 5 should return 'Total land perimeter: 40'", () => {
    assert.strictEqual(landPerimeter(["OOOOXO", "XOXOOX", "XXOXOX", "XOXOOO", "OOOOOO", "OOOXOO", "OOXXOO"]), "Total land perimeter: 40");
  });
});
*/