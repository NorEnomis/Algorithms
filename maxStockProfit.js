function maxStockProfitFirstTry(prices) {
  var minimum = prices[0];
  var maximum = prices[0];
  for (var i = 1; i < prices.length - 1; i++) {
    if (minimum > prices[i]) {
      minimum = prices[i];
    }
    else {
      maximum = prices[i];
    }
  }
  return maximum - minimum;
}

function maxStockProfit(prices) {
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;
  var changeBuyPrice = true;
  for (var i = 0; i < prices.length; i++) {
    if (changeBuyPrice) {
      buyPrice = prices[i];
    }
    sellPrice = prices[i + 1];
    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    }
    else {
      changeBuyPrice = false;
      profit = sellPrice - buyPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
}

maxStockProfit([32, 46, 26, 38, 40, 48, 42]);
