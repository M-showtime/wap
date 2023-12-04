function max(num1, num2) {
    if (num1 > num2) return num1;
    else if (num1 < num2) return num2;
    else return "they are Equal";
  }

  // number 2
  function maxOfThree(num1, num2, num3) {
    let temp = num1;
    if (num2 > temp) temp = num2;
    else if (num3 > temp) temp = num3;
    return temp;
  }
  
  //  number 3
  function isVowel(letter) {
    // switch (letter) {
    //   case "a":
    //   case "e":
    //   case "i":
    //   case "o":
    //   case "u":
    //   case "A":
    //   case "E":
    //   case "I":
    //   case "O":
    //   case "U":
    //     return true;
    //     break;
    //     default:
    //        return false;
    // }
    if (
      letter == "a" ||
      letter == "e" ||
      letter == "i" ||
      letter == "o" ||
      letter == "A" ||
      letter == "E" ||
      letter == "I" ||
      letter == "O" ||
      letter == "U"
    )
      return true;
    else return false;
  }
  
  // number 4
  function sum(arr) {
    let sum = 0.0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  function multiply(arr) {
    let prod = 1;
    for (let i = 0; i < arr.length; i++) {
      prod *= arr[i];
    }
    return prod;
  }
  
  //  number 5
  function reverse(str) {
    return str.split("").reverse().join("");
  }
  
  //  number 6
  function findLongestWordLength(arr) {
    let maxLength = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > maxLength) maxLength = arr[i].length;
    }
  
    return maxLength;
  }
  
  // number 7
  function filterLongWords(arr, len) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > len) newArr.push(arr[i]);
    }
    return newArr;
  }
  
  // number 8
  function computeSumOfSquares(arr) {
    return arr.map((element) => element * element) .reduce((sum, current) => sum + current, 0);
  }
  
  // number 9
  function printOddNumbersOnly(arr) {
    return  arr.filter((element) => element % 2 == 1);
   }
  
  // number 10
  function computeSumOfSquaresOfEvensOnly(arr) {
    return arr.filter((element) => element % 2 == 0) .map((element) => element * element) .reduce((sum, current) => sum + current, 0);
  }
  
  // number 11
  function sum(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
    
  }
  
  function multiply(arr) {
   return arr.reduce((pro, current) => pro * current, 1);
  }
  
  //  number 12
  function printFibo(n, a, b) {
    let arr = [];
    let temp = a;
    for (let i = 0; i < n; i++) {
      arr.push(a);
      temp = a;
      a = b;
      b = temp + b;
    }
    return arr;
  }