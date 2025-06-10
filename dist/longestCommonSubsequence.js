"use strict";
// 1143. Longest Common Subsequence
function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    // Create a 2D array to store the lengths of common subsequences
    const dp = Array(m + 1)
        .fill(null)
        .map(() => Array(n + 1).fill(0));
    // Iterate through the strings, building up the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // If characters match, increment the LCS length
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                // If characters don't match, take the maximum LCS length from previous rows/columns
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    // The bottom-right cell of the dp array contains the length of the LCS
    return dp[m][n];
}
// inputs
console.log(longestCommonSubsequence("abcde", "ace")); // 3
console.log(longestCommonSubsequence("abc", "abc")); // 3
console.log(longestCommonSubsequence("abc", "def")); // 0
