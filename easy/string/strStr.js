//////////////////
// INSTRUCTIONS //
//////////////////

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string

/*
Input: haystack = "hello", needle = "ll"
Output: 2

Input: haystack = "aaaaa", needle = "bba"
Output: -1

Input: haystack = "", needle = ""
Output: 0
*/

const useCase1 = ["hello", "ll"];
const useCase2 = ["aaaaa", "bba"];
const useCase3 = ["", ""];

const strStr = (haystack, needle) => {
  if (needle.length > haystack.length || !haystack.indexOf(needle)) {
    return 0;
  } else {
    return haystack.indexOf(needle);
  }
};

module.exports = function () {
  describe("Check strStr() function", () => {
    it("Use Case 1", () => {
      expect(strStr(useCase1[0], useCase1[1])).toEqual(2);
    });
    it("Use Case 2", () => {
      expect(strStr(useCase2[0], useCase2[1])).toEqual(-1);
    });
    it("Use Case 3", () => {
      expect(strStr(useCase3[0], useCase3[1])).toEqual(0);
    });
  });
};
