//////////////////
// INSTRUCTIONS //
//////////////////

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

//// #1 Each row must contain the digits 1-9 without repetition.
//// #2 Each column must contain the digits 1-9 without repetition.
//// #3 Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

const truthyBoard = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// Output: true

const falsyBoard = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// Output: false

const validSudoku = (sudokuArr) => {
  const validSudoku = {
    pass: true,
    rowPass: true,
    columnPass: true,
    subBoxPass: true,
  };

  // Check for Row Duplicates
  JSON.parse(JSON.stringify(sudokuArr)).forEach((arr) => {
    arr.sort().forEach((num, index) => {
      if (
        index !== arr.length - 1 && num !== "." &&
        (num === arr[index + 1] || parseInt(num) < 1 || parseInt(num) > 9)
      ) {
        validSudoku.pass = false;
        validSudoku.rowPass = false;
      }
    });
  });

  // Format into Columns
  const columnArr = [[], [], [], [], [], [], [], [], []];

  JSON.parse(JSON.stringify(sudokuArr)).forEach((rowArr, index) => {
    rowArr.forEach((num, columnIndex) => {
      columnArr[columnIndex].push(num);
    });
  });

  // Check for Column Duplicates
  columnArr.forEach((columnArr) => {
    columnArr.sort().forEach((num, index) => {
      if (
        index !== columnArr.length - 1 && num !== "." &&
        (num === columnArr[index + 1] || parseInt(num) < 1 || parseInt(num) > 9)
      ) {
        validSudoku.pass = false;
        validSudoku.columnPass = false;
      }
    });
  });

  // Format into SubBoxes
  const boxesArr = [[], [], [], [], [], [], [], [], []];
  let sudokuRow = 0;

  JSON.parse(JSON.stringify(sudokuArr)).forEach((rowArr, index) => {
    const column1 = boxesArr[sudokuRow].concat(rowArr.splice(0, 3));
    const column2 = boxesArr[sudokuRow + 1].concat(rowArr.splice(0, 3));
    const column3 = boxesArr[sudokuRow + 2].concat(rowArr.splice(0, 3));

    boxesArr[sudokuRow] = column1;
    boxesArr[sudokuRow + 1] = column2;
    boxesArr[sudokuRow + 2] = column3;

    if ((index + 1) % 3 === 0) {
      sudokuRow += 3;
    }
  });

  // Check for SubBox Duplucates
  boxesArr.forEach((boxArr) => {
    boxArr.sort().forEach((num, index) => {
      if (
        index !== boxArr.length - 1 && num !== "." && 
        (num === boxArr[index + 1] || parseInt(num) < 1 || parseInt(num) > 9)
      ) {
        validSudoku.pass = false;
        validSudoku.subBoxPass = false;
      }
    });
  });

  //   console.log("OUTPUT");
  //   console.log(boxesArr);

  return validSudoku;
};

console.log(validSudoku(truthyBoard));

module.exports = function () {
  describe("Check for Valid Sudoku", () => {
    it("Valid Sudoku is valid", () => {
        expect(validSudoku(truthyBoard).pass).toEqual(true)
    });
    it("Invalid Sudoku is invalid", () => {
        expect(validSudoku(falsyBoard).pass).toEqual(false)
    });
  });
};
