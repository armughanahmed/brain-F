const fruits = ["A", "B", "C", "B", "B", "C"];
const bascketCapacity = 2;
let windowStart = 0;
let max = 0;
const map = new Map();
for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
  map.set(fruits[windowEnd], map.get(fruits[windowEnd]) || 0 + 1);
  while (map.size > bascketCapacity) {
    map.set(fruits[windowStart], map.get(fruits[windowStart]) - 1);
    if (map.get(fruits[windowStart]) == 0) {
      map.delete(fruits[windowStart]);
    }

    windowStart++;
  }

  max = Math.max(max, windowEnd - windowStart + 1);
}

console.log(max);
