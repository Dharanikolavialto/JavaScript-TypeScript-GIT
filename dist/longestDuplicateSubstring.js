"use strict";
/*
1044. Longest Duplicate Substring

Example 1:
Input: s = "banana"
Output: "ana"

Example 2:
Input: s = "abcd"
Output: ""
*/
function longestDuplicateSubstring(s) {
    // Variable to store the longest duplicate substring found so far
    let longestDuplicate = "";
    // Trying all possible substring lengths from longest to shortest
    for (let length = s.length - 1; length > 0; length--) {
        // Map to keep track of all substrings of the current length
        const substrings = new Map();
        // Slide a window of 'length' characters over the string
        for (let i = 0; i <= s.length - length; i++) {
            const sub = s.substring(i, i + length);
            // If this substring has been seen before, it's a duplicate
            if (substrings.has(sub)) {
                // Update longestDuplicate only if it's longer than the previous one
                if (sub.length > longestDuplicate.length) {
                    longestDuplicate = sub;
                }
                // Return immediately after finding one
                return longestDuplicate;
            }
            else {
                // Store the substring in the map to track its occurrence
                substrings.set(sub, 1);
            }
        }
    }
    // If no duplicate was found, return an empty string
    return longestDuplicate;
}
// Inputs
console.log(longestDuplicateSubstring("banana")); // ana
console.log(longestDuplicateSubstring("abcd")); // ""
console.log(longestDuplicateSubstring("aaaaa")); // aaaa
console.log(longestDuplicateSubstring("abcabcabc")); // abcabc
console.log(longestDuplicateSubstring("aabcaabdaab")); // aab
console.log(longestDuplicateSubstring("abcdeffedcba")); // f
console.log(longestDuplicateSubstring("mississippi")); // issi
console.log(longestDuplicateSubstring("ababababa")); // abababa
console.log(longestDuplicateSubstring("xyzxyzxyzx")); // xyzxyzx
