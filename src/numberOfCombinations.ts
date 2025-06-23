/*
1977. Number of Ways to Separate Numbers

Example 1:
Input: num = "327"
Output: 2
Explanation: You could have written down the numbers:
3, 27
327

Example 2:
Input: num = "094"
Output: 0
Explanation: No numbers can have leading zeros and all numbers must be positive.

Example 3:
Input: num = "0"
Output: 0
Explanation: No numbers can have leading zeros and all numbers must be positive.
*/

function numberOfCombinations(num: string): number {
    const MOD= 10**9+7; // Modulo to prevent large number overflow
    const n= num.length;
    const dp: number[][]= Array(n+1).fill(null).map(()=> Array(n+1).fill(0));

    // Initialize dp for substrings of length 1
    for(let i=1; i<=n; i++) {
        if(num[i-1]=== '0') {
            continue;
        }
        dp[i][i]= 1;
    }

    // Process substrings of increasing length
    for(let len= 2; len<=n; len++) {
        for(let i=1; i<=n-len+1; i++) {
            const j= i+len-1;
            if(num[i-1]=== '0') {
                continue;
            }

            // splitting the current substring into two parts at position k
            for(let k=i; k<j; k++) {
                if(num[k]=== '0') {
                    continue;
                }
                const len1 = k - i + 1;
                const len2 = j - k;
                if (len1 > len2) {
                    continue;
                }

                // If two values same length, ensure first number <= second number
                if(len1 === len2) {
                    if(num.substring(i-1, k)> num.substring(k, j)) {
                        continue;
                    }
                }

                if(len1 < len2) {
                    dp[i][j]= (dp[i][j] + dp[k+1][j]) % MOD;
                    continue;
                }

                // Add valid combination count from second part
                dp[i][j]= (dp[i][j] + dp[k+1][j]) % MOD;
            }

            // If no valid combination found for i to j, still mark single start as valid
            if(dp[i][j] === 0) {
                dp[i][i]= 1;
            }
        }
    }
    
    // Sum up all valid combinations starting from index 1 to each position
    let result= 0;
    for(let i=1; i<=n; i++) {
        result= (result+dp[1][i]) % MOD;
    }
    return result;

}

// Input
console.log(numberOfCombinations("327"));                             // 2
console.log(numberOfCombinations("094"));                            // 0
console.log(numberOfCombinations("0"));                             // 0
/*
console.log(numberOfCombinations("1"));                            // 1 
console.log(numberOfCombinations("10"));                          // 1 
console.log(numberOfCombinations("210"));                        // 1
console.log(numberOfCombinations("2611055971756562"));          // 1553
*/