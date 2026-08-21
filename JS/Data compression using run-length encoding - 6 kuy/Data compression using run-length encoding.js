/**
 * Encodes a string using Run-length encoding (RLE).
 * @param {string} input - The string to encode, consisting only of uppercase characters.
 * @returns {string} The RLE encoded string (e.g., '3A3B3C1D').
 */
export function encode(input) {
  // Match any character (.) and its consecutive repetitions (\1*)
  // Replace the matched sequence with its length followed by the character
  return input.replace(/(.)\1*/g, (match, char) => match.length + char);
}

/**
 * Decodes an RLE encoded string back to its original form.
 * @param {string} input - The encoded string (e.g., '10A1B').
 * @returns {string} The decoded original string.
 */
export function decode(input) {
  // Match digits (\d+) followed by a single character (.)
  // Repeat the character based on the extracted numerical count
  return input.replace(/(\d+)(.)/g, (match, count, char) => char.repeat(Number(count)));
}