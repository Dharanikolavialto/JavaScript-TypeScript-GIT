"use strict";
/* 336. Palindrome Pairs

Example 1:
Input: words = ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are ["abcddcba","dcbaabcd","slls","llssssll"]

Example 2:
Input: words = ["bat","tab","cat"]
Output: [[0,1],[1,0]]
Explanation: The palindromes are ["battab","tabbat"]

Example 3:
Input: words = ["a",""]
Output: [[0,1],[1,0]]
Explanation: The palindromes are ["a","a"]
*/
function palindromePairs(words) {
    const result = [];
    const wordsMap = new Map();
    // To store reversed words and their indices in map
    for (let i = 0; i < words.length; i++) {
        wordsMap.set(words[i], i);
    }
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const n = word.length;
        // Splits the word into all possible pairs
        for (let j = 0; j < n; j++) {
            const prefix = word.substring(0, j);
            const suffix = word.substring(j);
            // Checking for palindrome suffix with reversed prefix
            if (isPalindrome(prefix)) {
                const reversedSuffix = suffix.split("").reverse().join("");
                if (wordsMap.has(reversedSuffix) && wordsMap.get(reversedSuffix) !== i) {
                    result.push([wordsMap.get(reversedSuffix), i]);
                }
            }
            // Checking for palidrome prefix with reveresed suffix (but not the empty string)
            if (suffix.length > 0 && isPalindrome(suffix)) {
                const reversedPrefix = prefix.split("").reverse().join("");
                if (wordsMap.has(reversedPrefix) && wordsMap.get(reversedPrefix) !== i) {
                    result.push([i, wordsMap.get(reversedPrefix)]);
                }
            }
        }
    }
    return result;
    // Helper function to check if string is a palindrome
    function isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
// inputs
console.log(palindromePairs(["abcd", "dcba", "lls", "s", "sssll"])); // [ [ 1, 0 ], [ 0, 1 ], [ 3, 2 ], [ 2, 4 ] ]
console.log(palindromePairs(["bat", "tab", "cat"])); // [ [ 1, 0 ], [ 0, 1 ] ]
console.log(palindromePairs(["a", ""])); // [ [ 0, 1 ] ]
// console.log(palindromePairs(["abc", "cba", "xyx"]));             // [ [ 1, 0 ], [ 0, 1 ] ]
// console.log(palindromePairs(["madam", "racecar", "civil"]));    // []
