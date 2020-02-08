function sumAll(arr) {
  // Get the smallest number in array
  let min = Math.min(...arr);
  // Get the largest number in array
  let max = Math.max(...arr);
  // Placeholder array to push values to later
  let result = [];
  // Count from min to max and add 1 for each loop and push it to the result array
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  // Return the result array and reduce from many values to a single value that is the sum of all numbers in result array
  return result.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
}

// Test work
sumAll([1, 5]);
sumAll([10, 1500]);
