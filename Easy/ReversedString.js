/* Function: reverse */
///////////////////////////////////////////////////////////////////////////////////////////
function reverse(x) {
    const reversedString = x.toString().split('').reverse().join(''); // Convert the input x to a string, reverse it, and convert it back to a string

    if (x === reversedString) { // Check if the original input is equal to the reversed string
        return 'This is a reversed string'; // If they are equal, it means the input is a palindrome, so return this message
    } else {
        return 'This is not a reversed string'; // If they are not equal, it means the input is not a palindrome, so return this message
    }
}

console.log(reverse("isip")); // Output: "This is a reversed string" (Since "isip" reads the same backward as forward, it is a palindrome)
