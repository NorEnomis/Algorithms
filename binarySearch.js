function binarySearch(numbers, searchNumber) {
  numbers.sort(
    function (a, b) {
      return a - b;
    }
  );
  var middleIndex = Math.floor(numbers.length / 2);
  var middleElement = numbers[middleIndex];
  if (middleElement === searchNumber) {
    return true;
  }
  else if (middleElement < searchNumber && numbers.length > 1) {
    return binarySearch(numbers.splice(middleIndex, numbers.length), searchNumber);
  }
  else if (middleElement > searchNumber && numbers.length > 1) {
    return binarySearch(numbers.splice(0, middleIndex), searchNumber);
  }
  else {
    return false;
  }
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 57);