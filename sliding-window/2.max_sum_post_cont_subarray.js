const array = [2, 1, 5, 1, 3, 2];
const k = 3;

let windowStart = 0;
let windowSum = 0;
let maxSum = 0;

for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
  windowSum += array[windowEnd];
  if (windowEnd >= k - 1) {
    if (windowSum > maxSum) {
      maxSum = windowSum;
    }

    windowSum -= array[windowStart];
    windowStart++;
  }
}

console.log(maxSum);
