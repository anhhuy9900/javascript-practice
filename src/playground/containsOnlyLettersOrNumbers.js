function containsOnlyLettersOrNumbers(str) {
  return /^[a-zA-Z0-9\s]+$/.test(str);
}

// Example usage
console.log(containsOnlyLettersOrNumbers('abc123'));         // true
console.log(containsOnlyLettersOrNumbers('abc$123'));        // false
console.log(containsOnlyLettersOrNumbers('abc123!'));        // false
console.log(containsOnlyLettersOrNumbers(''));               // true
console.log(containsOnlyLettersOrNumbers('bet info 1'));     // true
console.log(containsOnlyLettersOrNumbers('123 456'));        // true
console.log(containsOnlyLettersOrNumbers('Special@Chars'));  // false
console.log(containsOnlyLettersOrNumbers('SpecialChars'));  // false