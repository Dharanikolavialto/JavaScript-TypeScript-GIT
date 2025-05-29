function deleteString(s: string): number {
    const n=s.length;
     // f[i] stores the maximum number of operations to delete the suffix of s[i:]
    const f:number[]= new Array(n).fill(0);
    // Recursive helper function to compute the result from index i onwards
    const ds= (i:number): number => {
        // if we reach the end of the string, no more operations needed
        if (i==n) {
            return 0;
        }
        // If we've already computed the result for index i, return it
        if (f[i]>0) {
            return f[i];
        }
        // one operation to delete everything from i to end
        f[i]=1;
        // Try all possible prefix lengths j starting from index i
        // Loop limit is (n - 1) >> 1 = floor((n - 1) / 2), but we should use j <= (n - i) / 2
        for (let j=1; j<=(n-1)>>1; ++j) {
            // Check if the first j characters match the next j characters
            if (s.slice(i,i+j)==s.slice(i+j,i+j+j)) {
                // If they match, recursively check how many operations we can do from i + j
                // Add 1 because we just made an operation by deleting the first j
                f[i]= Math.max(f[i], ds(i+j)+1);
            }  
        }
        // Return the computed maximum operations from index i
        return f[i];
    };
    // Start the recursion from the beginning of the string
    return ds(0);
}
// inputs
console.log(deleteString("abcabcdabc"));    // 2
console.log(deleteString("aaabaab"));      // 4
console.log(deleteString("aaaaa"));       // 5
