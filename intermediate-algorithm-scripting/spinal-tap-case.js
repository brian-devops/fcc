function spinalCase(str) {
  // Regex for white space and underscore
  let regex = /\s+|_+/g;
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // return str as lowercase and replace space and underscores with a -
  return str.toLowerCase().replace(regex, "-");
}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
spinalCase("AllThe-small Things");
