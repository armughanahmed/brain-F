/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let windowStart = 0;
  let maxOne = 0;
  let maxLength = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    if (nums[windowEnd] == 1) {
      maxOne++;
    }

    if (windowEnd - windowStart + 1 - maxOne > k) {
      if (nums[windowStart] == 1) {
        maxOne--;
      }

      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
