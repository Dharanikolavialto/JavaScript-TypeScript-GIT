"use strict";
function maximumRemovals(s, p, removable) {
    const isSubsequence = (removed) => {
        let i = 0, j = 0;
        while (i < s.length && j < p.length) {
            if (!removed.has(i) && s[i] === p[j]) {
                j++;
            }
            i++;
        }
        return j === p.length;
    };
    let left = 0;
    let right = removable.length;
    let maxK = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const removedSet = new Set(removable.slice(0, mid));
        if (isSubsequence(removedSet)) {
            maxK = mid;
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return maxK;
}
// inputs
console.log(maximumRemovals("abcacb", "ab", [3, 1, 0])); // 2
console.log(maximumRemovals("abcbddddd", "abcd", [3, 2, 1, 4])); // 1
console.log(maximumRemovals("abcab", "abc", [0, 1, 2, 3, 4])); // 0
