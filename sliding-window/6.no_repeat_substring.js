const string = "aabccbb";
let max = 0;
let windowStart = 0;
const map = new Map();

for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
  if (
    typeof map.get(string[windowEnd]) == "number" &&
    map.get(string[windowEnd]) >= windowStart
  ) {
    windowStart = map.get(string[windowEnd]) + 1;
  }

  max = Math.max(max, windowEnd - windowStart + 1);
  map.set(string[windowEnd], windowEnd);
}

console.log(max);
