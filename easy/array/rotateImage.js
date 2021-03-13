//////////////////
// INSTRUCTIONS //
//////////////////

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// 1 | 2 | 3        7 | 4 | 1
// 4 | 5 | 6   =>   8 | 5 | 2
// 7 | 8 | 9        9 | 6 | 3

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

const rotateArray = (matrixArr) => {
  const matrixLength = matrixArr.length - 1;
  // Loop over main array in reverse
  for (let index1 = matrixLength; index1 >= 0; index1--) {
    let counter = 0;
    // Loop over with forEach for number value instead of array reference
    matrixArr[index1].forEach((num, index2) => {
      if (counter <= matrixLength) {
        matrixArr[counter].push(num);
        //matrixArr[counter].splice(0,1)
        counter++;
      }
    });
    // Remove Old Values
    matrixArr[index1].splice(0, matrixLength+1)
  }
  return matrixArr
};

module.exports = function () {
  describe("Check for Image Rotation", () => {
    it("Array values match", () => {
      expect(rotateArray(JSON.parse(JSON.stringify(matrix)))).toEqual([[7,4,1],[8,5,2],[9,6,3]])
    });
  });
};
