const allowed = "0132456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ -";
let usedStrings = new Set();
let stringCounts = {};

function simunq(original) {
  // Replace disallowed characters with a dash
  let simplified = '';
  for (let char of original) {
    if (allowed.includes(char)) {
      simplified += char;
    } else {
      simplified += '-';
    }
  }

  // Ensure the string is unique
  if (!usedStrings.has(simplified)) {
    usedStrings.add(simplified);
    stringCounts[simplified] = 1;
    return simplified;
  } else {
    let count = stringCounts[simplified] || 1;
    count++;
    stringCounts[simplified] = count;
    let uniqueString = `${simplified}-${count}`;

    while (usedStrings.has(uniqueString)) {
      count++;
      uniqueString = `${simplified}-${count}`;
    }

    usedStrings.add(uniqueString);
    return uniqueString;
  }
}

simunq.reset = function() {
  usedStrings.clear();
  stringCounts = {};
};

module.exports = simunq;
