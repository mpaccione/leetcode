//////////////////
// INSTRUCTIONS //
//////////////////

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

//// 0 <= strs.length <= 200
//// 0 <= strs[i].length <= 200
//// strs[i] consists of only lower-case English letters.

/*
Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

const useCase1 = ["flower", "flow", "flight"];
const useCase2 = ["dog", "racecar", "car"];

const longestCommonPrefix = (wordArr, index = 0) => {
  const arrLength = wordArr.length;
  const matchedPrefix = wordArr[0].substring(0, index - 1) 
  const newPrefix = wordArr[0].substring(0, index);

  for (let n = 1; n < arrLength; n++) {
    if (wordArr[n].indexOf(newPrefix) == -1) {
      return matchedPrefix;
    }
  }

  return longestCommonPrefix(wordArr, index + 1);
};


module.exports = function () {
  describe("Check Longest Common Prefix", () => {
    it("Use Case 1", () => {
      expect(longestCommonPrefix(useCase1)).toEqual("fl");
    });
    it("Use Case 2", () => {
      expect(longestCommonPrefix(useCase2)).toEqual("");
    });
  });
};
