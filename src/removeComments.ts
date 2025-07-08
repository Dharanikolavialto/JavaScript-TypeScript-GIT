/*
722. Remove Comments

// Example 1:

// Input: source = ["/*Test program */ // ", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]
// Output: ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]
// Explanation: The line by line code is visualized as below:
// /*Test program */
// int main()
// { 
//   // variable declaration 
// int a, b, c;
// /* This is a test
//    multiline  
//    comment for 
//    testing */
// a = b + c;
// }
// The string /* denotes a block comment, including line 1 and lines 6-9. The string // denotes line 4 as comments.
// The line by line output code is visualized as below:
// int main()
// { 
  
// int a, b, c;
// a = b + c;
// }
// Example 2:

// Input: source = ["a/*comment", "line", "more_comment*/b"]
// Output: ["ab"]
// Explanation: The original source string is "a/*comment\nline\nmore_comment*/b", where we have bolded the newline characters.  After deletion, the implicit newline characters are deleted, leaving the string "ab", which when delimited by newline characters becomes ["ab"].*/

function removeComments(source: string[]): string[] {
    const result: string[]= [];
    // To track if we are inside a block comment
    let inBlockComment= false;

    for(const line of source) {
        // To hold the current line without comments
        let newLine= '';
        // Pointer to go through each character of the line
        let i= 0;
         while(i< line.length) {
            // If we're inside a block comment, skip characters until we find "*/"
            if(inBlockComment) {
                if(line[i] === '*' && line[i+1] === '/') {
                    inBlockComment= false; // End of block comment
                    i += 2; // Skip "*/"
                } else {
                    i++;  // Continue inside the block comment
                } 
            } else {
                // If we find a block comment "/*", enter block comment mode
                if(line[i] === '/' && line[i+1] === '*') {
                    inBlockComment= true;
                    i += 2;
                }
                // If we find a line comment "//", stop reading the rest of the line
                else if(line[i] === '/' && line[i+1] === '/') {
                    break; // Ignore everything after "//"
                } else {
                    newLine += line[i]; // Otherwise, it's code, so keep it
                    i++;
                }
            }
        }

        // If the newLine is not empty (ignoring whitespace), add it to the result
        if(newLine.trim() !== '') {
            result.push(newLine);
        }
    }
    return result;
}

// Inputs
console.log(removeComments([
    "/*Test program */", 
    "int main()", 
    "{ ", 
    "  // variable declaration ", 
    "int a, b, c;", 
    "/* This is a test", 
    "   multiline  ", 
    "   comment for ", 
    "   testing */", 
    "a = b + c;", 
    "}"
]));  // ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]

console.log(removeComments([
    "a/*comment", 
    "line", 
    "more_comment*/b"
]));  // [ 'a', 'b' ]