// Define the even and odd methods on the Array prototype
Array.prototype.even = function () {
    return this.filter((num) => num % 2 === 0);
  };
  
  Array.prototype.odd = function () {
    return this.filter((num) => num % 2 !== 0);
  };
  
  // Test your code
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(testArray.even()); // Output: [2, 4, 6, 8]
  console.log(testArray.odd());  // Output: [1, 3, 5, 7]
