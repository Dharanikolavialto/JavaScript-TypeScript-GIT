"use strict";
// 761. Special Binary String
/*
function specialBinaryString(s: string): string {
    // Base case: If the string is empty, return it as is.
    if (s.length === 0) {
        return s;
    }

    // Define an array to hold special substrings.
    const specials: string[] = [];
  
    let counter = 0; // Initialize to count the balance of '1's and '0's.
    let startIdx = 0; // Index to keep track of the start of a special substring.

    // Iterate over the string to find and process special substrings.
    for (let currentIdx = 0; currentIdx < s.length; currentIdx++) {
        // Increment counter if '1', decrement if '0'.
        counter += (s[currentIdx] === '1') ? 1 : -1;
      
        // When counter is 0, we have found a special string.
        if (counter === 0) {
            // Construct a special string by recursively calling makeLargestSpecial on the inner part,
            // then concatenate '1' at the beginning and '0' at the end.
            specials.push('1' + specialBinaryString(s.substring(startIdx + 1, currentIdx)) + '0');
          
            // Set the start index for the next potential special substring.
            startIdx = currentIdx + 1;
        }
    }

    // Sort the special substrings in descending order to make the string largest.
    specials.sort((a, b) => b.localeCompare(a));

    // Concatenate all special strings together by joining the array elements.
    return specials.join('');
}

// The method can be exported if needed, to be used in other modules.
export { specialBinaryString };

console.log(specialBinaryString("11011000"));
console.log(specialBinaryString("10"));
*/
function specialBinaryString(s) {
    const parts = [];
    let count = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === '1' ? count++ : count--;
        // when we find a balanced part
        if (count === 0) {
            // Recursively process the inside part
            const inner = s.substring(start + 1, i);
            const processed = specialBinaryString(inner);
            parts.push("1" + processed + "0");
            start = i + 1;
        }
    }
    // Sort to get the lexicographically largest order
    return parts.sort().reverse().join('');
}
// inputs
console.log(specialBinaryString("11011000")); // 11100100
console.log(specialBinaryString("10")); // 10
console.log(specialBinaryString("1100")); // 1100
console.log(specialBinaryString("101100")); // 110010
console.log(specialBinaryString("111000")); // 111000
console.log(specialBinaryString("1101001000")); // 11010010
