function longestContinuousSubstring(s: string): number {
    let maxLength = 1; // At least one letter is a valid substring
    let currentLength = 1;

    for (let i = 1; i < s.length; i++) {
        // Checking if current letter comes right after the previous one in the alphabet
        if (s[i].charCodeAt(0) === s[i - 1].charCodeAt(0) + 1) {
            currentLength++; // Continue the sequence
        } else {
            currentLength = 1; // Restarting the count
        }

        // Updating the longest length found so far
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
}

// inputs 
console.log(longestContinuousSubstring("abacaba"));     // 2
console.log(longestContinuousSubstring("abcde"));      // 5