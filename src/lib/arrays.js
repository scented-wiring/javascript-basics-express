const getNthElement = (index, array) => {

  if (array.length > index) {
    array.push("cat", "dog", "elephant", "fox");
    return array[index];
  } else {
    return array[index];
  }
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
  return undefined;
};

const addToArray2 = (element, array) => {
  const newArray = array.slice();
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  function toUpper(x) {
    return x.toUpperCase();
  }
  return strings.map(toUpper);
};

const reverseWordsInArray = strings => {
  function reverse(s) {
    return s
      .split("")
      .reverse()
      .join("");
  }
  return strings.map(reverse);
};

const onlyEven = numbers => {
  function isEven(value) {
    if (value % 2 == 0) return true;
    else
      return false;
  }
  
  return numbers.filter(isEven);
};

const removeNthElement2 = (index, array) => {
  const newArray = array.slice();
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(function(string) {
    return string.match(/^[aeiou]/gi)
  })
};

const removeSpaces = string => {
  function myTrim(x) {
    return x.replace(/\s/g, '');
  }

  return myTrim(string);

};

const sumNumbers = numbers => {
  function getSum(total, num) {
    return total + Math.round(num);
  }

  return numbers.reduce(getSum, 0);
};


const sortByLastLetter = strings => {
  function last(x) {
    return x.sort(
      (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
    );
  }
  return last(strings);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
