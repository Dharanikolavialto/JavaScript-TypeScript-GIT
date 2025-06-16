"use strict";
// 640. Solve the Equation
function solveEquation(equation) {
    // Helper function to parse a side of the equation into coefficient of x and constant
    function parse(expr) {
        let xCoeff = 0; // Sum of x coefficients
        let constant = 0; // Sum of constants
        let i = 0;
        let sign = 1; // Tracks the sign of the term (+ or -)
        while (i < expr.length) {
            if (expr[i] === '+') {
                sign = 1;
                i++;
            }
            else if (expr[i] === '-') {
                sign = -1;
                i++;
            }
            let num = 0;
            let hasNum = false;
            // Parse numeric value (multi-digit numbers)
            while (i < expr.length && isDigit(expr[i])) {
                num = num * 10 + parseInt(expr[i]);
                i++;
                hasNum = true;
            }
            // If next character is 'x', it's an x term
            if (i < expr.length && expr[i] === 'x') {
                // If no number before x (e.g., just "x"), treat as 1
                xCoeff += sign * (hasNum ? num : 1);
                i++;
            }
            else {
                // It's a constant term
                constant += sign * num;
            }
        }
        return { xCoeff, constant };
    }
    // Helper function to check if a character is a digit
    function isDigit(ch) {
        return ch >= '0' && ch <= '9';
    }
    // Split the equation into left and right parts
    const [left, right] = equation.split('=');
    // Parse both sides
    const leftParsed = parse(left);
    const rightParsed = parse(right);
    // Combine coefficients and constants by bringing all terms to the left side
    const xCoeff = leftParsed.xCoeff - rightParsed.xCoeff;
    const constant = rightParsed.constant - leftParsed.constant;
    // Handle special cases
    if (xCoeff === 0) {
        return constant === 0 ? "Infinite solutions" : "No solution";
    }
    // Solve for x
    return `x=${constant / xCoeff}`;
}
// Inputs
console.log(solveEquation("x+5-3+x=6+x-2")); // x=2
console.log(solveEquation("x=x")); // Infinite solutions
console.log(solveEquation("2x=x")); // x=0
/*
console.log(solveEquation("x+2=2"));                // "x=0"
console.log(solveEquation("3x=6"));                // "x=2"
console.log(solveEquation("0x=0"));               // Infinite solutions
console.log(solveEquation("0x=5"));              // No solution
console.log(solveEquation("x=0"));              // x=0
console.log(solveEquation("0=0"));             // Infinite solutions
console.log(solveEquation("0=1"));            // No solution
*/ 
