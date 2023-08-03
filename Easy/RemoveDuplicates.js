function removeDuplicates(nums) {
    if(nums.length === 0) {
        return 0;
    }

    let j = 0; 

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[j]) {
            j++;
        } if( i !== j) {
            nums[j] = nums[i];
            
        }
    }

    return j + 1
}

// Test Case 1
const nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1)); // Output: 2, nums1 = [1, 2]

// Test Case 2
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2)); // Output: 5, nums2 = [0, 1, 2, 3, 4]

// Test Case 3
const nums3 = [1, 1, 1, 1, 1];
console.log(removeDuplicates(nums3)); // Output: 1, nums3 = [1]

// Test Case 4
const nums4 = [1, 2, 3, 4, 5];
console.log(removeDuplicates(nums4)); // Output: 5, nums4 is unchanged, [1, 2, 3, 4, 5]