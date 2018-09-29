// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  const result = {};
  if (currency > 10000) {
    result.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
  }
  // return {'H': 50, 'Q': 25, 'D': 10, 'N': 5, 'P': 1};
  return result;
}
