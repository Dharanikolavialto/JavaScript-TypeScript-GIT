/* 
1513. Number of Substrings With Only 1s

Example 1:
Input: s = "0110111"
Output: 9
Explanation: There are 9 substring in total with only 1's characters.
"1" -> 5 times.
"11" -> 3 times.
"111" -> 1 time.

Example 2:
Input: s = "101"
Output: 2
Explanation: Substring "1" is shown 2 times in s.

Example 3:
Input: s = "111111"
Output: 21
Explanation: Each substring contains only 1's characters.
*/

function numOfSubstrings(s: string): number {
    // Modulo constant to prevent integer overflow
    const MOD= 10*9+7;
    let count= 0; // Counts consecutive '1's
    let result= 0; // Accumulates total substrings of all '1's

    for (let i= 0; i< s.length; i++) {
        if (s[i] === '1') {
            // Increment count for each '1'
            count++;
        } else {
            result= (result + (count * (count + 1)) / 2) % MOD;
            count= 0;
        }
    }

    // Add the last run if it ends with '1'
    if (count> 0) {
        result= (result + (count * (count + 1)) / 2) % MOD;
    }

    return result;
}

// Inputs
console.log(numOfSubstrings("0110111"));         // 9
console.log(numOfSubstrings("101"));            // 2
console.log(numOfSubstrings("111111"));        // 21
console.log(numOfSubstrings("0"));            // 0
console.log(numOfSubstrings("1"));           // 1