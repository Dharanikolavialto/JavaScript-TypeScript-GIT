/*
767. Reorganize String

Example 1:
Input: s = "aab"
Output: "aba"

Example 2:
Input: s = "aaab"
Output: ""
*/

function reOrganizeString(s: string): string {
    // Count how many times each character appears
    const charCounts: { [key: string]: number }= {};
    for (const char of s) {
        charCounts[char]= (charCounts[char] || 0) + 1;
    }

    // Sort characters by how many times they appear
    const sortedChars = Object.keys(charCounts).sort((a, b) => charCounts[b] - charCounts[a]);

    // If the most common character appears too many times, return ""
    if(charCounts[sortedChars[0]] > Math.floor((s.length + 1) / 2)) {
        return "";
    }

    // Create an empty result array
    const result: string[]= new Array(s.length);
    let index= 0;

    // Place characters one by one
    for(const char of sortedChars) {
        for(let i= 0; i< charCounts[char]; i++) {
            if(index >= s.length) {
                index = 1;
            }
            result[index] = char;
            index += 2;
        }
    }

    // Join the array into a string and return it
    return result.join("");
}

// Inputs
console.log(reOrganizeString("aab"));                        // "aba"
console.log(reOrganizeString("aaab"));                      // ""
console.log(reOrganizeString("aaabbc"));                   // "ababac"
console.log(reOrganizeString("a"));                       // "a"
console.log(reOrganizeString("aa"));                     // ""
console.log(reOrganizeString("abc"));                   // "abc"
console.log(reOrganizeString("aaabc"));                // "abaca"
console.log(reOrganizeString("vvvlo"));               // "vlvov"
console.log(reOrganizeString("aaaaabbbbcc"));        // "abababacacb"
console.log(reOrganizeString("aaaabbbb"));          // "abababab"