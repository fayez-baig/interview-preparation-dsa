function fibonnaciSeries(index, cache) {
  cache = cache || [];

  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else
      cache[index] =
        fibonnaciSeries(index - 1, cache) + fibonnaciSeries(index - 2, cache);
  }

  return cache[index];
}
