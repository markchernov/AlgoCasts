// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let words = str.split(' ');
    let answer = '';
    for (let word of words) {
        answer = answer + word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    }
    return answer.substring(0, answer.length - 1);
}

module.exports = capitalize;
