// // // Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// // // For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// // // let numbers = [1,7,6,3,4,5,8,9,2];
// // // function sumTwoSmallestNumbers(numbers){  
// // //   numbers = numbers.sort(function(a, b){return a - b; });
// // //   return numbers[0] + numbers[1];
// // // };

// // // console.log(sumTwoSmallestNumbers(numbers));

// // // ---------------------------------------------------------------------------

// // // Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// // // [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// // // function grow(x) {
// // //   x.sort(function(a, b){
// // //     return a - b; 
// // //   });
// // //    let sum=1;
// // //     for (var i=0; i< x.length; i++) {
// // //         sum = sum * x[i];
// // //     } 
// // //     return sum;
// // //   }

// // // -----------------------------------------------------------------

// // // Given an array of integers, return a new array with each value doubled.

// // // For example:

// // // [1, 2, 3] --> [2, 4, 6]

// // // const maps = (x) => x.map(function(num) {
// // //   return num * 2;
// // // })

// // // function maps(x){
// // //   return x.map(n => n * 2);
// // // }

// // // maps = x => x.map(e => e * 2);

// // // const maps = arr => arr.map( x => x * 2 )



// // // ----------------------------------------------------------------


// // // Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// // // For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// // // function sumTwoSmallestNumbers(numbers) {
// // //   numbers.sort((a, b) => a - b);
// // //   return numbers[0] + numbers[1];
// // //   }

// // // -----------------------------------------------------------------------------------


// // // Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// // // Write a code that gives out the total amount for different days(d)

// // // 1 day = $40
// // // More than 7 days = -$50
// // // More than 3 days = -$20

// // // function rentalCarCost(d) {
// // //   const totalCost = d * 40;
// // //   if(d < 3) {
// // //   return `$${d * 40}`;
// // //   } else if 
// // //     (d <= 7) {
// // //     return `$${(d * 40) - 20}`;
// // //   } else
// // //     (d >= 5) 
// // //     return `$${(d * 40) -50}`;
// // //     }

// // // console.log(rentalCarCost(7));

// // // -----------------------------------------------------------------------------


// // // The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// // // Task :
// // // Given a year, return the century it is in.

// // // Input , Output Examples ::
// // // centuryFromYear(1705)  returns (18)
// // // centuryFromYear(1900)  returns (19)
// // // centuryFromYear(1601)  returns (17)
// // // centuryFromYear(2000)  returns (20)

// // // ------------------------

// // // function century(year) {
// // //   return Math.floor((year-1)/100) + 1;
// // // }

// // // console.log(century(1900));

// // // ------------------------

// // // function century(year) {
// // //   let centuryCount = 0;
// // //   while(year > 0) {
// // //     year = year - 100;
// // //     centuryCount = centuryCount + 1;
// // //   }
// // //   return centuryCount;
// // // }

// // // console.log(century(2004));

// // // --------------------------------------------------------------------------------

// // // This is the first step to understanding FizzBuzz.



// // // Your expected output is an array of positive integers from 1 to n (inclusive).

// // // Your job is to write an algorithm that gets you from the input to the output.

// // // 1.  You have to create a new Array with (n) items, and make sure that you atart with a value of 1, so that the array actually contains numbers, not undefined values.Array

// // // create an array of (n) items = 
// // // let array = Array(n);
// // // -- you have created an array of (n) items, but its values are undefined.  To fix that, you must do the following...

// // // function preFizz(n) {
// // //   let array1 = Array.from(Array(n), (x, index) => index + 1);
// // //   return array1;
// // // }

// // // ANOTHER SOLUTION...

// // // function preFizz(n) {
// // //   var output = [];
// // //   for (var i=1; i<=n; i++)
// // //   {
// // //     output.push(i);
// // //   }
// // //   return output;
// // // }

// // // ANOTHER SOLUTION...

// // // let preFizz = n => [...Array(n)].map((x, i) => i+1);

// // // ANOTHER SOLUTION... 

// // // function preFizz(n) {
// // //   var arr = [];
// // //   for(var i = 1; i < n + 1; i++){
// // //     arr.push(i);
// // //   }
// // //   return arr;
// // // }

// // // ANOTHER SOLUTION...

// // // function preFizz(n) {
// // //   var output = [];
// // //   for(var i = 0; i < n; i++){
// // //     output.push(i+1);
// // //   }
// // //   return output
// // // }

// // // ---------------------------------------------------------------------------------------

// // // Implement a function which multiplies two numbers.

// // //  function multiply(a, b) {
// // //   return a * b;
// // // }

// // // -------------------------------------------------------------------------------------------

// // // Reverse a String...

// // // 1.  Seperate the string into individual characters...
// // // 2.  Return the seperated characters inthe reverse order.
// // // 3.  Join the seperated, reversed characters again.log

// // // function solution(str){
// // //   return str.split("").reverse().join("");
// // // }

// // // ----------------------------------------------------------

// // // Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// // // For example:

// // // summation(2) -> 3
// // // 1 + 2

// // // summation(8) -> 36
// // // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// // // let summation = function(num) {
// // //   let sum = 0;
// // //   for (let i = 1; i <= num; i++) {
// // //     sum += i;
// // //   }
// // //   return sum;
// // // }

// // // -----------------------------------------------------------------------

// // // Personalized greeting
// // // Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// // // Use conditionals to return the proper message:

// // // case	return
// // // name equals owner	'Hello boss'
// // // otherwise	'Hello guest'

// // // const greet = (name, owner) => name == owner ? "Hello boss" : 'Hello guest';


// // // function greet (name, owner) {
// // //   if(name == owner) {
// // //   return 'Hello boss';
// // //   } else {
// // //   return 'Hello guest';
// // //   }
// // // }

// // // ----------------------------------------------------------------------------------

// // // In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// // // DNAStrand ("ATTGC") // return "TAACG"

// // // DNAStrand ("GTAT") // return "CATA" 

// // // function DNAStrand(dna) {
// // //   return dna.replace(/./g, function(c) {
// // //     return DNAStrand.pairs[c]
// // //   })
// // // }

// // // DNAStrand.pairs = {
// // //   A: 'T',
// // //   T: 'A',
// // //   C: 'G',
// // //   G: 'C',
// // // }

// // // ------------------------------------------------------------------------------------

// // // You get an array of numbers, return the sum of all of the positives ones.

