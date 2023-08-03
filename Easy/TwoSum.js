/* Method 1: Using Maps */
///////////////////////////////////////////////////////////////////////////////////////////
function twoSumWithMaps(nums, target) {
    const numMap = new Map(); // Create a map to store elements and their indices
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]; // Get the current element from the array
        let difference = target - nums[i]; // Calculate the difference to find the complement
        
        if (numMap.has(difference)) { // Check if the difference exists in the map
            return [numMap.get(difference), i]; // If found, return the indices of the pair
        }
        numMap.set(num, i); // If not found, store the current element and its index in the map
    }

    return []; // If no pair is found, return an empty array
}

/* Method 2: Using Nested Loops */
///////////////////////////////////////////////////////////////////////////////////////////
function twoSumWithLoops(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]; // If a pair with the correct sum is found, return their indices
            }
        }
    }

    return []; // If no pair is found, return an empty array
}

/* Output */
///////////////////////////////////////////////////////////////////////////////////////////
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSumWithLoops(nums, target)); // Output: [0, 1] (Indices of the pair [2, 7])
