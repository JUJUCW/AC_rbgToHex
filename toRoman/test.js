/* eslint-disable */
function toRoman(num) {
    if (num > 3999 || num < 1 || num % 1 !== 0) {
        return 'Not defined.';
    }
    const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = '';


    for (let i = 0; i < arabicNumeral.length; i++) {

        while (num >= arabicNumerals) {

            result += romanNumerals;

            num -= arabicNumerals;
        }
    }

    return result;
}
