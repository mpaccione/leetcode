//////////////////
// INSTRUCTIONS //
//////////////////

// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

const string = "oooolala";

const getUniqueCharIndex = (string) => {
  let index = -1;
  for (let i = 0; i < string.length - 1; i++) {
    if (string.charAt(i) !== string.charAt(i + 1)) {
        index = i + 1;
        break;
    }
  }

  return index;
};

module.exports = function () {
  describe("Check for Unique", () => {
    it("Unique index matches", () => {
      expect(getUniqueCharIndex(string)).toEqual(4);
    });

    it("Returns -1 when no match", () => {
      expect(getUniqueCharIndex("aaaaa")).toEqual(-1);
    });
  });
};
