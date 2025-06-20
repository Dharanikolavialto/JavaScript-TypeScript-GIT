/*
273. Integer to English Words

Example 1:
Input: num = 123
Output: "One Hundred Twenty Three"

Example 2:
Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"

Example 3:
Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
*/

function numToWords(num: number): string {
    // Handle where the input is zero
    if(num=== 0) {
        return "Zero";
    }
    
    // Words for intergers which are less than 20
    const belowTwenty= ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    // Words for tens multiplies
    const belowHundred = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    // Words for thousand groups
    const thousands = ["", "Thousand", "Million", "Billion"];

    // Helper function to convert integer less than 1000 into words
    function helper(n: number): string {
        if(n<20) {
            return belowTwenty[n];
        } else if(n<100) {
            return belowHundred[Math.floor(n/10)] + (n%10 === 0 ? "" : " " + belowTwenty[n%10]);
        } else {
            return belowTwenty[Math.floor(n/100)] + " Hundred" + (n%100 === 0 ? "": " " + helper(n%100));
        }
    }

    let result= "";
    let i= 0;

    while(num>0) {
        // Extracts the last three digits
        if(num % 1000 != 0) {
            result= helper(num%1000)+ " "+ thousands[i]+ " "+result;
        }
        // Removes the last three digits processed
        num= Math.floor(num/1000);
        i++;
    }

    return result.trim();
}

// Inputs
console.log(numToWords(123));             // One Hundred Twenty Three
console.log(numToWords(12345));          // Twelve Thousand Three Hundred Forty Five
console.log(numToWords(1234567));      // One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven
console.log(numToWords(0));          // Zero