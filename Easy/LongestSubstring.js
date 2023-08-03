function lengthOfLongestSubstring(s) {
    // Create a Map to store the last index of each character encountered in the string.
    let charMap = new Map();
    // Initialize the starting index of the current substring.
    let initial = 0;
    // Initialize the maximum length of the substring without repeating characters.
    let maxLength = 0;

    // Loop through the entire string.
    for (let i = 0; i < s.length; i++) {
        // Get the current character at index 'i'.
        const char = s.charAt(i);

        // Check if the character already exists in the Map (i.e., it is a repeating character).
        if (charMap.has(char)) {
            // Move the 'initial' index to the right of the last occurrence of the current character.
            // This is done to ensure that we exclude the repeating character from the current substring.
            initial = Math.max(initial, charMap.get(char) + 1);
        }

        // Update the index of the current character in the Map.
        charMap.set(char, i);
        console.log(charMap);

        // Calculate the length of the current substring without repeating characters.
        maxLength = Math.max(maxLength, i - initial + 1);
        console.log("Number: ", i)
        console.log("Initial: ", initial)
        console.log("Max Length: ", maxLength);
    }

    // Return the maximum length of the substring without repeating characters.
    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestSubstring("")); // Output: 0
