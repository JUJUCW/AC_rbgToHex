/* eslint-disable */
function findLongestWord(sentence) {
    // Step 1. The split() method splits a String object into an array.

    const words = sentence.split(' ');
    // Add an empty space within split() method (split(' '))
    // let sentSplit = 'This is an apple'.split(' ')
    // output [ 'This', 'is', 'an', 'apple' ]

    // Step 2. Initiate a variable that will hold the length of the longest word
    let maxLength = 0;

    // Step 3. Use FOR loop
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            longestWord = words[i];
        }
    }
    // word.length = 4
    //      i = ?    i < word.length?   i++   if(word[i].length > maxLength)?  maxLength = word[i].length   longestWord = word[i]
    // 1st  0        yes                1     true (4 > 0)                     maxLength = 4                longestWord = This
    // 2nd  1        yes                2     false (2 < 4)
    // 3rd  2        yes                3     false (2 < 4)
    // 4th  3        yes                4     true (5 > 4)                     maxLength = 5                longestWord = apple
    // 5th  4        no
    // End the loop

    // Step 4. Return longestWord
    return longestWord; // apple
    // Must return the result, do not console.log() the result, console.log() is used in testing not for the function() itself
}

////////    以下是測試程式，請勿更動    /////////
const expect = (name, value, result) => {
    if (value === result) {
        return true;
    }

    throw new Error(`${name} failed successfully`);
};

expect('This is an apple', findLongestWord('This is an apple'), 'apple');
expect('Good morning everybody', findLongestWord('Good morning everybody'), 'everybody');
expect('Please prepare your book', findLongestWord('Please prepare your book'), 'prepare');
expect('Gone with the wind', findLongestWord('Gone with the wind'), 'Gone');

console.log('all pass!');
