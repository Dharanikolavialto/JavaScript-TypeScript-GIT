function maximumRemovals(s: string, p: string, removable: number[]): number {
    // Helper to check if p is still a subsequence of s after removing k indices
    function isValid(k: number): boolean {
        const removed = new Array(s.length).fill(false);
        for (let i = 0; i < k; i++) {
            removed[removable[i]] = true;
        }

        let i = 0; // pointer in s
        let j = 0; // pointer in p

        while (i < s.length && j < p.length) {
            if (!removed[i] && s[i] === p[j]) {
                j++;
            }
            i++;
        }

        return j === p.length;
    }

    // Binary search for the max k
    let left = 0;
    let right = removable.length;
    let answer = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (isValid(mid)) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer;
}
console.log(maximumRemovals("abcacb", "ab", [3,1,0])); // Output: 2
console.log(maximumRemovals("abcbddddd", "abcd", [3,2,1,4,5,6])); // Output: 1
console.log(maximumRemovals("abcab", "abc", [0,1,2,3,4])); // Output: 0
