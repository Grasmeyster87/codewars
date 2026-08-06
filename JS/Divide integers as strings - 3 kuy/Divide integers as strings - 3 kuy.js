function stripLeadingZeros(s) {
  const stripped = s.replace(/^0+/, '');
  return stripped === '' ? '0' : stripped;
}

// Compares two non-negative integer strings (no leading zeros). Returns -1, 0, or 1.
function compare(x, y) {
  if (x.length !== y.length) return x.length - y.length;
  if (x === y) return 0;
  return x > y ? 1 : -1;
}

// Multiplies a non-negative integer string by a single digit (0-9).
function multiplyByDigit(x, d) {
  if (d === 0) return '0';
  let carry = 0;
  let result = '';
  for (let i = x.length - 1; i >= 0; i--) {
    const prod = (x.charCodeAt(i) - 48) * d + carry;
    result = (prod % 10) + result;
    carry = Math.floor(prod / 10);
  }
  if (carry > 0) result = carry + result;
  return result;
}

// Subtracts y from x (x >= y), both non-negative integer strings.
function subtract(x, y) {
  let result = '';
  let borrow = 0;
  let i = x.length - 1;
  let j = y.length - 1;
  while (i >= 0) {
    const digitX = x.charCodeAt(i) - 48;
    const digitY = j >= 0 ? y.charCodeAt(j) - 48 : 0;
    let diff = digitX - digitY - borrow;
    if (diff < 0) {
      diff += 10;
      borrow = 1;
    } else {
      borrow = 0;
    }
    result = diff + result;
    i--;
    j--;
  }
  return stripLeadingZeros(result);
}

function divideStrings(a, b) {
  a = stripLeadingZeros(a);
  b = stripLeadingZeros(b);

  if (a === '0') return ['0', '0'];

  // Precompute multiples of b for digits 0-9 once, instead of re-multiplying
  // on every step of the long division.
  const multiples = ['0'];
  for (let d = 1; d <= 9; d++) {
    multiples.push(multiplyByDigit(b, d));
  }

  let remainder = '0';
  let quotient = '';

  for (let i = 0; i < a.length; i++) {
    // Bring down the next digit of a into the running remainder.
    remainder = stripLeadingZeros(remainder + a[i]);

    // Find the largest digit d (0-9) such that b * d <= remainder.
    let d = 0;
    for (let k = 9; k >= 0; k--) {
      if (compare(multiples[k], remainder) <= 0) {
        d = k;
        break;
      }
    }

    quotient += d;
    remainder = subtract(remainder, multiples[d]);
  }

  return [stripLeadingZeros(quotient), remainder];
}

module.exports = divideStrings;