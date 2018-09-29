// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  const result = {};
  if (currency < 1) {
    return result;
  } else if (currency > 10000) {
    result.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
  } else {
    const keys = ['H', 'Q', 'D', 'N', 'P'];
    const values = [50, 25, 10, 5, 1];
    let currentRemainder = currency;
    keys.forEach((key, index) => {
      const faceValue = values[index];
      const numberCoinsOfKey = Math.floor(currentRemainder / faceValue);
      if (numberCoinsOfKey) {
        result[key] = numberCoinsOfKey;
        currentRemainder -= numberCoinsOfKey * faceValue;
      }
    });
  }
  return result;
}
