//////////////////
// INSTRUCTIONS //
//////////////////

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// 1 | 2 | 3        7 | 4 | 1
// 4 | 5 | 6   =>   8 | 5 | 2
// 7 | 8 | 9        9 | 6 | 3

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

const rotateArray = (matrixArr) => {
    // TODO:
};

rotateArray(matrix);

// module.exports = function () {
//   describe("Check for Rotation", () => {
//     it("Array values match", () => {
//        
//     });
//   });
// };
