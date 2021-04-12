var singleNumber = function (nums) {
  const counter = {};
  for (const num of nums) {
    if (counter[num]) {
      counter[num] += 1;
    } else {
      counter[num] = 1;
    }
  }
  for (const key of Object.keys(counter)) {
    if (counter[key] === 1) {
      return key;
    }
  }
};
