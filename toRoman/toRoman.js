/* eslint-disable */
function toRoman(num) {
    // Step 1. Make sure number is integer and from 1 to 3999
    if (num > 3999 || num < 1 || num % 1 !== 0) {
        return 'Not defined.';
    }
    // Step 2. Conversion table. Arranged from largest to smallest
    const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    // let num = 1024

    // Step 3. Initiate a variable that will hold the result
    let result = '';

    // Step 4. FOR loop
    for (let i = 0; i < arabicNumeral.length; i++) {
        while (num >= arabicNumerals[i]) {
            result += romanNumerals[i];
            num -= arabicNumerals[i];
        }
    }
    // arabicNumeral.length = 13
    //   i = ?    i < arabicNumeral.length?   while (num >= arabicNumerals[i])?  result += romanNumerals[i]   num -= arabicNumerals[i]
    //   0        yes                         true (1024 >= 1000)                result = 'M'                 num = 24
    //   1        yes                         false (24 < 900)
    //   8        yes                         true (24 >= 10)                    result = 'MX'                num = 14
    //   8        yes                         true (14 >= 10)                    result = 'MXX'               num = 4
    //  11        yes                         true (4 >= 4)                      result = 'MXXIV'             num = 0
    //  12        yes                         false (0 < 1)
    // End the loop

    // Step 5. Return result
    return result; // 'MXXIV'
}

//////// 以下是測試程式，請勿更動 /////////
const expect = (name, value, result) => {
    if (value === result) {
        return true;
    }

    throw new Error(`${name} failed successfully`);
};

expect('toRoman(1)', toRoman(1), 'I');
expect('toRoman(2)', toRoman(2), 'II');
expect('toRoman(3)', toRoman(3), 'III');
expect('toRoman(4)', toRoman(4), 'IV');
expect('toRoman(5)', toRoman(5), 'V');
expect('toRoman(6)', toRoman(6), 'VI');
expect('toRoman(9)', toRoman(9), 'IX');
expect('toRoman(10)', toRoman(10), 'X');
expect('toRoman(27)', toRoman(27), 'XXVII');
expect('toRoman(48)', toRoman(48), 'XLVIII');
expect('toRoman(59)', toRoman(59), 'LIX');
expect('toRoman(93)', toRoman(93), 'XCIII');
expect('toRoman(141)', toRoman(141), 'CXLI');
expect('toRoman(150)', toRoman(150), 'CL');
expect('toRoman(163)', toRoman(163), 'CLXIII');
expect('toRoman(402)', toRoman(402), 'CDII');
expect('toRoman(575)', toRoman(575), 'DLXXV');
expect('toRoman(911)', toRoman(911), 'CMXI');
expect('toRoman(1024)', toRoman(1024), 'MXXIV');
expect('toRoman(1050)', toRoman(1050), 'ML');
expect('toRoman(1500)', toRoman(1500), 'MD');
expect('toRoman(1505)', toRoman(1505), 'MDV');
expect('toRoman(3000)', toRoman(3000), 'MMM');

console.log('all pass!');
