const negate = a => {
  return a === false;
};

const both = (a, b) => {
  if (a && b === true) {
    return true;
  } else {
    return false;
  }
};

const either = (a, b) => {
  if (a || b === true) {
    return true;
  } else {
    return false;
  }
};

const none = (a, b) => {
  if (a === false && b === false) {
    return true;
  } else {
    return false;
  }
};

const one = (a, b) => {
  if (a === true && b === false) {
    return true;
  } else if (a === false && b === true) {
    return true;
  } else {
    return false;
  }
};

const truthiness = a => {
  if (!a) {
    return false;
  } else {
    return true;
  }
};

const isEqual = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  } else {
    return false;
  }
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

const isOdd = a => {
  if (a%2 > 0) {
    return true;
  } else {
    return false;
  }
};

const isEven = a => {
  if (a%2 == 0) {
    return true;
  } else {
    return false;
  }
};

const isSquare = a => {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  } else {
    return false;
  }
};

const startsWith = (char, string) => {
  if (string.charAt(0) === char) {
    return true;
  } else {
    return false;
  }
};

const containsVowels = string => {
  if (
    string.includes("a") ||
    string.includes("e") ||
    string.includes("i") ||
    string.includes("o") ||
    string.includes("u") ||
    string.includes("A") ||
    string.includes("E") ||
    string.includes("I") ||
    string.includes("O") ||
    string.includes("U") === true
  ) {
    return true;
  } else {
    return false;
  }
};

const isLowerCase = string => {
  if (string === string.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};
  


module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
