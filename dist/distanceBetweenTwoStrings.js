"use strict";
// 3361. Shift Distance Between Two Strings
// Function to find the cost to change s into t
function shiftDistance(s, t, nextCost, previousCost) {
    let totalCost = 0; // Start with 0 cost
    const n = s.length; // Get length of strings
    // Go through each letter in the strings
    for (let i = 0; i < n; i++) {
        // Find how many steps to move forward from s to t
        const diff = (t.charCodeAt(i) - s.charCodeAt(i) + 26) % 26; // Ensure positive difference
        const forwardCost = nextCost[diff];
        const backwardCost = previousCost[(26 - diff) % 26]; // Calculate cost of moving in the opposite direction
        // Add the smaller cost to the total
        if (forwardCost <= backwardCost) {
            totalCost += forwardCost;
        }
        else {
            totalCost += backwardCost;
        }
    }
    return totalCost; // Return the total cost
}
const s = "abab"; // Start string
const t = "baba"; // Target string
// Cost to move forward by 0 to 25 steps
const nextCost = [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// Cost to move backward by 0 to 25 steps
const previousCost = [1, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(shiftDistance(s, t, nextCost, previousCost)); // 0
/*
Examples:
1. const s = "abc";
const t = "bcd";
const nextCost = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const previousCost = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
output- 3

2. const s = "xyz";
const t = "wxy";
const nextCost = [0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
const previousCost = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
output- 3

3. const s = "aaaa";
const t = "azaz";
const nextCost = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125];
const previousCost = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75];
output- 6
*/ 
