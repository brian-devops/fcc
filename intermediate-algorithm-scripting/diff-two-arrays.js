function diffArray(arr1, arr2) {
  // Return arr1 and combine it with arr2
  return (
    arr1
      .concat(arr2)
      // After combing the 2 arrays filter over it returning only values that are not in both arrays
      .filter(item => !arr1.includes(item) || !arr2.includes(item))
  );
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
