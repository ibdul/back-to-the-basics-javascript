const { test_cases } = require("./_helpers.js");

function sort(items) {
  // O(nlogn)

  let left = [];
  let right = [];

  if (items.length < 2) {
    return items;
  } else {
    let pivot = items[0];

    for (let i = 0; i < items.length; i++) {
      if (items[i] < pivot) {
        left.push(items[i]);
      }
    }
    for (let i = 0; i < items.length; i++) {
      if (items[i] > pivot) {
        right.push(items[i]);
      }
    }

    return sort(left).concat(pivot).concat(sort(right));
  }
}

for (test of test_cases) {
  console.log(`Sorting ${test}`);
  console.log(sort(test));
  console.log("\n");
}
