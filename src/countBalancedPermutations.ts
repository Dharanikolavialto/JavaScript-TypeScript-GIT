/*
3343. Count Number of Balanced Permutations

Example 1:
Input: num = "123"
Output: 2
Explanation:
The distinct permutations of num are "123", "132", "213", "231", "312" and "321".
Among them, "132" and "231" are balanced. Thus, the answer is 2.

Example 2:
Input: num = "112"
Output: 1
Explanation:
The distinct permutations of num are "112", "121", and "211".
Only "121" is balanced. Thus, the answer is 1.

Example 3:
Input: num = "12345"
Output: 0
Explanation:
None of the permutations of num are balanced, so the answer is 0.
*/

function countBalancedPermutations(num: string): number {
    // To return the result modulo 10^9 + 7
    const MOD= 1_000_000_007;
    let count= 0;
    // To avoid counting duplicate permutations

    const seen= new Set<string>();

    // Function to check if a given string is balanced
    const isBalanced= (s: string): boolean => {
        let even= 0, odd= 0;
        for(let i=0; i<s.length; i++) {
            const digit= parseInt(s[i]);
            if (i%2 === 0) even += digit;
            else odd += digit;
        }
        return even === odd;
    };

    // Recursive function to generate all unique permutations of the array
    const permute= (arr: string[], l: number, r: number) => {
        if(l === r) {
            const p= arr.join('');
            // Check if this permutation hasn't been seen and is balanced
            if(!seen.has(p) && isBalanced(p)) {
                seen.add(p);
                count= (count+1) % MOD;
            }
            return;
        }

        // To avoid swapping the same digit multiple times at the same position
        const used= new Set<string>();
        for(let i=l; i<=r; i++) {
            // To skip duplicates
            if(used.has(arr[i])) continue;
            used.add(arr[i]);
            [arr[l], arr[i]]= [arr[i], arr[l]];
            permute(arr, l + 1, r); // Recurse for the next index
            [arr[l], arr[i]]= [arr[i], arr[l]];  // Backtrack to original state
        }
    };

    // Start generating permutations from index 0 to num.length - 1
    permute(num.split(''), 0, num.length - 1);
    return count;
}

// inputs
console.log(countBalancedPermutations("123"));           // 2
console.log(countBalancedPermutations("112"));          // 1
console.log(countBalancedPermutations("12345"));       // 0
console.log(countBalancedPermutations("111"));        // 0 
console.log(countBalancedPermutations("22"));        // 1 
console.log(countBalancedPermutations("1212"));     // 4 
console.log(countBalancedPermutations("000"));     // 1