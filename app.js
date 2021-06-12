console.log("Does this thing even work??");
// // You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// // Examples
// // [7, 1]  =>  [1, 7]
// // [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


// let newArray = [3,2,7,9,4,12,56,434,77,65,12,14,32,8,7,69,33,11,65,43];
// const sortArray = (array) => {
//   // Seperate the Odd numbers out of the array.
//   let oddArr = array.filter((num) => num % 2 !== 0);
//   // Sort the Odd numbers in ascending order.
//   return oddArr.sort((a,b) => a-b);
// }

// console.log(sortArray(newArray));

//   // Return the sorted array of Odd numbers.





//========================================================================
// function evenLast(numbers) {
//   let sum = 0;
  
//   let evenIndex = 
//     numbers.filter((index) => index % 2 === 0);
  
//   for (let i = 0; i < evenIndex.length; i++) {
//       sum += evenIndex[i];
//       }
  
//   return sum * numbers[numbers.length-1];
// }
//========================

// function evenLast(numbers) {
//   let sum = 0;
//   let arr = numbers.filter((i) => i % 2 === 0);
  
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// } 
// return sum * numbers[numbers.length-1];





// // Congo recently standardized its storage containers: all pizzas fit inside a cubic crate, 16-inches on a side. The crates are super tough so you can stack them as high as you want.

// // Write a function box_capacity() that figures out how many crates you can store in a given warehouse. The function should take three arguments: the length, width, and height of your warehouse (in feet) and should return an integer representing the number of boxes you can store in that space.

// // For example: a warehouse 32 feet long, 64 feet wide, and 16 feet high can hold 13,824 boxes because you can fit 24 boxes across, 48 boxes deep, and 12 boxes high, so box_capacity(32, 64, 16) should return 13824.

// // Multiply Length, Height, and Width by 12 to convert to inches.
// // Divide the L, W and H by 16.
// // Multiply the three dimensions together to get the total crates.
// // Return the number of crates.








// // // Many people know that Apple uses the letter "i" in almost all of its 
// // // Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we must return "iPhone". But we have a few rules:

// // // The word should not begin with the letter "I", for example Inspire.
// // // The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
// // // The first letter is not capital, for example road.
// // // If the word does not meet the rules, we return "Invalid word".



// // function i(word) {
      
// //   let vowelCount = 0;
// //   const vowels = ["a","e","i","o","u"];

// //   for(let char of word) {
// //     if (vowels.includes(char)) {
// //       vowelCount ++;
// //     }
// //   }
  
// //   if (vowelCount >= word.length ||   word.charAt(0) == "i" || word.charAt(0) !== word.charAt(0).toUpperCase()) {
// //   return "Invalid word"
// // } else
// //   return `i${word}`
// // }
// // // //=======================================================================

// // // // Split the word into individual characters.

// // // // Word cannot begin with the letter "i"
// // function start(word) {
// //   return word.charAt(0);
// // }

// // console.log(start("iInspire"));
// // // // Vowels cannot outnumber Consonants.

// //     //Declare an empty array for the vowels to be added to
// //     // Declare an array with the vowels

// // // First letter cannot be capitalized. 




// // //========================================================================

// // // Count the number of Vowels in a given "string"

// // const getCount = (str) => {
// //   //Declare an empty array for the vowels to be added to
// //   let vowelCount = 0;
// //   // Declare an array with the vowels
// //   const vowels = ["a","e","i","o","u"];

// //   for(let char of str) {
// //     if (vowels.includes(char)) {
// //       vowelCount ++;
// //     }
// //   }
// //   return vowelCount;
// // }

// // // console.log(getCount("abracadabra"));