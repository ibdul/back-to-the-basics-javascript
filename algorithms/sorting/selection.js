const { test_cases } = require("./_helpers.js");

function sort(items) {
  // O(n^2)

  let sorted = [];

  while (items.length) {
    let min = { position: 0, value: items[0] };

    for (let i = 0; i < items.length; i++) {
      if (items[i] < min.value) {
        min = { position: i, value: items[i] };
      }
    }

    items.splice(min.position, 1);
    sorted.push(min.value);
  }

  return sorted;
}

for (test of test_cases) {
  console.log(sort(test));
}
