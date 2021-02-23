function maxStockProfit(arr) {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;
  let changeByPrice = true;

  for (let i = 0; i < arr.length; i++) {
    if (changeByPrice) buyPrice = arr[i];
    sellPrice = arr[i + 1];

    if (sellPrice < buyPrice) changeByPrice = true;
    else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeByPrice = false;
    }
  }

  return maxProfit;
}

console.log(maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]));
