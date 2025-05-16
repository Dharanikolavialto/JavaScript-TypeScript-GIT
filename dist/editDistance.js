"use strict";
function minDistance(word1, word2) {
    // Create a 2D DP array to store results of subproblems
    let dp = Array(word1.length + 1).fill(0).map(() => Array(word2.length + 1).fill(0));
    // Base cases: if one string is empty, we need to insert/delete all characters
    for (let i = 0; i <= word1.length; i++) {
        dp[i][0] = i; // It takes i deletions to turn word1[0..i-1] into an empty string
    }
    for (let j = 0; j <= word2.length; j++) {
        dp[0][j] = j; // It takes j insertions to turn an empty string into word2[0..j-1]
    }
    // Fill the DP table for all other cases
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // No operation needed if characters are the same
            }
            else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, // Delete a character from word1
                dp[i][j - 1] + 1, // Insert a character into word1
                dp[i - 1][j - 1] + 1 // Replace a character in word1
                );
            }
        }
    }
    // The result is stored at dp[word1.length][word2.length]
    return dp[word1.length][word2.length];
}
console.log(minDistance("horse", "ros")); // Output: 3
console.log(minDistance("intention", "execution")); // Output: 5
