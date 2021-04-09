var longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  let matcher = strs[0];

  if (strs.length > 0) {
    for (let i = 0; i < matcher.length; i++) {
      for (let j = 1; j < strs.length; j++) {
        if (strs[j][i] !== matcher[i]) {
          return commonPrefix;
        }
      }
      commonPrefix += matcher[i];
    }
  }
  return commonPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
