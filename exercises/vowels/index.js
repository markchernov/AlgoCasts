// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vs = ['a', 'e', 'i', 'o', 'u'];
  let ret = 0;
  str.toLowerCase().split('').forEach((element) => {
    if (vs.includes(element)) ret += 1;
  });
  return ret;
}


module.exports = vowels;
