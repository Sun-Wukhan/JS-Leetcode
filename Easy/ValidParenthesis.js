/* Function: isValid */
///////////////////////////////////////////////////////////////////////////////////////////
function isValid(s) {
    const stack = []; // Initialize an empty stack to store encountered opening brackets
    const map = {
        ')': '(',
        '}': '{',
        ']': '[',
    }; // A mapping of closing brackets to their corresponding opening brackets

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i); // Get the character at the current index

        if (char == '(' || char == '{' || char === '[') { // Check if the character is an opening bracket
            stack.push(char); // Push the opening bracket onto the stack
        } else {
            const top = stack.pop(); // Pop the top element from the stack (last encountered opening bracket)
            if (top !== map[char]) { // Check if the top element matches the corresponding opening bracket for the current closing bracket
                return false; // If they don't match, the string is invalid, return false
            }
        }
    }

    return stack.length === 0; // If the stack is empty, it means all brackets are correctly paired, and the string is valid
}

/* Test Cases */
///////////////////////////////////////////////////////////////////////////////////////////
console.log(isValid("()")); // Output: true (Valid: The brackets are correctly paired)
console.log(isValid("()[]{}")); // Output: true (Valid: The brackets are correctly paired)
console.log(isValid("(]")); // Output: false (Invalid: The brackets are not correctly paired)
console.log(isValid("([)]")); // Output: false (Invalid: The brackets are not correctly paired)
console.log(isValid("{[]}")); // Output: true (Valid: The brackets are correctly paired)