// // // Example [1,-4,7,12] => 1 + 7 + 12 = 20

// // // Note: if there is nothing to sum, the sum is default to 0.

// // // 1.  Define a  SUM, that starts at 0.
// // // 2.  Write a for loop that loops over the Array.
// // // 3.  if arr[i] > 0, add it to the sum with 'sum += arr[i]'.
// // // 4.  Return the SUM.


// // // function positiveSum(arr) {
// // //   return arr.reduce((a,b) => 
// // //   a + (b > 0 ? b : 0),0);
// // // }

// // // --------------------------------------------

// // // const positiveSum = (arr) =>
// // // arr.reduce((sum,n) =>
// // // n > 0 ? sum + n : sum, 0);

// // // -----------------------------------------------

// // // function positiveSum(arr) {
// // //   let sum = 0;
// // //   for(let i = 0;i < arr.length; i++) {
// // //     if(arr[i] > 0) {
// // //       sum += arr[i];
// // //     }
// // //   }
// //       // return sum;
// // // }


// // // --------------------------------------------------------------------

// // // write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// // // the string should start with a 1.

// // // a string with size 6 should return :'101010'.

// // // with size 4 should return : '1010'.

// // // with size 12 should return : '101010101010'.

// // // The size will always be positive and will only use whole number

// // // 1.  Declare an Empty String.
// // // 2.  Loop over i until is reaches (size).
// // // 3.  if 1 is less than or equal to size, string = str + 1 % 2, which is 1  
// // // 4.  if 2 is less than or equal to size, string = str + 1 % 2, which is 0 


// // // function stringy(size) {
// // //   let str = '';
// // //   for (let i = 1; i <= size; i++) {
// // //   str = str + i%2;
// // //   }
// // //   return str;
// // // }

// // // ----------------------------------------------------------------

// // // Capitalize the first letter in a sentence.

// // // let sentence = 'The quick brown fox jumped over the lazy dog.';


// // // const capitalizeString = (str) => 
// // // str[0].toUpperCase() + str.slice(1);


// // // console.log(capitalizeString(sentence));

// // // console.log(sentence[0].toUpperCase() + sentence.slice(1));

// // // -------------------------------------
// // // Capitalize every word in a sentence.
// // // const capitalizeWords = (str) => 
// // // str.split(' ').map(capitalizeString).join(' ');
// // // console.log(capitalizeWords(sentence));
// // // -----------------------------------------------------

// // // Copy an ARRAY 

// // // const array1 = [1,2,3,4,5];
// // // array1.push(6);
// // // array1.pop();
// // // array1.shift();
// // // const copyofArray1 = array1.slice()
// // // const anotherCopyArray1 = [...array1];
// // // console.log(array1);
// // // console.log(copyofArray1);
// // // console.log(anotherCopyArray1);

// // // ------------------------------------------------


// // // String contains.  How to check if one string exists in another.

// // // const string1 = 'The quick brown fox jumps over the lazy dog';

// // // const word = 'quick';

// // // string1.includes(word);
// // // console.log(string1.includes(word));
// // // console.log(string1.indexOf(word) !== -1);

// // // -----------------------------------------------------

// // // CREATING DOM ELEMENTS...

// // // // Create a div, put some text into it.
// // // const elem = document.createElement('div');
// // // const elemText = document.createTextNode('This is a Node');
// // // elem.appendChild(elemText);
// // // console.log(elem);
// // // // Now add the new DIV into the document...
// // // document.body.appendChild(elem);

// // // // Add a class to the new div...
// // // elem.classList.add('heading');
// // // // Add an id...
// // // elem.id = 'newDiv';
// // // // assign an attribute to the div...
// // // elem.setAttribute('option', 'test');

// // // // -----------------------------------------
// // // console.clear();

// // // // create an img element, 
// // // const profileImg = document.createElement('img');
// // // profileImg.src = 'http://placeKitten.com/200/300';
// // // // append it to the body.
// // // document.body.append(profileImg);
// // // // change the size of the IMG with the 
// // // // .style property...
// // // profileImg.style.width = '50px';

// // // // -----------------

// // // // Create n input element...
// // // const inputElem = document.createElement('input');
// // // // Assign a type to the input...
// // // inputElem.type = 'checkbox';
// // // // Create a label for the input...
// // // const labelElem = document.createElement('label');
// // // // Create the text for the label...
// // // const labelText = document.createTextNode('New Label');
// // // // Append text to the label...
// // // labelElem.appendChild(labelText);
// // // // Append input to the label... 
// // // labelElem.appendChild(inputElem);
// // // console.log(labelElem);
// // // // Now append the input to the body...
// // // document.body.append(labelElem);
// // // // You can set it to not be checked...
// // // // inputElem.checked = '';
// // // // Or set it to be Checked...
// // // inputElem.checked = 'checked';



// // // console.clear();
// // // // --------------------------------------------------
// // // // Convert a string to a number...

// // // const number = '1234';
// // // console.log(parseInt(number));

// // // // Convert a decimal(floating point) string to a number...
// // // const number2 = '1234.49';
// // // console.log(parseFloat(number2));

// // // // const number3 = '1,234,567';
// // // // console.log(parseInt(number));// << doesn't work
// // // const number3 = '1,234,567'.replace(/,/g , '');
// // // console.log(number3);

// // // console.clear();
// // // // -------------------------------------------------

// // // // Remove an item from the END of an array...

// // // // const array1 = [1, 2, 3, 2, 8, 4, 1, 4, 5, 10];

// // // // const pop = array1.pop();
// // // // console.log(pop);
// // // // console.log(array1);

// // // // ----------------

// // // // Remove an item from the START of an array...

// // // // const array1 = [1, 2, 3, 2, 8, 4, 1, 4, 5, 10];
// // // // const shift = array1.shift();
// // // // console.log(shift);

// // // // // ----------------------

// // // // // Remove a specific item from an array with 
// // // // // .splice()

// // // // // .splice(a, b);
// // // // //(a, b) a is the index of the item to be removed, or where the removal of items starts, 
// // // // // b is the amount of items to be removed...
// // // // //(1, 1) removes 1 item starting at index[1], which would be the second item in the array... 
// // // // const array2 = [1, 2, 3, 2, 8, 4, 1, 4, 5, 10];
// // // // const splice = array2.splice(1, 1);
// // // // console.log(splice);

