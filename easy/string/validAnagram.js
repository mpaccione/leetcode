//////////////////
// INSTRUCTIONS //
//////////////////

// Given two strings s and t , write a function to determine if t is an anagram of s.

const stringOne = "anagram";
const stringTwo = "nagaram";

const isAnagram = (stringOne, stringTwo) => {
  function stringToIntegerArray(string){
    const integerArray = string.split("")
    .map((char) => {
      return char.charCodeAt();
    })
    .sort();

    return integerArray
  }  

  const stringOneArray = stringToIntegerArray(stringOne)
  const stringTwoArray = stringToIntegerArray(stringTwo)
  const longestString = stringOneArray > stringTwoArray ? stringOneArray : stringTwoArray

  for (let i = 0; i < longestString.length; i++) {
      if (stringTwoArray[i] !== stringOneArray[i]) {
          return false
      }
  }

  return true;
};

module.exports = function () {
  describe("Check for Anagram", () => {
    it("Unique index matches", () => {
      expect(isAnagram(stringOne, stringTwo)).toBe(true);
    });

    it("Returns -1 when no match", () => {
      expect(isAnagram(stringOne, "zzz")).toBe(false);
    });
  });
};
