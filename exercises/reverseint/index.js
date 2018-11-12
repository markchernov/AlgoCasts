// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var str = n.toString();
    if (str.startsWith('-')) {
        str = str.substring(1, str.length)
            .split('').reverse().join('');
        return Number('-' + str);
    } else return Number(str
        .split('').reverse().join(''));
}

export default reverseInt;
