/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let windowStart = 0;
  let maxCharCount = 0;
  let maxLength = 0;
  const map = new Map();
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    map.set(s[windowEnd], (map.get(s[windowEnd]) || 0) + 1);
    maxCharCount = Math.max(maxCharCount, map.get(s[windowEnd]));
    if (windowEnd - windowStart + 1 - maxCharCount > k) {
      map.set(s[windowStart], map.get(s[windowStart]) - 1);
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

console.log(characterReplacement("AABABBA", 1));