// // // // ------------------------------------------------

// // // //Remove items from an array using .filter()
// // // // items are removed with .filter() based on a certain rule that is passed on. 
// // // const array3 = [1, 2, 3, 2, 8, 7, 4, 2, 5, 2, 10];

// // // // const newArray = array3.filter( (item) => {
// // // //   //these are all possibilities 
// // // //   // return item > 4;
// // // //   // return item < 4;
// // // //   // return item === 1;
// // // //   // return (item %2 == 0);
// // // //   // return (item %2 == 1);
// // // // });

// // // // This is how this would look using ES6 arrow function...
// // // const newArray2 = array3.filter( 
// // //   (item) => item >= 5);

// // // //  Remove Duplicate items from an array with .filter()...
// // // const newArray3 = array3.filter( 
// // //   (item, pos) => array3.indexOf(item) === pos);

// // // console.log(newArray3);


// // // console.clear();
// // // // ----------------------------------------------

// // // // Join an array with .join()...


// // // // The join function always returns an array...
// // // const array = ['The', 'quick', 'brown', 'fox'];
// // // const objArray = [
// // //   {a: 1},
// // //   {b: 2},
// // //   {c: 3},
// // // ]
// // // console.log(array.join(' '));
// // // console.log(objArray.join(' '));
// // // // ----------------------------------
// // // // SPLIT an array with .split()
// // // // const str = 'the quick brown fox';
// // // console.log(
// // //   str.split(' ')
// // //   // rejoin the string to its original state...
// // //   .join(' '));

// //   console.clear();
// // //   // -------------------------------------------------
// // // // Find the LENGTH of a string...
// // // // str.length counts all characters AND spaces...
// // // const str = 'the quick brown fox';
// // // console.log(str.length);
// // // console.log('hello'.length);

// // // // ------------------
// // // console.log(string_input);
// // // console.log(string_input.length);// undefined
// // // console.log(string_input.value.length);// use this
// // // str.length === string_input.value.length;
// // // // --------------------------------------------------
// // // console.clear();
// // // // -----------------------------------------------------------------------
// // // // REVERSE an array...

// // // // const str2 = 'the quick brown fox';

// // // // reverse an array passed into the .reverse function...
// // // console.log([3,2,1].reverse());// [1,2,3]

// // // // .split() the string, which splits the string into an array of individual characters, then 
// // // // .reverse() the split string, then .join() the split characters back together...
// // // // const newStr = str
// // // // .split('')
// // // // .reverse()
// // // // .join('');
// // // // console.log(newStr);
// // // // ----------------------
// // // // REVERSE a string with a FOR LOOP
// // // const str3 = 'the quick brown fox';
// // // function reverseString(str) {
// // // let newStr = '';
// // // for (let i = str.length - 1; i >= 0; i--) {
// // //   newStr += str[i];
// // // }
// // // return newStr;
// // // };
// // // console.log(reverseString(str3));

// // // console.clear();
// // // // ----------------------------------------------------

// // // // Find the LONGEST WORD in a string
// // // const str = 'the quick brown fox jumped over the lazy dog';

// // //   const longestWord = (str) => {
// // //     const str4Array = str.split(' ');
// // //     const sortedStrArray = str4Array.sort
// // //         ((strA, strB) => {
// // //           return strB.length - strA.length;
// // //         });
// // //         return sortedStrArray[0];
// // //       }

// // // console.log(longestWord(str));
// // // // ------------------
// // // // sorts the string based on longest word, returning an array of words...
// // // // console.log(sortedStrArray);
// // // // //returns the first word of the sorted array from above, which will be the longest...
// // // // console.log(sortedStrArray[0]);
// // // // ----------------------------------------------------------------------------------

// // // // Find the LARGEST NUMBER in an array...

// // // const numbers = [1,2,3,4,5,6];
// // // // Math.max only takes in an array of numbers, so you must use the spread operator(...numbers)
// // // console.log(Math.max(...numbers));
// // // // ----------------------------------
// // // const largestNumber = (values) => {
// // //   let highest = 0;
// // //   for(let i =0; i < values.length; i+=1) {
// // //     if (values[i] > highest) {
// // //       highest = values[i];
// // //     }
// // //   } 
// // //   return highest;
// // // }
// // // console.log(largestNumber(numbers));
// // // ----------------------------------

// // // Check if a STRING is a Palindrome...
// // const str = 'anna';
// // const str1 = 'Anna';
// // const str2 = 'wanna';

// // const isPalindrome = (inStr) => {
// //   // make the string lowerCase so that a capitol letter does not produce a false result...
// //   inStr = inStr.toLowerCase();
// //   for (let i = 0; i < inStr.length; i+=1) {
// //     // If the first item[i] in the string doesn't match the last item in the string, we know that it is not a palindrome.  the '- 1 - i' part takes away 1 because the array is zero indexed, and we also need to subtract the value of I.  If this is true, then return false(not a palindrome)
// //         if( inStr[i] !== inStr[inStr.length - 1 - i]) {
// //       return false;
// //     };
// //   }
// //   return true;
// // }
// // // console.log(isPalindrome(str1));
// // // ---------------------------------------------------------------------------------------

// // // MAP / FILTER / REDUCE / SORT..............................................
// // // MAP / FILTER / REDUCE / SORT..............................................
// // // MAP / FILTER / REDUCE / SORT..............................................
// // // MAP / FILTER / REDUCE / SORT..............................................
// // // MAP / FILTER / REDUCE / SORT..............................................

// // const companies= [
// //   {name: "Company One", category: "Finance", start: 1981, end: 2004},
// //   {name: "Company Two", category: "Retail", start: 1992, end: 2008},
// //   {name: "Company Three", category: "Auto", start: 1999, end: 2007},
// //   {name: "Company Four", category: "Retail", start: 1989, end: 2010},
// //   {name: "Company Five", category: "Technology", start: 2009, end: 2014},
// //   {name: "Company Six", category: "Finance", start: 1987, end: 2010},
// //   {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
// //   {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
// //   {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
// // ];

// // const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// //   // for (let i = 0; i < companies.length; i++) {
// //   //   console.log(companies[i]);
// //   // }


// // // .forEach()
// // // .forEach()
// // // .forEach()
// // companies.forEach(function(company, index, array) {
// //   // console.log(company);
// // })

