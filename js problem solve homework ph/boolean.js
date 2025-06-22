function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  for (let i = 0; i < name.length; i++) {
    const cher = name[i];
    if (cher >= 0 && cher <= 9) {
      return true;
    }
  }
  return false;
}

const input = checkDigitsInName(["Raj"]);
console.log(input);
