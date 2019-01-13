// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const count = new Map();

    str.split('').forEach(char => {
        if (count[char]) {
            count.set(char, count.get(char) + 1);
        } else {
            count.set(char, 1);
        }
    });

    let answer = '';

    str.split('').forEach(char => {
        let highest = 0;
        if (highest < count.get(char)) {
            highest = count.get(char)
            answer = char;
        }
    })

    return answer;
}

module.exports = maxChar;
