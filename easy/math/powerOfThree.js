//////////////////
// INSTRUCTIONS //
//////////////////

// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

const nTrue = 27;
const nFalse = 45;

const isPowerOfThree = (n) => {
  const result = n / 3;

  if (result !== 3 && result > 3) {
    return isPowerOfThree(result);
  } else if (result === 3) {
    return true;
  } 
  
  return false;
};

module.exports = function () {
  describe("Check if Power of Three", () => {
    it("Is a power of three", () => {
      expect(isPowerOfThree(nTrue)).toEqual(true);
    });
    it("Is not a power of three", () => {
      expect(isPowerOfThree(nFalse)).toEqual(false);
    });
  });
};
