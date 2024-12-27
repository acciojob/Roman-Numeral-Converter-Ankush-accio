// Function to convert a number to Roman numerals
function convertToRoman(num) {
    // Define the symbols and their values
    const romanSymbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    // Result string to hold the Roman numeral
    let roman = '';

    // Iterate over each symbol and value pair
    for (let [symbol, value] of romanSymbols) {
        // Append the symbol to the result while the number is >= the value
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    }

    return roman;
}

// Example usage
console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
