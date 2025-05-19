"use strict";
function reverseOnlyLetters(s) {
    // Helper function to check if a character is a letter
    function isLetter(char) {
        const code = char.charCodeAt(0);
        return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
    }
    // Collect letters and reverse them
    const letters = [];
    for (const char of s) {
        if (isLetter(char)) {
            letters.push(char);
        }
    }
    letters.reverse();
    // Build result string
    let result = '';
    let letterIndex = 0;
    for (const char of s) {
        if (isLetter(char)) {
            result += letters[letterIndex++];
        }
        else {
            result += char;
        }
    }
    return result;
}
console.log(reverseOnlyLetters("ab-cd")); // dc-ba
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); // j-Ih-gfE-dCba
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!")); // Qedo1ct-eeLg=ntse-T!
