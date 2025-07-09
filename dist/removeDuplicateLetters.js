"use strict";
/*
316. Remove Duplicate Letters

Example 1:
Input: s = "bcabc"
Output: "abc"

Example 2:
Input: s = "cbacdcbc"
Output: "acdb"
*/
function removeDuplicateLetters(s) {
    const lastIndex = {}; // Stores the last index of each character
    const inStack = {}; // Keeps track of characters in the stack
    const stack = []; // Stack to build the result string
    // Calculate the last occurrence index for each character
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }
    // Iterate through the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (inStack[char])
            continue; // Skip if already in stack
        // Remove characters from stack if lexicographically larger and appear later
        while (stack.length && stack[stack.length - 1] > char && lastIndex[stack[stack.length - 1]] > i) {
            const removedChar = stack.pop();
            inStack[removedChar] = false;
        }
        stack.push(char);
        inStack[char] = true;
    }
    return stack.join('');
}
// Test cases
console.log(removeDuplicateLetters("bcabc")); // "abc"
console.log(removeDuplicateLetters("cbacdcbc")); // "acdb"
console.log(removeDuplicateLetters("aabcddjfjfffcc")); // "abcdfj"
console.log(removeDuplicateLetters("aaaa")); // "a"  
console.log(removeDuplicateLetters("zxyxzyz")); // "xyz"   
console.log(removeDuplicateLetters("thequickbrownfoxjumpsoverthelazydog")); // "thequickbrownfxjmpsvlazydg"
console.log(removeDuplicateLetters("edcba")); // "edcba"  
console.log(removeDuplicateLetters("abcdabcd")); // "abcd"  
console.log(removeDuplicateLetters("")); // "" 
console.log(removeDuplicateLetters("abacb")); // "abc"  