// // // -----------------------------------------

// // // .filter()
// // // .filter()
// // // .filter()


// // // Get all the ages under 21...
// //     // Here is how it would be done with a for loop...
// // //   let canDrink = [];
// // //     for(let i = 0; i < ages.length; i++) {
// // //       if(ages[i] >= 21) {
// // //         canDrink.push(ages[i]);
// // //       }
// // //     }
// // //   // console.log(canDrink);

// // // ------------------------------

// // // // Here is the .filter() method...
// //   // const canDrink2 = ages.filter(function(age) {
// //   //   if(age >= 21) {
// //   //     return true;
// //   //   }
// //   // });
// //   // console.log(canDrink2);

// // // ------------------------------

// // //   // Now the same function with ES6 Arrow Function..

// // //   const canDrink3 = ages.filter(age => age >= 21);
// // // console.log(canDrink3);

// // // -------------------------

// // // Filter out the retail companies from the 
// // // [companies] array ...

// // // const retailCompanies = companies.filter(function(company) {
// // //   if (company.category === 'Retail') {
// // //     return true;
// // //   }
// // // });
// // // console.log(retailCompanies);

// // // -------------------------

// // // ES6 Arrow Function...

// // const retailCompanies = companies.filter(company => 
// //  company.category === 'Retail');

// // //  -------------------------

// // //Filter all companies that started in the 80s

// // const eighties = companies.filter(company => 
// //   company.start >= '1980' && company.start < '1990');
// //   // console.log(eighties);

// // // ----------------------------

// // // Get companies that lasted 10 years or more...

// // const tenYears = companies.filter(function(company) {
// //   if(company.end - company.start >= 10) {
// //     return true;
// //   }
// // });

// // // ES6 Version---------

// // const tenYears2 = companies.filter(company => 
// //   company.end - company.start >= 10);

// //   // console.log(tenYears2);

// // // --------------------------------------------------------------------------------------------------------------

// // // .map()
// // // .map()
// // // .map()
// // // .map()
// // // .map()

// // // map practice function---

// // const testMap = companies.map(function(company) {
// //   return `${company.name} [${company.start} - ${company.end}]`
// // });
// // // ES6 Version---------

// // const testMap2 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`
// // );
// // // console.log(testMap2);

// // // -----------------------------

// // // Create an array of all the company names...
// // const companyNames = companies.map(function(company) {
// //   return company.name;
// // })

// // // ES6 Version-----------
// // const companyNames2 = companies.map((company) =>
// //   company.name);

// // // -------------------------------

// // // Find the square root of all of the ages with .map()

// // const ageSquare = ages.map(function(age) {
// //   return Math.sqrt(age);
// // });

// // // ES6 Version-------------

// // const ageSquare2 = ages.map(age => Math.sqrt(age));

// // // -------------------
// // const ageTimes2 = ages.map(age => age * 2);
// // // console.log(ageTimes2);

// // //-----------------

// // // you can also chain .map() and .filter()...
// // const ageSquare123 = ages
// // .map(age => Math.sqrt(age))
// // .filter(age => age < 10)
// // // console.log(ageSquare123);
// // // -----------------------------------------------------------------------------


// // // .sort()
// // // .sort()
// // // .sort()
// // // .sort()
// // // .sort()
// // // .sort()

// // // Sort the companies by the start year...


// // const sortedCompanies = companies.sort(function(c1, c2) {
// //   if (c1.start > c2.start) {
// //     return 1;
// //   } else {
// //     return -1;
// //   }
// // });

// // // ES6 Version------------
// // // Best Practice...I think...
// // const sortedCompanies2 = companies.sort((a, b) => 
// //   (a.start > b.start ? 1 : -1));

// //   // Another Version--------


// // const sortedCompanies3 = companies.sort((c1, c2) => 
// //   c1 - c2);

// //   // console.log(sortedCompanies3);

// // // -----------------------------------------------------------------------------------

// // // Sort By Age...

// // const sortAges = ages.sort(function(a, b) {
// //   if(a > b) {
// //     return 1;
// //   } else {
// //     return -1;
// //   }
// // });

// // // ES6 Version---------------

// // const sortAges2 = ages.sort((a, b) => (a > b ? 1 : -1));
// // // console.log(sortAges2);
// // // ----------------------------




// // // .reduce()
// // // .reduce()
// // // .reduce()
// // // .reduce()
// // // .reduce()
// // // .reduce()

// // // Fins the SUM of all the ages...

// // // For Loop method...
// // let ageSum = 0;
// // for(let i = 0; i < ages.length; i++) {
// //   ageSum += ages[i];
// // }

// // // standard method with .reduce()
// // const ageSum1 = ages.reduce(function(total, age) {
// //   return total + age;
// // }, 0)//<<< This ZERO is the starting point in the array, at which the counting begins.

// // // ES6 Version--------------
// // const ageSum2 = ages.reduce((acc, value) => 
// // acc + value, 0);

// // // Another ES6 Version...
// // const ageSum3 = ages.reduce((total, age) => 
// // total + age, 0);//<<< This ZERO is the starting point in the array, at which the counting begins.
// // // console.log(ageSum3);

// // // ----------------------------------------------------------------------------------------

// // // Get Total Years for all companies...
// // const totalYears = 
// // companies.reduce(function(total, company) {
// //   return total + (company.end - company.start);
// // }, 0)//<<< This ZERO is the starting point in the array, at which the counting begins.

// // // ES6 Version--------------

// // const totalYears1 = 
// // companies.reduce((total, company) => 
// // total + (company.end - company.start), 0);
// // // console.log(totalYears1);


// // // -----------------------------------------------------------------------------------------------------

// // // Combining Methods............

// // // Multiply all ages by 2...
// // const combined = ages
// // .map(age => age * 2)
// // //Filter out ages over 40...
// // .filter((age) => age >= 40)
// // // sort in ascending order...
// // .sort((a, b) => a > b ? 1 : -1)
// // // Sum all of the ages with .reduce()
// // .reduce((total, age) => (total + age),0);

// // console.log(combined);

// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Codewars.....

// // In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// // Example:

// // makeNegative(1); // return -1
// // makeNegative(-5); // return -5
// // makeNegative(0); // return 0
// // makeNegative(0.12); // return -0.12

