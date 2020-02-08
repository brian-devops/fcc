function destroyer(arr) {
  // Convert arguments into an array and slice from index 1 to seperate the arguments used for filtering into their own array of args
  let args = Array.from(arguments).slice(1);
  // Includes in the callback to check value isn't in the args. returns true to keep value in original arr or false to remove it
  return arr.filter(function(value) {
    return !args.includes(value);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
