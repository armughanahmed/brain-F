const array = [2, 1, 5, 2, 3, 2];
const sum = 7;

let windowStart = 0;
let windowSum = 0;

let minLength = Infinity;

for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
  windowSum += array[windowEnd];
  while (windowSum >= sum) {
    minLength = Math.min(minLength, windowEnd - windowStart + 1);
    windowSum -= array[windowStart++];
  }
}

if (minLength == Infinity) {
  console.log(0);
  return;
}
console.log(minLength);
