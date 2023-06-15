module.exports = function (original, delta) {
  let result = '',
    index = 0;

  // According to latest jsperf tests, there's no need to cache array length
  for (let i = 0; i < delta.length; i++) {
    const item = delta[i],
      operation = item[0],
      value = item[1];

    if (operation == -1) {
      // DELETE
      index += value;
    } else if (operation == 0) {
      // KEEP
      result += original.slice(index, (index += value));
    } else {
      // INSERT
      result += value;
    }
  }
  return result;
};
