const plusOne = require("./plusOne.js")
const twoSum = require("./twoSum.js")
const intersectionOfTwoArrays = require("./intersectionOfTwoArrays.js")
const removeDuplicates = require("./removeDuplicatesFromSortedArray.js");
const containsDuplicate = require("./containsDuplicate.js");
const moveZeros = require("./moveZeros.js");
const rotateArray = require("./rotateArray.js");
const rotateImage = require("./rotateImage.js");
const singleNumber = require("./singleNumber.js")
const validSudoku = require("./validSudoku.js");
const bestTimeToBuyAndSellStock = require('./bestTimeToBuyAndSellStock.js');

// Arrays
// plusOne();
// twoSum();
// intersectionOfTwoArrays();
// removeDuplicates();
// containsDuplicate();
// moveZeros();
// rotateArray();
// rotateImage();
// singleNumber();
// validSudoku();
// bestTimeToBuyAndSellStock();

module.exports = function () {
  plusOne();
  twoSum();
  intersectionOfTwoArrays();
  removeDuplicates();
  containsDuplicate();
  moveZeros();
  rotateArray();
  rotateImage();
  singleNumber();
  validSudoku();
  bestTimeToBuyAndSellStock();
};
