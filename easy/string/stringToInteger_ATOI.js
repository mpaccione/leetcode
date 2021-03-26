//////////////////
// INSTRUCTIONS //
//////////////////

// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

//// Read in and ignore any leading whitespace.
//// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
//// Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
//// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
//// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
//// Return the integer as the final result.

/*
// USE CASE 1
Input: s = "42"
Output: 42
Explanation: The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
The parsed integer is 42.
Since 42 is in the range [-231, 231 - 1], the final result is 42.

// USE CASE 2
Input: s = "   -42"
Output: -42
Explanation:
Step 1: "   -42" (leading whitespace is read and ignored)
            ^
Step 2: "   -42" ('-' is read, so the result should be negative)
             ^
Step 3: "   -42" ("42" is read in)
               ^
The parsed integer is -42.
Since -42 is in the range [-231, 231 - 1], the final result is -42.

// USE CASE 3
Input: s = "4193 with words"
Output: 4193
Explanation:
Step 1: "4193 with words" (no characters read because there is no leading whitespace)
         ^
Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
             ^
The parsed integer is 4193.
Since 4193 is in the range [-231, 231 - 1], the final result is 4193.

// USE CASE 4
Input: s = "words and 987"
Output: 0
Explanation:
Step 1: "words and 987" (no characters read because there is no leading whitespace)
         ^
Step 2: "words and 987" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "words and 987" (reading stops immediately because there is a non-digit 'w')
         ^
The parsed integer is 0 because no digits were read.
Since 0 is in the range [-231, 231 - 1], the final result is 0.
*/

const input1 = "42";
const input2 = "   -42";
const input3 = "4193 with words";
const input4 = "words and 987";

const stringToInteger_ATOI = (str) => {
  const trimmedStr = str.trim();
  const firstChar = str.charAt(0);
  const positive = firstChar === "-" ? false : true;

  if (firstChar !== "-" && parseInt(firstChar) !== "NaN") {
    const int = parseInt(trimmedStr.split(" ")[0]);
    return int >= -Math.pow(2, 31) && int <= Math.pow(2, 31) - 1 ? int : 0;
  } else {
    return 0;
  }
};

module.exports = function () {
  describe("Check for String to Integer (ATOI Algorithim)", () => {
    it("Use Case 1", () => {
      expect(stringToInteger_ATOI(input1)).toEqual(42);
    });
    it("Use Case 2", () => {
      expect(stringToInteger_ATOI(input2)).toEqual(-42);
    });
    it("Use Case 3", () => {
      expect(stringToInteger_ATOI(input3)).toEqual(4193);
    });
    it("Use Case 4", () => {
      expect(stringToInteger_ATOI(input4)).toEqual(0);
    });
  });
};
