//////////////////
// INSTRUCTIONS //
//////////////////

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

const stringOneA = "A man, a plan, a canal: Panama";
const stringOneB = "race a car";

const isPalindrome = (stringOne, stringTwo) => {
  const regexFilter = stringTwo.replace(/[^0-9a-z]/gi, "");
  return regexFilter.toLowerCase() === stringTwo ? true : false;
};

module.exports = function () {
  describe("Check for Palindrome", () => {
    it("Palindrome returns true", () => {
      expect(isPalindrome(stringOneA, "amanaplanacanalpanama")).toBe(true);
    });

    it("Non-Palindrome returns false", () => {
      expect(isPalindrome(stringOneB, "race a car")).toBe(false);
    });
  });
};
