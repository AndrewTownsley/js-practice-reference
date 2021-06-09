// Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.

// And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word. Let's help him do it, too.

// Task:
// Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we must return "iPhone". But we have a few rules:

// The word should not begin with the letter "I", for example Inspire.
// The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
// The first letter is not capital, for example road.
// If the word does not meet the rules, we return "Invalid word".



function i(word) {
      
  let vowelCount = 0;
  const vowels = ["a","e","i","o","u"];

  for(let char of word) {
    if (vowels.includes(char)) {
      vowelCount ++;
    }
  }
  
  if (vowelCount >= word.length ||   word.charAt(0) == "i" || word.charAt(0) !== word.charAt(0).toUpperCase()) {
  return "Invalid word"
} else
  return `i${word}`
}
// //=======================================================================

// // Split the word into individual characters.

// // Word cannot begin with the letter "i"
function start(word) {
  return word.charAt(0);
}

console.log(start("iInspire"));
// // Vowels cannot outnumber Consonants.

    //Declare an empty array for the vowels to be added to
    // Declare an array with the vowels

// First letter cannot be capitalized. 




//========================================================================

// Count the number of Vowels in a given "string"

const getCount = (str) => {
  //Declare an empty array for the vowels to be added to
  let vowelCount = 0;
  // Declare an array with the vowels
  const vowels = ["a","e","i","o","u"];

  for(let char of str) {
    if (vowels.includes(char)) {
      vowelCount ++;
    }
  }
  return vowelCount;
}

// console.log(getCount("abracadabra"));