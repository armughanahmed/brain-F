const array = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 5;

let windowStart = 0;
let windowSum = 0;
const ans = [];
for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
  windowSum += array[windowEnd];
  if (windowEnd >= k - 1) {
    ans.push(windowSum / k);
    windowSum -= array[windowStart];
    windowStart++;
  }
}

console.log(ans);
