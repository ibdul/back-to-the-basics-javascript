// Divide/Decrease and conquer

// sum up an array of items using a DnC approach
const test_cases = [
  [1, 2, 3],
  [1, 5, 7, 8, 2, 12, 3],
  [1, 5, 7, 11, 8, 3, 12, 62, 3],
];

function sum(arr) {
  let total = 0;

  if (arr.length > 1) {
    return arr[0] + sum(arr.slice(1, arr.length));
  } else {
    return (total += arr[0]);
  }
}

function countElements(arr) {
  let total = 0;
  if (arr.length == 1) {
    return (total += 1);
  } else {
    return 1 + countElements(arr.slice(1, arr.length));
  }
}

function findMaxElement(arr, max = 0) {
  // check all items, comparing and storing the largest each time
  // when exhausted, return the largest

  if (arr[0] > max) {
    max = arr[0];
  }
  if (arr.length == 1) {
    return max;
  } else return findMaxElement(arr.slice(1, arr.length), max);
}

for (test of test_cases) {
  console.log(`Calculating the sum of ${test}`);
  console.log(sum(test));
  console.log("\n");

  console.log(`Counting the # of elements in ${test}`);
  console.log(countElements(test));
  console.log("\n");

  console.log(`Finding the max element in ${test}`);
  console.log(findMaxElement(test));
  console.log("\n");
}
