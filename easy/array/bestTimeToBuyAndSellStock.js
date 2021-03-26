//////////////////
// INSTRUCTIONS //
//////////////////

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

// EXAMPLE 1
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

// EXAMPLE 2
// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

// EXAMPLE 3
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e., max profit = 0.

const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [1, 2, 3, 4, 5];
const prices3 = [7, 6, 4, 3, 1];

const maxProfit = (prices) => {
  const maxLength = prices.length - 1;
  let profit = 0;

  // Valley to Peak Approach
  prices.forEach((price, i) => {
    if (i !== maxLength && prices[i + 1] > price) {
      profit += prices[i + 1] - price;
    }
  });

  return profit;
};

module.exports = function () {
  describe("Check for Max Profit", () => {
    it("Dataset 1", () => {
      expect(maxProfit(prices1)).toEqual(7);
    });
    it("Dataset 2", () => {
      expect(maxProfit(prices2)).toEqual(4);
    });
    it("Dataset 3", () => {
      expect(maxProfit(prices3)).toEqual(0);
    });
  });
};
