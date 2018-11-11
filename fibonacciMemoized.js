function fibonacciMemoized(index, cache) {
    cache = cache || [];
    if (cache[index]) {
      return cache[index];
    }
    if (index < 3) {
      return 1;
    }
    cache[index] = fibonacciMemoized(index - 1, cache) + fibonacciMemoized(index - 2, cache);
    return cache[index];
  }
  
  fibonacciMemoized(100);