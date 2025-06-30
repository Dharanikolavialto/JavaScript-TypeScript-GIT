"use strict";
/*
1023. Camelcase Matching

Example 1:
Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
Output: [true,false,true,true,false]
Explanation: "FooBar" can be generated like this "F" + "oo" + "B" + "ar".
"FootBall" can be generated like this "F" + "oot" + "B" + "all".
"FrameBuffer" can be generated like this "F" + "rame" + "B" + "uffer".

Example 2:
Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBa"
Output: [true,false,true,false,false]
Explanation: "FooBar" can be generated like this "Fo" + "o" + "Ba" + "r".
"FootBall" can be generated like this "Fo" + "ot" + "Ba" + "ll".

Example 3:
Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBaT"
Output: [false,true,false,false,false]
Explanation: "FooBarTest" can be generated like this "Fo" + "o" + "Ba" + "r" + "T" + "est".
*/
// Main function that takes an array of queries and a pattern
function camelCase(queries, pattern) {
    const result = [];
    // Check each query against the pattern
    for (const query of queries) {
        result.push(isMatch(query, pattern));
    }
    return result;
}
// Helper function to check if a single query matches the pattern
function isMatch(query, pattern) {
    let i = 0; // Pointer for query
    let j = 0; // Pointer for pattern
    // Traverse both strings
    while (i < query.length && j < pattern.length) {
        if (query[i] === pattern[j]) {
            // Characters match, move both pointers forward
            i++;
            j++;
        }
        else if (query[i].toUpperCase() === query[i]) {
            // Current query character is uppercase and doesn't match pattern
            return false;
        }
        else {
            // Skip lowercase characters in query
            i++;
        }
    }
    // If we didn't finish matching the entire pattern, return false
    if (j < pattern.length) {
        return false;
    }
    // Remaining characters in query must all be lowercase
    while (i < query.length) {
        if (query[i].toUpperCase() === query[i]) {
            return false;
        }
        i++;
    }
    return true;
}
// Inputs
const queries1 = ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"];
const pattern1 = "FB";
console.log("Example 1 Output:", camelCase(queries1, pattern1)); // [true, false, true, true, false]
const pattern2 = "FoBa";
console.log("Example 2 Output:", camelCase(queries1, pattern2)); // [true, false, true, false, false]
const pattern3 = "FoBaT";
console.log("Example 3 Output:", camelCase(queries1, pattern3)); // [false, true, false, false, false]