// // function makeNegative(num) {
// //   if(num > 0) {
// //   return num * -1;
// //   } else if
// //       (num === 0) {
// //     return 0;
// //     } else 
// //       return num;
// // }

// // // ES6 Version-----------------

// // function makeNegative(num) {
// //   return num > 0 ? -num : num;
// // }
// // --------------------
// // function makeNegative(num) {
// //   if ( num > 0 ) {
// //         return -num;
// //     }
// //     else {
// //         return num;
// //     }
// // }
// // ----------------------
// // function makeNegative(num) {
// //   return -Math.abs(num);
// // }
// // // ---------------------
// // function makeNegative(num) {
// //   return num <= 0 ? num : num*-1;
// // }

// // -------------------------------------------------------------------------------------------------------

// // Exercise 1: Ignore Even
// // In this exercise, you will be counting from 1 - 100. For each odd number, you will print the number to the console. If the number is even, do nothing.
// // Create a for loop that evaluates numbers from 1 to 100.
// // Inside the loop body, write an if/else selection statement that checks whether a number is odd
// // If the number is odd, then print the number to the console, otherwise do nothing and continue to the next number

// // for (let i = 1;i < 100; i++) {
// //   if(i % 2 !== 0) {
// //     console.log(i);
// //   }
// // };



// // Exercise 2: FIZZBUZZ
// // FIZZBUZZ is a very common coding interview problem. Below are the instructions to solving the problem:
// // Create a for loop that evaluates numbers from 1 to 100 like the problem above.
// // Write a if/else selection statement inside the body of the the loop that checks the following:
// // If the number is divisible by 3, then console.log 'FIZZ'
// // If the number is divisible by 5, then console.log 'BUZZ'
// // If the number is divisible by both 3 and 5, then console.log 'FIZZBUZZ'
// // Ex: 15 would print 'FIZZBUZZ', 33 would print 'FIZZ', and 35 would print 'BUZZ'

// // Basic For-Loop Solution----------------------------

// // for (let i = 1; i < 101; i++) {
// //   if(i % 15 == 0) console.log('FizzBuzz');
// //   else if(i % 3 == 0) console.log('Fizz');
// //   else if(i % 5 == 0) console.log('Buzz');
// //   else
// // //   console.log(i);
// // // }
// // //  --------------------------
// // // for(let i=0;i<100;)
// // //   console.log(
// // //     ( ++i%3 ? '' : 'fizz' ) + 
// // //     ( i%5 ? '' : 'buzz' ) || i
// // //   )
// // // -------------------------------


// // // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// // const orders = [
// //   { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
// //       { productId: '123', price: 55 },
// //       { productId: '234', price: 30 },
// //   ]},
// //   { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
// //       { productId: '234', price: 30 },
// //   ]},
// //   { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
// //       { productId: '567', price: 30 },
// //       { productId: '678', price: 80 },
// //   ]},
// //   { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
// //       { productId: '789', price: 12 },
// //       { productId: '890', price: 90 },
// //   ]},
// // //       { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
// // //       { productId: '901', price: 43 },
// // //       { productId: '123', price: 55 },
// // //   ]},
// // // ];

// // // Exercises

// // // 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.
// // const unDelivered234 = orders.filter(function(order) {
// //    return order.customerId === '234' 
// //       && !order.delivered;
// // });
// // // ES6 Version------------------
// // const unDelivered = orders.filter(order => order.customerId === '234' && !order.delivered);
// // // -------------------------------------------------------------------------------------------
// // // 2) Create a new property on each order with the total price of items ordered.
// // const orderTotal = orders.map(order => ({...order, orderTotal:
// //   order.items.reduce((acc, item) =>
// //   acc + item.price, 0) }));
// // // ------------------------------------------------------------------------------------------------------------
// // // 3) Have all the orders been delivered?
// // const delivered = orders.every(function(order) {
// //   if(order.delivered == false) {
// //     return false;
// //   }
// // });
// // // ES6 Version-------------
// // const delivered1 = orders.every(order => order.delivered);

// // // -----------------------------------------------------------------------------------------------------------------
// // // 4) Has the customer with ID '123' made any orders?
// // const placedOrder = orders.some(function(order) {
// //   if(order.customerId == '123') {
// //     return true;
// //   }
// // });
// // // ES6 Version-----------------
// // const placedOrder1 = orders.some(order => 
// //   order.customerId === '123');

// // // 5) Have any products with an id of 123 been sold?
// // const orderSold = orders.reduce((acc, order) => 
// //   acc + order.items.reduce((acc, item) =>
// //   acc + (item.productId === '123'), 0), 0);

//   // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //   const users = [
// //     { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
// //     { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
// //     { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
// //     { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
// //     { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
// //     { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
// //     { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
// //     { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
// //     { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
// //     { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
// // ];

// // const comments = [
// //     { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
// //     { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
// //     { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
// //     { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
// //     { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
// //     { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
// //     { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
// //     { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
// //     { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
// //     { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
// // ];


// // Exercises


// // 1) What is Madison Marshall's user id?
// const madisonId = users.find(function(user) {
//   if(user.firstName == 'Madison' && user.lastName == 'Marshall') {
//     return user.id;
//   }
// });
// // ES6 Version--------------

// const madisonId2 = users.find(user => 
//   (user.firstName == 'Madison' && user.lastName == 'Marshall') ? user.id : '');



// // 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)
// const firstComment = users.find(user => user.id === comments[0].userId);


// // 3) Which user commented 'OK great thanks'?

// // First find the ID...
// const okComment = comments.find(comment => 
//   comment.text === 'OK great thanks').userId; 
// // Then use the ID form the above function to get the user name...
//   const commentUser = users.find(user => 
//     user.id === okComment);


// // 4) Add the user's first and last name to each comment in the comments array
// const addName = comments.map(comment => {
//   const {firstName, lastName} = users.find(user =>
//     user.id === comment.userId);
//     return { ...comment, firstName, lastName};
// });
// console.log(addName);



// // 5) Get a list of the users who haven't commented
// const noComment = users.filter(user => comments.find(comment => comment.userid === user.id));

// const noComment1 = users.filter(user => !comments.find(comment => comment.userid === user.id));
// // console.log(noComment1);



// // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// // Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// // Example:
// // n= 5, m=5: 25
// // n=-5, m=5:  0

