function bubbleSort(numbers) {
  for (var i = numbers.length; i > 0; i--) {
    for (j = 0; j < i; j++) {
      if (numbers[j + 1] < numbers[j]) {
        var temp = numbers[j + 1];
        numbers[j + 1] = numbers[j];
        numbers[j] = temp;

      }
    }
  }
  return numbers;
}

bubbleSort([5, 5, 3, -8, 2, 1, 4, 4]);