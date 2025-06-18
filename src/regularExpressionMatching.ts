/* 10. Regular Expression Matching

Example 1:
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Example 3:
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
*/

function regularExpressionMatching(s: string, p: string): boolean {
    const m= s.length;
    const n= p.length;
    // Creates 2D array to store the matching results
    const dp: boolean[][]= Array(m+1).fill(null).map(()=> Array(n+1).fill(false));

    // If empty string matches empty pattern
    dp[0][0]= true;

    // To handle patterns a*, a*b*, etc

    for(let j=1; j<=n; j++) {
        if (p[j-1] === '*') {
            dp[0][j]= dp[0][j-2];
        }
    } 

    // Loop to all characters in s and p
    for(let i= 1; i<= m; i++) {
        for(let j= 1; j<= n; j++) {
            // If current characters match has '.'
            if(p[j-1] === '.' || p[j-1] === s[i-1]) {
                dp[i][j]= dp[i-1][j-1];
            } else if (p[j-1] === '*') {
                // * matches zero occurrences
                dp[i][j]= dp[i][j-2]; 
                if(p[j-2] === '.' || p[j-2] === s[i-1]) {
                    // * matches one or more occurrences
                    dp[i][j]= dp[i][j] || dp[i-1][j]; 
                }
                // If characters don't match it's false
            } else {
                dp[i][j]= false;
            }
        }
    }

    return dp[m][n];
}

// inputs
console.log(regularExpressionMatching("aa", "a"));                          // false
console.log(regularExpressionMatching("aa", "a*"));                        // true
/* 
console.log(regularExpressionMatching("ab", ".*"));                       // true
console.log(regularExpressionMatching("aaa", "ab*a*c*a"));               // true
console.log(regularExpressionMatching("ab", ".*c"));                    // false
console.log(regularExpressionMatching("bbbba", ".*a*a"));              // true
console.log(regularExpressionMatching("a", "ab*"));                   // true
*/