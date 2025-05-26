"use strict";
function canMakePaliFromSubstring(s, queries) {
    const n = s.length;
    const prefix = Array(n + 1).fill(0).map(() => Array(26).fill(0));
    const aCode = 'a'.charCodeAt(0);
    // Build prefix sum of character counts
    for (let i = 0; i < n; i++) {
        const charIndex = s.charCodeAt(i) - aCode;
        for (let j = 0; j < 26; j++) {
            prefix[i + 1][j] = prefix[i][j];
        }
        prefix[i + 1][charIndex]++;
    }
    const result = [];
    for (const [left, right, k] of queries) {
        let oddCount = 0;
        for (let j = 0; j < 26; j++) {
            const count = prefix[right + 1][j] - prefix[left][j];
            if (count % 2 !== 0) {
                oddCount++;
            }
        }
        // You need at least floor(oddCount / 2) changes to make it a palindrome
        result.push(Math.floor(oddCount / 2) <= k);
    }
    return result;
}
console.log(canMakePaliFromSubstring("abcda", [[3, 3, 0], [1, 2, 0], [0, 3, 1], [0, 3, 2], [0, 4, 1]])); // [true, false, false, true, true]
console.log(canMakePaliFromSubstring("lyb", [[0, 1, 0], [2, 2, 1]])); // [false, true]
