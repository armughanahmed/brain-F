const string = "araaci";
const k = 2;
let windowStart = 0;
let max = 0;
const map = new Map();
for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
  map.set(string[windowEnd], map.get(string[windowEnd]) || 0 + 1);
  while (map.size > k) {
    map.set(string[windowStart], map.get(string[windowStart]) - 1);
    if (map.get(string[windowStart]) == 0) {
      map.delete(string[windowStart]);
    }
    windowStart++;
  }

  max = Math.max(max, windowEnd - windowStart + 1);
}

console.log(max);
