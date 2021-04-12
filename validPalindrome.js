var isPalindrome = function (s) {
  let noSpace = s.toLowerCase().split(" ").join("");
  let onlyLetters = noSpace.replace(/[^0-9a-zA-Z]+/gim, "");

  const middleIndex = Math.floor(onlyLetters.length / 2);
  const lastIndex = onlyLetters.length - 1;
  for (let i = 0; i < middleIndex; i++) {
    if (onlyLetters[i] !== onlyLetters[lastIndex - i]) {
      return false;
    }
  }
  return true;
};
