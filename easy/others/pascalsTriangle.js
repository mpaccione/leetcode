//////////////////
// INSTRUCTIONS //
//////////////////

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

const numRows = 5;
const result = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

const genPascalsTriangle = (nRows) => {
  // Make copy to avoid value assignment
  const tArray = JSON.parse(JSON.stringify(new Array(nRows).fill([])));
  // Setup Unique Arrays
  if (nRows > 0) {
    tArray[0][0] = 1;
  }
  if (nRows > 1) {
    tArray[1][0] = 1;
    tArray[1][1] = 1;
  }
  if (nRows > 2) {
    // Iterate over number of rows starting at index 1 (2nd row)
    for (let a = 2; a < numRows; a++) {
      tArray[a][0] = 1;
      tArray[a][a] = 1;
      // Iterate over the individual row's (omitting first and last)
      for (let b = 1; b < a; b++) {
        // Add appropriate upper items in triangle
        tArray[a][b] = tArray[a - 1][b - 1] + tArray[a - 1][b];
      }
    }
  }

  return tArray;
};

module.exports = function () {
  describe("Check for Pascals Triangle", () => {
    it("Pascals Triangle is correct", () => {
      expect(genPascalsTriangle(numRows)).toEqual(result);
    });
  });
};
