function twoSum(numbers, sum) {
  var pairs = [];
  var numbersTemp = [];
  for (var i = 0; i < numbers.length; i++) {
    var counterpart = sum - numbers[i];
    if (numbersTemp.indexOf(counterpart) !== -1) {
      pairs.push([numbers[i], counterpart])
    }
    numbersTemp.push(numbers[i]);
  }
  return pairs;
}

twoSum([1, 6, 4, 5, 3, 3], 7);