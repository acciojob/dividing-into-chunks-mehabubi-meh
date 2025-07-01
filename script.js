function divide(arr, n) {
  const result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (currentSum + num <= n) {
      currentChunk.push(num);
      currentSum += num;
    } else {
      // Push current chunk and start a new one
      if (currentChunk.length > 0) result.push(currentChunk);
      currentChunk = [num];
      currentSum = num;
    }
  }

  // Push the last chunk
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
}
