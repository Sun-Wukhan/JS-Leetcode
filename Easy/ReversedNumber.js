/* Function: reverse */
///////////////////////////////////////////////////////////////////////////////////////////
function reverse(x) {
    const reversedString = x.toString().split('').reverse().join(''); // Convert the number to a string, reverse the string, and convert it back to a number
    const reversedNumber = x < 0 ? -parseInt(reversedString) : parseInt(reversedString); // Handle the sign of the reversed number
    
    if (reversedNumber < Math.pow(-2, 31) || reversedNumber > Math.pow(2, 31) - 1) {
        return 0; // Check for overflow and return 0 if the reversed number is out of range
    }
    
    return reversedNumber; // Return the reversed number
}

console.log(reverse(12131)); // Output: 13121 (Reversed number of 12131)

/* Function: reverseNumberByString */
///////////////////////////////////////////////////////////////////////////////////////////
function reverseNumberByString(number) {
    const str = number.toString(); // Convert the number to a string
    const reversedString = str.split('').reverse().join(''); // Reverse the string by converting it to an array of characters, reversing, and joining back into a string
    
    return reversedString; // Return the reversed string
}

const number = 98765;
console.log(reverseNumberByString(number)); // Output: "56789" (Reversed string representation of the number 98765)
