function longest_palindrome(s) {
    if (s.length === 0) return '';

    // Transform s to avoid even/odd length special-casing.
    // "abba" -> "^#a#b#b#a#$"
    // '^' and '$' are sentinels so we never run out of bounds.
    const t = '^#' + s.split('').join('#') + '#$';
    const n = t.length;
    const p = new Array(n).fill(0); // p[i] = radius of palindrome centered at i (in transformed string)

    let center = 0;
    let right = 0;

    for (let i = 1; i < n - 1; i++) {
        // Mirror of i with respect to center
        const mirror = 2 * center - i;

        if (i < right) {
            p[i] = Math.min(right - i, p[mirror]);
        }

        // Attempt to expand palindrome centered at i
        while (t[i + p[i] + 1] === t[i - p[i] - 1]) {
            p[i]++;
        }

        // Update center/right if palindrome centered at i expands past right
        if (i + p[i] > right) {
            center = i;
            right = i + p[i];
        }
    }

    // Find the maximum element in p (first occurrence wins ties)
    let maxLen = 0;
    let centerIndex = 0;
    for (let i = 1; i < n - 1; i++) {
        if (p[i] > maxLen) {
            maxLen = p[i];
            centerIndex = i;
        }
    }

    const start = (centerIndex - maxLen) / 2; // map back to original string index
    return s.substring(start, start + maxLen);
}

module.exports = longest_palindrome;