// // function paperwork(n, m) {
// //   if (m < 0 || n < 0) {
// //     return 0;
// //   }
// //   return m * n;
// // }

// // //-----------------------

// // const paperwork = (n, m) => Math.max(0, n) * Math.max(0, m);

// // //----------------------

// // function paperwork(n, m) {
// //   return n < 0 || m < 0 ? 0 : n * m;

// // --------------------------------------------------------------------------------------------------------------

// // Reverse the order of words in a String...


// // function reverseWords(str){
// //   return str.split(' ').reverse().join(' ');
// // }

// // -----------------------------------------------------------------------------------------------------------------

// // In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.

// // Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// // Example:
// // move(3, 6) should equal 15

// // function move (position, roll) {
// //   return position + (roll * 2);
// // }

// //---------------------

// // const move = (position, roll) => position + (roll * 2);

// //------------------------------------------------------------------------------------------------------------------

// // Description:
// // Make a simple function called greet that returns the most-famous "hello world!".

// // Style Points
// // Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

// const greet = () => "hello world";


// // ----------------------------------------------------------------------------------------------------------------

// // Finish the uefaEuro2016() function so it return string just like in the examples below:

// // uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// // uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// // uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

// // function uefaEuro2016(teams, scores){
// //   let winner
// //   if(scores[1] > scores[0]) {
// //    winner = `${teams[1]} won!`;
// //   } else if
// //     (scores[0] > scores[1]){
// //     winner = `${teams[0]} won!`;
// //   } else if 
// //     (scores[1] === scores[0]) {
// //     winner = 'teams played draw.';
// //     }
// //   return `At match ${teams[0]} - ${teams[1]}, ${winner}`;
// // }

// // ----------------------------------------------------------------------------------------------------------------

// // Write a function which converts the input string to uppercase.

// // function makeUpperCase(str) {
// //   return str.toUpperCase();
// // }
// //-------------------------------

// // const makeUpperCase = str => str.toUpperCase();

// // ----------------------------------------------------------------------------------------------------------------

// // Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// // function fakeBin(x){
// //   let result = '';
// //   for(let i = 0; i < x.length; i++){
// //     x[i] < 5 ? result += 0 : result += 1;
// //   }
// //   return result;
// // }
// // //-----------------------------
// // function fakeBin(x) {
// //   return x.split('').map(n => n < 5 ? 0 : 1).join('');
// // }
// // //------------------------------
// // fakeBin = x => x.split('').map(e => e < 5 ? 0 : 1).join('');

// // --------------------------------------------------------------------------------------------------------------

// // Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// // function problem(x){
// //   if(typeof x == 'string') {
// //     return "Error";
// //   } else
// //   return (x * 50) + 6; 
// // }
// // //-------------------------

// // const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

// // ----------------------------------------------------------------------------------------------------------------
// // Find the longest word in a string...

// // function findLongest(str) {
  
// //   var spl = str.split(" ");
// //   var longest = 0;
  
// //   for (var i = 0; i < spl.length; i++) {
// //     if (spl[i].length > longest) {
// //       longest = spl[i].length;
// //     }
// // }
// //      return longest;
// // }

// //--------------------------------
// // const findLongest = s => Math.max(...s.split(" ").map(x => x.length));

// // -------------------------------------------------------------------------------------------

// // All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// // Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// // Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// // 1.  Split the animal name into individual characters, making it into an array.
// // 2.  Find the first and last character in the name.
// // 3.  Compare those first and last characters to the first and last letters of the dish name.

// // function feast(beast, dish) {
// //   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
// // }

// // //---------------------

// // function feast(beast, dish) {
// //   if (beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]) {
// //     return true;
// //   }
// //   else {return false;}
// // }

// // -------------------------------------------------------------------------------------

// // The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// // For example:

// // cockroachSpeed(1.08) == 30

// // ------------------------------------------------------------------------

// // Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// // Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


// // function lovefunc(flower1, flower2){
// //   if(flower1 % 2 === 0 && flower2 % 2 !== 0) {
// //     return true;
// //   } else {
// //   if(flower2 % 2 === 0 && flower1 % 2 !== 0) {
// //   return true;
// //   }
// //     return false;
// //   }

// //-------------------------

// // const lovefunc = (flower1, flower2) => 
// // flower1 % 2 === 0 && flower2 % 2 !== 0 
// // || flower2 % 2 === 0 && flower1 % 2 !== 0 ? true : false;


// // --------------------------------------------------------------------

// // function lovefunc(flower1, flower2){
// //   return flower1 % 2 !== flower2 % 2;
// // }

// //-----------------

// // function lovefunc(flower1, flower2){
// //   return (flower1 + flower2) % 2 === 1
// // }

// //--------------------

// // -------------------------------------------------------------------

// // Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

// // Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// // Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.

// // Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres

// // function converter (mpg) {
// //   let num =  (mpg*(1.609344/4.54609188));
// //   return +num.toFixed(2);
// // }
// // -------------------------
// // function converter(mpg) {
// //   let num =  mpg * .354;
// //   return +num.toFixed(2);
// // }
// //-------------------------
// // function converter (mpg) {
// //   let mpgConvert = (mpg * (1.609344 / 4.54609188));
// //   return +mpgConvert.toFixed(2);
// // }
// // ------------------------------------------------------------------


// // Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

// // The geese are any strings in the following array, which is pre-populated in your solution:

// //1.  .filter() , .includes()
// //2.  Compare the string of goose names to the string of birds.
// //3.  Return the bird names thst are not geese.

// // function gooseFilter (birds) {
// //   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// //    return birds.filter(bird => !geese.includes(bird));
// // };

// // // ------------------------------

// // const GEESE = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// // const gooseFilter = birds => birds.filter(bird => !GEESE.includes(bird));
// // // -------------------------------
// // const gooseFilter = birds =>
// //   (geese => birds.filter(val => !geese.includes(val)))
// //   ([`African`, `Roman Tufted`, `Toulouse`, `Pilgrim`, `Steinbacher`]);
// // ---------------------------------------------------------------

// // .map()
// // .map()
// // .map()
// // .map()
// // .map()
// // .map()

// // const dummyTransactions = [
// //   { id: 1, text: 'Flower', amount: -20 },
// //   { id: 2, text: 'Salary', amount: 300 },
// //   { id: 3, text: 'Book', amount: -10 },
// //   { id: 4, text: 'Camera', amount: 150 }
// // ];


