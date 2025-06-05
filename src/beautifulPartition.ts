// 2478. Number of Beautiful Partitions

function beautifulPartitions(s:string, k:number, minlength:number): number {
    const MOD= 1_000_000_007; // we use this keep our ans within a safe range
    const n= s.length;

    // If the string is empty, we can't make any parts
    if (n === 0) return 0;
    // This function checks if a digit is one of the prime digits allowed to start a substring
    function isPrime(digit: string): boolean {
        return digit==='2'||digit==='3'||digit==='5'||digit==='7';
    }

    // If the string doesn't start with a prime digit or ends with one (It's not valid)
    if(!isPrime(s[0])||isPrime(s[n-1])) 
        return 0;

    // We mark the places in the string where we can cut to start a new part
    const canCut: boolean[]= new Array(n).fill(false);

    // A cut is valid if the previous char ends a part(non-prime) and the current char starts a new part(prime)
    for(let i=1;i<n;i++) {
        if(!isPrime(s[i-1])&& isPrime(s[i])) {
            canCut[i]= true;
        }
    }

    const memo: number[][]= Array.from({length:n},() => Array(k+1).fill(-1)); // To save answers
     
    function count(pos: number, parts: number): number { //counts how many ways we make parts 1. pos= where we are in string, 2. parts= how mant parts we've made 
        if(parts===k) {
            return pos===n?1:0; // we at the end of the string
        }

        if(pos>=n || !isPrime(s[pos])) // If we crossed the end
            return 0;
        
        if(memo[pos][parts]!==-1) // If we done this before, we use the saved answer
            return memo[pos][parts];
        let total=0;

        for(let end= pos+minlength-1;end<n;end++) { // Trying this part in diff places
            if(!isPrime(s[end])&& parts<k-1&& canCut[end+1]) {
                total= (total+count(end+1, parts+1)) % MOD;
            }
            
            // If this is the last partand it ends at the end of the str
            if (parts===k-1 && end===n-1) {
                total=(total+1) % MOD;
            }
        }

        // Save the ans for next time and return it
        memo[pos][parts]= total;
        return total;

    }

    return count(0, 0); // Start from the beginning with 0 parts made
}
// inputs
console.log(beautifulPartitions("23542185131", 3, 2));      // 3
console.log(beautifulPartitions("23542185131", 3, 3));     // 1
console.log(beautifulPartitions("3312958", 3, 1));        // 1
console.log(beautifulPartitions("1345", 2, 2));          // 0
console.log(beautifulPartitions("", 2, 1));             // 0