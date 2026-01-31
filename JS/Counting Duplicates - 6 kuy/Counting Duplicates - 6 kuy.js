function duplicateCount(text){
  const lower = text.toLowerCase();
  const counts = {};

  for (let char of lower) {
    counts[char] = (counts[char] || 0) + 1;
  }

  let duplicates = 0;
  for (let char in counts) {
    if (counts[char] > 1){
        duplicates++
    }
  }
  return duplicates;
}
console.log(duplicateCount('aabbcde')) // 2
module.exports = duplicateCount;