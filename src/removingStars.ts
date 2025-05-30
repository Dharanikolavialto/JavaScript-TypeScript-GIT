function removeStars(s: string): string {
    const ans: string[] = []; // Use a stack (array) to build the final string

    // Loop through each character in the string
    for (const code of s) {
        if (code === '*') {
            // When we find a star, remove the last added character from the stack
            ans.pop();
        } else {
            // If it's a normal character, add it to the stack
            ans.push(code);
        }
    }

    // Joining all characters in the stack to form the final string
    return ans.join('');
}

// inputs
console.log(removeStars("leet**cod*e"));    // "lecoe"
console.log(removeStars("erase*****"));    // ""
console.log(removeStars("erase*"));       // eras