//////////////////
// INSTRUCTIONS //
//////////////////

// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Constraints: 1 <= bad <= n <= 231 - 1

// Input n = 80, bad = 61
const latestVersion = 80;
const badVersion = 61;

function isBadVersion(version) {
  // Mock Api Call
  return version >= badVersion ? true : false;
}

const isFirstBadVersion = (startVersion, endVersion) => {
  if (endVersion - startVersion <= 1) {
    return isBadVersion(endVersion) ? endVersion : startVersion;
  }

  // Implement Recursive Binary Search
  const midVersion = parseInt((endVersion - startVersion) / 2) + startVersion;
  // console.log(`${startVersion} - ${midVersion} - ${endVersion}`);
  return isBadVersion(midVersion)
    ? isFirstBadVersion(startVersion, midVersion)
    : isFirstBadVersion(midVersion, endVersion);
};


module.exports = function () {
  describe("Check for Bad Version match", () => {
    it("Version match", () => {
      expect(isFirstBadVersion(0, latestVersion)).toEqual(61);
    });
  });
};
