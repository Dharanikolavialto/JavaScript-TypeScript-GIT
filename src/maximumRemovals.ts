function maximumRemovals(s: string, p: string, removable: number[]): number {
    // Helper to check if p is a subsequence of modified s
    const isSubsequence = (removedSet: Set<number>): boolean => {
        let i = 0, j = 0;
        while (i < s.length && j < p.length) {
            if (!removedSet.has(i) && s[i] === p[j]) {
                j++;
            }
            i++;
        }
        return j === p.length;
    };

    let left = 0, right = removable.length, answer = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const removedSet = new Set<number>(removable.slice(0, mid));

        if (isSubsequence(removedSet)) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer;
}
// inputs
console.log(maximumRemovals("abcacb", "ab", [3,1,0]));                  // 2
console.log(maximumRemovals("abcbddddd", "abcd", [3,2,1,4,5,6]));      // 1
console.log(maximumRemovals("abcab", "abc", [0,1,2,3,4]));            // 0
