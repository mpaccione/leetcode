//////////////////
// INSTRUCTIONS //
//////////////////

// Count the number of prime numbers less than a non-negative number, n.

const n = 100;
const result = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
];

const returnPrimes = (n) => {
  const array = Array.from(Array(n).keys());

  for (let i = 2; i <= n; i++) {
    if (
      (i === 2 || i % 2 !== 0) &&
      (i === 3 || i % 3 !== 0) &&
      (i === 5 || i % 5 !== 0) &&
      (i === 7 || i % 7 !== 0)
    ) {
      array.push(i);
    }
  }

  array.splice(0, n);

  return array;
};

module.exports = function () {
    describe("Check for Primes", () => {
      it("Results are only primes", () => {
        expect(returnPrimes(n)).toEqual(result);
      });
    });
};
