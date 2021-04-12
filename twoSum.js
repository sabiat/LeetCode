var twoSum = function (nums, target) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j + 1] === target && i !== j + 1) {
        newArr.push(i);
        newArr.push(j + 1);
        return newArr;
      }
    }
  }
};
