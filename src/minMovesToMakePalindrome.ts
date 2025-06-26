/*
2193. Minimum Number of Moves to Make Palindrome

Example 1:
Input: s = "aabb"
Output: 2
Explanation:
We can obtain two palindromes from s, "abba" and "baab". 
- We can obtain "abba" from s in 2 moves: "aabb" -> "abab" -> "abba".
- We can obtain "baab" from s in 2 moves: "aabb" -> "abab" -> "baab".
Thus, the minimum number of moves needed to make s a palindrome is 2.

Example 2:
Input: s = "letelt"
Output: 2
Explanation:
One of the palindromes we can obtain from s in 2 moves is "lettel".
One of the ways we can obtain it is "letelt" -> "letetl" -> "lettel".
Other palindromes such as "tleelt" can also be obtained in 2 moves.
It can be shown that it is not possible to obtain a palindrome in less than 2 moves.
*/

function minMovesToMakePalindrome(s: string): number {
    let moves= 0;
    const n= s.length;
    const sArray= s.split('');

    // We need to iterate through the first half of the string
    for(let i=0; i<n/2; i++) {
        let left= i;
        let right= n-1-i;
        let leftChar= sArray[left];
        let rightChar= sArray[right];

        // If the characters at the mirrored positions are not equal
        if(leftChar !== rightChar) {
            let j= right;
            // Search for a character matching sArray[left] from the right side
            while(j>left && sArray[j] !== leftChar) {
                j--;
            }

            if(j===left) {
                // No matching character found on the right side
                let k= left;
                while(k<right && sArray[k] !== rightChar) {
                    k++;
                }

                // Move the character matching rightChar leftwards to position 'left'
                for(let l=k; l>left; l--) {
                    // Swap sArray[l] with the character to its left
                    [sArray[l], sArray[l-1]]= [sArray[l-1], sArray[l]];
                    moves++;
                }
            } else {
                for(let l=j; l<right; l++) {
                    [sArray[l],sArray[l+1]]= [sArray[l+1], sArray[l]];
                    moves++;
                }
            }
        }
        // If characters already match, no need to do anything continue to the next pair
    }

    // Return the total number of adjacent swaps performed
    return moves;
}

console.log(minMovesToMakePalindrome("aabb"));                      // 2
console.log(minMovesToMakePalindrome("letelt"));                   // 2
console.log(minMovesToMakePalindrome(""));                        // 0
console.log(minMovesToMakePalindrome("mamad"));                  // 3
console.log(minMovesToMakePalindrome("a"));                     // 0
console.log(minMovesToMakePalindrome("abcdefgfedcba"));        // 0
console.log(minMovesToMakePalindrome("racecar"));             // 0