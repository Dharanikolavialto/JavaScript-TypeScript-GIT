/* 
1542. Find Longest Awesome Substring
Example 1:
Input: s = "3242415"
Output: 5
Explanation: "24241" is the longest awesome substring, we can form the palindrome "24142" with some swaps.

Example 2:
Input: s = "12345678"
Output: 1

Example 3:
Input: s = "213123"
Output: 6
Explanation: "213123" is the longest awesome substring, we can form the palindrome "231132" with some swaps.
*/

function longestAwesomeSubstring(s: string): number {
    let maxLength = 1;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const sub = s.substring(i, j + 1);
            if (isAwesome(sub)) {
                maxLength = Math.max(maxLength, sub.length);
            }
        }
    }

    return maxLength;
}

function isAwesome(s: string): boolean {
    if (s.length === 0) {
        return false;
    }

    const counts: { [key: string]: number } = {};
    for (const char of s) {
        counts[char] = (counts[char] || 0) + 1;
    }

    let oddCount = 0;
    for (const key in counts) {
        if (counts.hasOwnProperty(key)) {
            if (counts[key] % 2 !== 0) {
                oddCount++;
            }
        }
    }

    return oddCount <= 1;
}

console.log(longestAwesomeSubstring("3242415"));            // 5
console.log(longestAwesomeSubstring("12345678"));          // 1
console.log(longestAwesomeSubstring("213123"));           // 6
console.log(longestAwesomeSubstring("11111"));           // 5
console.log(longestAwesomeSubstring("000"));            // 3
console.log(longestAwesomeSubstring(""));              // 1