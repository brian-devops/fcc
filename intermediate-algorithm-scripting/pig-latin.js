function translatePigLatin(str) {
  let vowelRegex = /^[^aeiou]+/;
  let myVowels = str.match(vowelRegex);

  return myVowels !== null
    ? str
        .replace(vowelRegex, "")
        .concat(myVowels)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");