// // const amounts = transactions.map((transaction) => transaction.amount);




// // const arr = [1,2,3,4];

// // const arr2 = arr.map(item => {
// //   return `Number:${item}`
// // });

// // console.log(arr2);

// // const arr2 = arr.map(item => {
// //   return item * 2;
// // });

// // console.log(arr2);


// // .map() and .sort()
// // .map() and .sort()
// // .map() and .sort()
// // .map() and .sort()
// // .map() and .sort()

// // const arr = [20, 23, 25, 30, 21, 50, 60];

// // const filterArr = arr.filter((num) => num > 19 && num < 30);

// // console.log(filterArr);

// // const sortFiltered = filterArr.sort((a, b) => a > b ? 1 : -1);

// // console.log(sortFiltered);

// // .reduce()
// // .reduce()
// // .reduce()
// // .reduce()
// // .reduce()
// // .reduce()

// //   const arr = [10, 10, 10, 10, 10];

// // const sum = arr.reduce(function(acc, currentValue) {
// //   return acc + currentValue
// // },0 );

// // console.log(sum);

// // -----------------------------------------------------------------

// // Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// // Return your answer as a number.

// //1.  Convert the array from mixed types to all Numbers..

// //2.  Add all of the numbers in the array with .reduce()...


// // function sumMix(x){
// //   return x.map(a => +a).reduce((a, b) => a + b);
// // }


// // function sumMix(x){
// //   let sum = 0;
// //   for (i = 0; i<x.length; i++) {
// //     sum += Number(x[i]);
// //   }
// //   return sum;
// // }

// // ---------------------------------------------------------------------------------

// // What is the most asked question on CodeWars?

// // Can someone explain /*...*/?

// // You need to write a function detect that will check if a string starts with Can someone explain, case sensitive. Return true if so, false otherwise.

// // // Let's hope you don't write a solution that makes people ask that question at you!

// // // function detect(str) {
// // //   let subString = 'Can someone explain ';
// // //   if (str.startsWith(subString)) {
// // //     return true;
// // //   } else 
// // //     return false;
// // // }
// // // =-------------------------------

// // // const detect = comment => comment.startsWith('Can someone explain')


// // console.clear();
// // // -------------------------------------------------------------------------------------------------------------------------------------

// // // Higher Order Functions


// // // sayHi = (name) => `Hi, ${name}!`;
// // // result = sayHi('User');
// // // console.log(result);

// // //-----------------------------

// // double = (x) => x * 2;
// // result = double(4);
// // // console.log(result);
// // //---------------------------------

// // getClearance = (allowed) => (allowed ? 'Access Granted' : 'Access Denied');

// // result1 = getClearance(true);
// // result2 = getClearance(false);

// // // console.log(result1);
// // // console.log(result2);
// // //------------------------------

// // getFirstName = (obj) => obj.firstName;
// // result = getFirstName({
// //   firstName: 'Yazeed'
// // });
// // // console.log(result);

// // //-------------------------

// // len = (array) => array.length;
// // result = len([1,2,3]);
// // console.log(result);

// //-------------------------------------------------------------------------------

// // Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

// // A few cases:


// // (-12, 2, -6)  ->  true
// // (-12, 2, -5)  ->  false

// // (45, 1, 6)    ->  false
// // (45, 5, 15)   ->  true

// // (4, 1, 4)     ->  true
// // (15, -5, 3)   ->  true

// // const isDivideBy = (num, a, b) => (num % a === 0 && num % b === 0) ? true : false;


// //-------------------------------
// // function isDivideBy(number, a, b) {
// //   return (number % a === 0 && number % b === 0) ? true : false;
// // }

// //----------------------------------------------------


// // Task
// // Given a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

// // Example
// // Input: 1,3,5,6,7,8

// // Output: 1,2,3,4,5,6,7,8

// //---------------------------------

// // function pipeFix(numbers){
// //   var first = numbers[0];
// //   var last = numbers[numbers.length-1];
  
// //   var arr = [];
// //   for(var i = first; i <= last; i++) {
// //     arr.push(i);
// //   }
// //   return arr;
// // }

// //-----------------------------
// // let pipeFix = nums => Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);
// //---------------------------
// // function pipeFix(num, arr = [] ){
// //   for ( let i = num[0]; i <= num.slice(-1)[0]; i++){
// //     arr.push(i)
// //   }
// //   return arr
// // }


// //------------------------------------------------------------------

// // Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// // //----------------------
// // function removeExclamationMarks(s) {
// //   return s.replace(/!/g,'');
// // }



// //-------------------------------------------------------------

// // Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// // For example,

// // [true,  true,  true,  false,
// //   true,  true,  true,  true ,
// //   true,  false, true,  false,
// //   true,  false, false, true ,
// //   true,  true,  true,  true ,
// //   false, false, true,  true]
// // The correct answer would be 17.

// // Hint: Don't forget to check for bad values like null/undefined

// //---------------------------------------------------

// // Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// // generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// // generateRange(1, 10, 3) // should return array of [1,4,7,10]
// // Note
// // min < max
// // step > 0
// // the range does not HAVE to include max (depending on the step)

// //1.  Declare an empty array[].
// //2.  Initialize a count that starts at the MIN.
// //3.  Increment that count by the value of the STEP.
// //4.  Stop the count when it reaches the MAX.
// //5.  push the incremented counter to the empty array[].
// //6.  Return the array[];


// // const  generateRange = (min, max, step) => {
// //   let arr= [];
// //   let count = min;
// //   for(let i = count; count<= max; count += step) {
// //     arr.push(count);
// //   }
// //   return arr;
// // }


// //------------------------------------------------------------------------------------------


// // The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// // You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// // For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// // All inputs will be integers. Please return an integer. Round down.

// //1. Figure out the amount that will be saved per bottle puchased at the discounted price.
// //2. Divide that amount by the total price of the Holiday.
// //3. Round that number down using Math.floor.   


// // function dutyFree(normPrice, discount, hol){
// //   let savings = normPrice * discount;
// //   return Math.floor(hol/savings * 100);
// // }
// //-----------------------------------------
// // function dutyFree(normPrice, discount, hol){
// //   return(Math.floor(hol / normPrice / discount * 100))
// // }
// //----------------------------------------------
// // const dutyFree = (normPrice, discount, holiday) => {
// //   let savings = normPrice * discount;
// //   return Math.floor(hol/savings * 100);
// // }

