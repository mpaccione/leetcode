const reverseString = require("./reverseString.js")
const reverseInteger = require("./reverseInteger.js")
const stringToInteger_ATOI = require("./stringToInteger_ATOI.js")
const firstUniqueCharInString = require("./firstUniqueCharInString.js")
const strStr = require("./strStr.js")
const validAnagram = require("./validAnagram.js")
const validPalindrome = require("./validPalindrome.js")
const longestCommonPrefix = require("./longestCommonPrefix.js")

// Strings
// reverseString()
// reverseInteger()
// stringToInteger_ATOI()
// strStr()
// firstUniqueCharInString()
// validAnagram();
// validPalindrome();
// longestCommonPrefix();

module.exports = function(){
    reverseString();
    reverseInteger();
    stringToInteger_ATOI();
    strStr();
    firstUniqueCharInString();
    validAnagram();
    validPalindrome();
    longestCommonPrefix();
}