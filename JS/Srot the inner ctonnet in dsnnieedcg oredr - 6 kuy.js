/*

You have to sort the inner content of every word of a string in descending order.

The inner content is the content of a word without first and the last char.

Some examples:
"sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me"        -->  "wiat for me"
"this kata is easy"  -->  "tihs ktaa is esay"

Words are made up of lowercase letters.

The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
//-----------------------------------------------------------------------------

Вам нужно отсортировать внутреннее содержимое каждого слова строки в порядке убывания.

Внутреннее содержимое — это содержимое слова без первого и последнего символа.

Примеры:
"sort the inner content in decending order" --> "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me" --> "wiat for me"
"this kata is easy" --> "tihs ktaa is esay"

Слова состоят из строчных букв.

Строка никогда не будет равна null и никогда не будет пустой. В C/C++ строка всегда заканчивается нулем.

Удачи в программировании и, пожалуйста, не забудьте проголосовать и оценить эту ката! :-)

Я также создал другие ката. Посмотрите, понравилась ли вам эта ката!

*/
let string1 = "sort the inner content in decending order"

function sortTheInnerContent(words)
{    
  return words
    .split(' ')
    .map(word => {
      if (word.length <= 2) return word; // No inner content to sort
      const first = word[0];
      const last = word[word.length - 1];
      const middle = word.slice(1, -1).split('').sort((a, b) => b.localeCompare(a)).join('');
      return first + middle + last;
    })
    .join(' ');
}

console.log(sortTheInnerContent(string1))
//----- test
/*
const Test = require('@codewars/test-compat');

describe("Kata tests", function(){
  it("Example tests", function(){
    Test.assertEquals(sortTheInnerContent("sort the inner content in descending order"), "srot the inner ctonnet in dsnnieedcg oredr");
    Test.assertEquals(sortTheInnerContent("wait for me"), "wiat for me");
    Test.assertEquals(sortTheInnerContent("this kata is easy"), "tihs ktaa is esay");
  });
});
*/