"use strict";
// 647. Palindromic Substrings
function palindromeSubstrings(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        // Odd length palidromes
        count += expandAroundCenter(s, i, i);
        // Even length palidromes
        count += expandAroundCenter(s, i, i + 1);
    }
    return count;
    function expandAroundCenter(s, left, right) {
        let count = 0;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
        return count;
    }
}
// inputs
console.log(palindromeSubstrings("abc")); // 3
console.log(palindromeSubstrings("aaa")); // 6
console.log(palindromeSubstrings("abba")); // 6
console.log(palindromeSubstrings("racecar")); // 10
console.log(palindromeSubstrings("")); // 0  