// ///----------------------------------------------------------------------------------------

// // There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// //1. You must find 2/3 of the quantity, and use that to calculate the total price.
// //2. discounted quantity = quantity - 1/3 of quantity.
// //3.  Multiply the discounted quantity by the price, and return it as the solution.


// // function mango(quantity, price){
// //   return price * (quantity - Math.floor(quantity / 3));
// // }

// //-------------------------------------

// // function mango(quantity, price){
// //   let discountQty = quantity - Math.floor(quantity / 3);
// //   return discountQty * price;
// // }

// // ------------------------------------------------------------------------------------------

// // Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// // For example,

// // [true,  true,  true,  false,
// //   true,  true,  true,  true ,
// //   true,  false, true,  false,
// //   true,  false, false, true ,
// //   true,  true,  true,  true ,
// //   false, false, true,  true]
// // The correct answer would be 17.

// // Hint: Don't forget to check for bad values like null/undefined

// //1.  Use .filter() to filter and count the true values in the array.

// // const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length;

// //--------------------------------------------------------------------------------------------

// // Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// // Example:
// // 348597 => [7,9,5,8,4,3]

// //1. First you must convert the number to a String, so that it can be split using the .split('') method.
// //2. Once it has been converted to a string, use .split() method to seperate it into individual digits.
// //3. Then you must convet it back into a number.
// //4. Then you must reverse the array of split numbers you have, adn return that as your solution.

// // function digitize(n) {
// //   let string = String(n);
// //   return string.split('').map(Number).reverse();
// // }
// //----------------------------------------------------------------------------------------------

// // Given an array of integers your solution should find the smallest integer.

// // For example:

// // Given [34, 15, 88, 2] your solution will return 2
// // Given [34, -345, -1, 100] your solution will return -345
// // You can assume, for the purpose of this kata, that the supplied array will not be empty.

// //------------------------------------------------------------------------------------------------------------------------

// // Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

// // const take = (arr, n) => {
// //   return arr.slice(0,n);
// // }

// //----------------------------------------------------------------------------------------------------------------------

// // Your function takes two arguments:

// // current father's age (years)
// // current age of his son (years)
// // Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// // const twiceAsOld = (dadYearsOld, sonYearsOld) => {
// //   return (dadYearsOld > sonYearsOld * 2) ? (dadYearsOld - sonYearsOld * 2) : 
// //   (sonYearsOld * 2) - dadYearsOld;
// // } 

// //-----------------
// // function twiceAsOld(dadYearsOld, sonYearsOld) {
// //   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// // }

// //----------------------------------------------------------------------------------------------------------------------------------

// // You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.

// // const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
// //   return mpg * fuelLeft >= distanceToPump ? true : false;
// // };
// //-------------
// // const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
// //   return distanceToPump/mpg <= fuelLeft
// // };
// //------------------------------------------------------------------------------------------------------------------------------
// // You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// // Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// // For example, update_light('green') should return 'yellow'.

// // function updateLight(current) {
// //   if(current == 'green') {
// //     return 'yellow';
// //   } else if 
// //     (current == 'yellow') {
// //       return 'red';
// //       } else 
// //         return 'green';
// // }

// //----------------
// // const updateLight = (current) => {
// //   return current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green';
// // } 
// //------------------
// // const updateLight = current => ({
// //   green: 'yellow',
// //   yellow: 'red',
// //   red: 'green',
// // })[current]
// //-----------------
// // function updateLight(current) {

// //   switch (current) {
// //     case 'green':
// //       return 'yellow';
// //       break;
// //     case 'yellow':
// //       return 'red';
// //       break;
// //     case 'red':
// //       return 'green';
// //       break;
// //     default:
// //       throw 'Error: wrong input';
// //       break;
// //   }
  
// // }

// //----------------------------------------------------------------------------------------------------------------------------------

// // Task Overview:
// // You have to write a function that accepts three parameters:

// // cap is the amount of people the bus can hold excluding the driver.
// // on is the number of people on the bus excluding the driver.
// // wait is the number of people waiting to get on to the bus excluding the driver.
// // If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// // Usage Examples:
// // cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// // cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

// // function enough(cap, on, wait) {
// //   if(cap - on >= wait) {
// //   return 0;
// //   } else 
// //     return wait - (cap - on);
// // }

// //---------------------
// // const enough = (cap, on, wait) => {
// //   return cap - on >= wait ? 0 : wait - (cap - on);
// // }



// let array1 = [1,2,3,4,5,6,7,8,9];

// const isEven = array1.filter(num => num % 2 === 0);
// // console.log(isEven);

// const double = array1.map(num => num * 2);

// console.log(double);


//----------------------------------------------------------------------------------------------------------------------------------

// Remove the first and last character from a String.

// const removeChar = (str) => {
//   return str.substring(1).slice(0,-1);
// }
// //--------------

// function removeChar(str) {
//   return str.slice(1, -1);
// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function first(arr, n) {
//   if(n >= 1) {
//   return arr.slice(0, n);
//   } else if
//     (n == 0) {
//     return [];
//     } else {
//       return arr.slice(0, 1);
// }
//   }

// //------------------------------------------------------------------------------------------------------------------------------------
// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// const countDevelopers = (list) => {
//   return list.filter((x) => x.continent == "Europe" && x.language == 'JavaScript').length;
// }

// function countDevelopers(list) {
//   let counter = 0;
//   list.filter((x) => {
//   x.continent == "Europe" && x.language == 'JavaScript' ? counter ++ : 0})

// return counter;
// }
//----------------------------------------------------------------------------

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ];
// your function should return the following array:

// [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?'
//   },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?'
//   } 
// ];


// function greetDevelopers(list) {
//   list.map((x) => 
//     x.greeting = (`Hi ${x.firstName}, what do you like the most about ${x.language}?`));
//     return list;
// }


//////-------------------------------------------------------------------------------------------

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];


// function isRubyComing(list) {
//   return list.some((devs) => devs.language == "Ruby");  
//  }

//--------------------------------------------------------------------------------------

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ];
// your function should return Victoria, Puerto Rico.

// Notes:












