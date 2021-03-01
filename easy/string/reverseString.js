//////////////////
// INSTRUCTIONS //
//////////////////

// Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

let hello = ["h", "e", "l", "l", "o"];

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

const reverseString = (stringArr) => {
  const length = stringArr.length;
  
  for (let i = 0; i < length; i++) {
    stringArr.unshift(stringArr.splice(i, 1)[0]);
  }

  return stringArr;
};

module.exports = function () {
  describe("Check for Reversal", () => {
    it("Array values match", () => {
      expect([...hello].reverse().join(",")).toEqual(
        reverseString(hello).join(",")
      );
    });
  });
};
