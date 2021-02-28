//////////////////
// INSTRUCTIONS //
//////////////////

// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

const { random } = require("underscore");
const _ = require("underscore")

const randomArray = Array.from({ length: 1000 }, () =>
  Math.round(Math.random() * 500 + 1)
);

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

const checkForDuplicates = (array) => {
  let isDuplicates = false;
  array.forEach((num, index) => {
    if (array.indexOf(num) !== index) {
      isDuplicates = true;
    }
  });

  return isDuplicates;
};

module.exports = function () {
  describe("Check for Duplicates", () => {
    it("Array doesn't have duplicates", () => {
        const hasDuplicates = _.uniq(randomArray).length !== randomArray.length ? true : false 
        expect(checkForDuplicates(randomArray)).toEqual(hasDuplicates);
    });
  });
};
