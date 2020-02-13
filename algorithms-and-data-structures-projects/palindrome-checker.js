function palindrome(str) {
  // Placeholder to store the result in later
  let result;
  // Remove non alphanumeric chars. \W is equivalent to [^A-Za-z0–9_]
  let regex = /[\W_]/g;
  // Convert to lower case and replace the non alpha chars with empty string
  let trimmedStr = str.toLowerCase().replace(regex, "");
  // Split the trimmed string, then reverse it then join it back together
  let reversedStr = trimmedStr
    .split("")
    .reverse()
    .join("");
  console.log(reversedStr);
  // if trimmed string and reversed string are the same it is a palindrome

  return (result = trimmedStr === reversedStr ? true : false);
}

// Test work
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
