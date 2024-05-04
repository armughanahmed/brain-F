const array = [1, 2, 3, 4, 6];
const target = 6;
const ans = [];
let i = 0;
let j = array.length - 1;
while (i < j) {
  const sum = array[i] + array[j];
  if (sum == target) {
    ans.push(i, j);
    break;
  } else if (sum > target) {
    j--;
  } else {
    i++;
  }
}

console.log(ans);
