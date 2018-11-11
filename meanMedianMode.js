function mean(numbers) {
  var sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  return sum / numbers.length;
}

mean([9, 10, 23, 10, 23, 9]);

function median(numbers) {
  numbers.sort(
    function (a, b) {
      return a - b;
    }
  );
  if (numbers.length % 2 === 0) {
    return (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;

  }
  return numbers[Math.floor[numbers.length / 2]];
}

median([9, 10, 23, 10, 23, 9]);

function mode(numbers) {
  var numbersCount = {};
  numbers.forEach(number => {
    if (!numbersCount[number]) {
      numbersCount[number] = 0;
    }
    numbersCount[number]++;
  });
  var modes = [];
  var maxApparition = 0;
  for (var number in numbersCount) {
    if (numbersCount[number] > maxApparition) {
      modes = [number];
      maxApparition = numbersCount[number];
    }
    else if (numbersCount[number] === maxApparition) {
      modes.push(number);
    }
  }
  if (modes.length === Object.keys(numbersCount).length) {
    modes = [];
  }
  return modes;
}

function meanMedianMode(numbers) {
  return {
    mean : mean(numbers),
    median : median(numbers),
    mode : mode(numbers)
  }
}

meanMedianMode([9, 10, 23, 10, 23, 9]);