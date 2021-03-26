const plusOne = require("./plusOne.js")
const removeDuplicates = require("./removeDuplicatesFromSortedArray.js");
const containsDuplicate = require("./containsDuplicate.js");
const moveZeros = require("./moveZeros.js");
const rotateArray = require("./rotateArray.js");
const rotateImage = require("./rotateImage.js");
const singleNumber = require("./singleNumber.js")
const validSudoku = require("./validSudoku.js");

// Arrays
// plusOne();
// removeDuplicates();
// containsDuplicate();
// moveZeros();
// rotateArray();
// rotateImage();
// singleNumber();
// validSudoku();

module.exports = function () {
  plusOne();
  removeDuplicates();
  containsDuplicate();
  moveZeros();
  rotateArray();
  rotateImage();
  singleNumber();
  validSudoku();
};
