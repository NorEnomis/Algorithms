function mergeSort(numbers) {
  if (numbers.length < 2) {
    return numbers;
  }
  var middleIndex = Math.floor(numbers.length / 2);
  var firstHalf = numbers.slice(0, middleIndex);
  console.log(firstHalf);
  var secondHalf = numbers.slice(middleIndex);
  console.log(secondHalf);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(numbers, otherNumbers) {
  var result = [];
  while (numbers.length && otherNumbers.length) {
    var minimum;
    if (numbers[0] < otherNumbers[0]) {
      minimum = numbers.shift();
    }
    else {
      minimum = otherNumbers.shift();
    }
    result.push(minimum);
  }
  if (numbers.length) {
    result = result.concat(numbers);
  }
  else {
    result = result.concat(otherNumbers);
  }
  return result;
}

mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]);