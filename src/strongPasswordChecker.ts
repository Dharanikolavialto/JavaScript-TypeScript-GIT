// 420. Strong Password Checker

function strongPasswordChecker(password: string): number {
    const n= password.length;
    let hasLower= false, hasUpper= false, hasDigit= false;

    // Check char types
    for(const character of password) {
        if(/[a-z]/.test(character)) hasLower= true;
        else if(/[A-Z]/.test(character)) hasUpper= true;
        else if(/\d/.test(character)) hasDigit= true;
    }

    const missingTypes= Number(!hasLower)+Number(!hasUpper)+Number(!hasDigit);

    // Find repeating sequences
    let replacement= 0;
    let i= 2;
    const repeats: number[]= [];

    while(i<n) {
        if(password[i]===password[i-1]&&password[i]===password[i-2]) {
            let len= 2;
            while(i<n&&password[i]===password[i-1]) {
                len++;
                i++;
            }
            repeats.push(len);
        } else {
            i++;
        }
    }
    if(n<6) {
        // if password was too short- need to add characters
        return Math.max(6-n, missingTypes);
    }

    if(n<=20) {
        // If password was within limit- only need replacement for repeated characters
        for(const len of repeats) {
            replacement+=Math.floor(len/3);
        }
        return Math.max(replacement, missingTypes);
    }

    // If password was too long- need deletions of characters
    let deletions= n-20;
    let remainingDeletions= deletions;
    let updatedReplacement= 0;

    // Try to reduce replacements by deleting in repeating sequences
    const repeatLens= repeats.slice().sort((a,b)=> a%3-b%3);

    for(let len of repeatLens) {
        if(remainingDeletions===0) {
            updatedReplacement+=Math.floor(len/3);
            continue;
        }

        const needed= len%3+1;
        const del= Math.min(remainingDeletions, needed);
        len-= del;
        remainingDeletions -= del;
        updatedReplacement += Math.floor(len/3);
    }

    return deletions + Math.max(updatedReplacement, missingTypes);
}

// input
console.log(strongPasswordChecker("a"));                                            // 5
console.log(strongPasswordChecker("aA1"));                                         // 3
console.log(strongPasswordChecker("1337C0d3"));                                   // 0
console.log(strongPasswordChecker("aaaAAA111!!!"));                              // 4
/* console.log(strongPasswordChecker("aaaaaa"));                                   // 2 
console.log(strongPasswordChecker("AAAAAA"));                                  // 2 
console.log(strongPasswordChecker("111111"));                                 // 2 
console.log(strongPasswordChecker("aA1aA1aA1aA1aA1aA1aA1aA1aA1aA1"));        // 10
console.log(strongPasswordChecker("aaaabbbbccccddddeeee1111"));             // 8 
console.log(strongPasswordChecker("Ab1Ab1Ab1Ab1Ab1Ab1Ab1Ab1Ab1Ab1"));      // 10 */