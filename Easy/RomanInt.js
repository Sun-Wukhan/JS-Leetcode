function romanToInt(s) {
    let result = 0;
    let previousValue = 0; 

    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    for(let i = s.length-1; i >= 0; i--) {
        const currentValue = romanMap[s.charAt(i)];
        console.log("This is the current value: ", currentValue)
        // console.log("I am in the current value: ", currentValue)

        if(currentValue < previousValue) {
            result -= currentValue
            // console.log("This is the result: ", result)
        } else {
            result += currentValue
            // console.log("This is the result: ", result)
        }
        previousValue = currentValue;
        // console.log("This is the previous value: ", previousValue)
    }

    return result;
}

console.log(romanToInt("III")); // Output: 3
// console.log(romanToInt("IV")); // Output: 4
// console.log(romanToInt("IX")); // Output: 9
// console.log(romanToInt("LVIII")); // Output: 58
// console.log(romanToInt("MCMXCIV")); // Output: 1994