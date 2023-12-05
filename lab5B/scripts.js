// 1,Write the following JavaScript functions:

let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
   ];

   function addBook(title, author, libraryID){
   book= {title:title,author:author,libraryID:libraryID};
   libraryBooks.push(book);
   return book;
   }

  function getTitles(){
    return libraryBooks.map(element => element.title).sort();
  }
  
  function findBooks(titleKey){
    return libraryBooks.map(element => element.title).filter(element => element.match(titleKey)).sort();
  }
  module.exports = { addBook, getTitles, findBooks }



 // 2, Write your own version of Array.map. Write a function, myMap(arr, fun) that takes an array and a function as
//arguments and returns a new array that is formed by applying the function to each element of the array and saving
//the result in the new array. Do not use the Array.map method in your code.

function myMap(arr, fun) {
    // Check if arr is an array and fun is a function
    if (!Array.isArray(arr) || typeof fun !== 'function') {
      throw new Error('Invalid arguments. Please provide an array and a function.');
    }
  
    // Create a new array to store the results
    const result = [];
  
    // Iterate through each element of the array and apply the function
    for (let i = 0; i < arr.length; i++) {
      // Call the provided function on each element and push the result to the new array
      result.push(fun(arr[i], i, arr));
    }
  
    // Return the new array with the results
    return result;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4];
  const squaredNumbers = myMap(numbers, (num) => num * num);
  
  console.log(squaredNumbers); // Output: [1, 4, 9, 16]
  

  