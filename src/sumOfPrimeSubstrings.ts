/*
3556. Sum of Largest Prime Substrings

Example 1:
Input: s = "12234"
Output: 1469
Explanation:
The unique prime numbers formed from the substrings of "12234" are 2, 3, 23, 223, and 1223.
The 3 largest primes are 1223, 223, and 23. Their sum is 1469.

Example 2:
Input: s = "111"
Output: 11
Explanation:
The unique prime number formed from the substrings of "111" is 11.
Since there is only one prime number, the sum is 11.
*/

// Main function to compute the sum of the three largest unique prime numbers from substrings
function sumOfThreeLargestUniquePrimeSubstrings(s: string): number {
    const primeNum= new Set<number>();
    // Generate all possible substrings of the input string
    for(let i= 0; i< s.length; i++){
        for(let j= i+1; j<= s.length; j++){
            const sub= s.substring(i, j);
            const num= parseInt(sub, 10);
            if(!isNaN(num) && isPrime(num)) {
                primeNum.add(num);
            }
        }
    }
    // If no prime numbers found, return 0
    if(primeNum.size === 0) {
        return 0;
    }

    // Convert set to array and sort in descending order
    console.log("Primes found:", Array.from(primeNum).sort((a, b) => b - a));
    const primeArray = Array.from(primeNum).sort((a, b) => b - a);
    // Sum the top 3 largest primes, or fewer if not enough primes
    let sum= 0;
    for(let i= 0; i< Math.min(3, primeArray.length); i++) {
        sum += primeArray[i];
    }

    return sum; // Return the final result

}

// Helper function to check if a number is prime
function isPrime(n: number): boolean {
    if (n<= 1) return false;
    if (n === 2) return true;
    if (n%2 === 0) return false;

    const sqrt= Math.sqrt(n);
    for (let i= 3; i<= sqrt; i+= 2) {
        if (n%i === 0) return false;
    }
    return true;
}

// Inputs
console.log(sumOfThreeLargestUniquePrimeSubstrings("12234"));                  // 1469
console.log(sumOfThreeLargestUniquePrimeSubstrings("111"));                   // 11
