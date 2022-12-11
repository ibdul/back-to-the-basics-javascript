const test_cases = [
  [1, 2, 3, 4, 5, 6, 7],
  [4, 5, 7, 8, 9],
];

function search(value, values) {
  // O(logn)

  if (0 > values.length) return false;

  let mid = Math.floor(values.length / 2);

  if (values[mid] == value) return value;
  else if (value > values[mid]) {
    return search(value, values.slice(mid, values.length));
  } else if (value < values[mid]) {
    return search(value, values.slice(0, mid));
  }
}

for (let test_case of test_cases[0]) {
  console.log(search(test_case, test_cases[0]));
}
