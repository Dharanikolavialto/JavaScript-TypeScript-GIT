// 3448. Count Substrings Divisible By Last Digit

/* 
function countDivisibleSubstrings(s: string): number {
    const n = s.length;
    let count = 0;

    for (let end = 0; end < n; end++) {
        let num = 0;
        let power = 1;

        for (let start = end; start >= 0 && end - start < 10; start--) {
            const digit = +s[start];
            num = digit * power + num;
            power *= 10;

            const lastDigit = +s[end];
            if (lastDigit !== 0 && num % lastDigit === 0) {
                count++;
            }
        }
    }

    return count;
}

*/

function countSubstrings(s: string): number {
    let count = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const substring = s.substring(i, j + 1);
            const lastDigit = parseInt(substring.charAt(substring.length - 1), 10);
            
            if (lastDigit !== 0) {
                const num = parseInt(substring, 10);
                if (num % lastDigit === 0) {
                    count++;
                }
            }
        }
    }

    return count;
}
// inputs
console.log(countSubstrings("12936"));              // 11
console.log(countSubstrings("5701283"));           // 18
console.log(countSubstrings("1010101010"));       // 25
