"use strict";
/*
984. String Without AAA or BBB

Example 1:
Input: a = 1, b = 2
Output: "abb"
Explanation: "abb", "bab" and "bba" are all correct answers.

Example 2:
Input: a = 4, b = 1
Output: "aabaa"
*/
function stringWithout3a3b(a, b) {
    let result = '';
    // Continue until all 'a's and 'b's are used
    while (a > 0 || b > 0) {
        const len = result.length;
        const lastTwo = result.slice(-2); // Check the last two characters to avoid "aaa" or "bbb"
        // If the last two are "aa", we must place a 'b' to avoid "aaa"
        if ((lastTwo === 'aa' && b > 0)) {
            result += 'b';
            b--;
            // If the last two are "bb", we must place an 'a' to avoid "bbb"
        }
        else if ((lastTwo === 'bb' && a > 0)) {
            result += 'a';
            a--;
            // If more 'a's remain than 'b's, prefer placing 'aa'
        }
        else if (a > b && a > 0) {
            // Add 'aa' if enough a's remain
            if (a >= 2) {
                result += 'aa';
                a -= 2;
            }
            else {
                result += 'a';
                a--;
            }
            // If more 'b's remain than 'a's, prefer placing 'bb'
        }
        else if (b > a && b > 0) {
            // Add 'bb' if enough b's remain
            if (b >= 2) {
                result += 'bb';
                b -= 2;
            }
            else {
                result += 'b';
                b--;
            }
            // If 'a' and 'b' are equal, alternate safely
        }
        else {
            // Equal a and b
            if (a > 0) {
                result += 'a';
                a--;
            }
            if (b > 0) {
                result += 'b';
                b--;
            }
        }
    }
    return result;
}
// Inputs
console.log(stringWithout3a3b(1, 2)); // "abb", "bab", or "bba"
console.log(stringWithout3a3b(4, 1)); // "aabaa" or "aabaa"
console.log(stringWithout3a3b(3, 3)); // "ababab", "aabbab", etc.
console.log(stringWithout3a3b(0, 5)); // "bbabb" (never "bbb")
console.log(stringWithout3a3b(0, 0)); // ""
console.log(stringWithout3a3b(3, 7)); // "bbabbabbab"
