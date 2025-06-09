// Write a function to move all zeros in an array to the end

/* 
function moveZerosToEnd(arr:number[]): number[] {
    const nonZeros= arr.filter(num=> num!==0);
    const zeros= arr.filter(num=> num===0);\
    return [...nonZeros, ...zeros];
}

// inputs
const nums= [0, 1, 0, 3, 12];
console.log(moveZerosToEnd(nums));
*/

function moveZerosToEnd(arr: number[]): number[] {
    let insertPos= 0;

    // Moving all< non-zero elements to the front
    for(let i=0;i<arr.length;i++) {
        if(arr[i]!==0) {
            arr[insertPos++]= arr[i];
        }
    }

    // Filling the remaining positions with zeros
    while(insertPos<arr.length) {
        arr[insertPos++]= 0;
    }
    return arr;
}

// inputs
console.log(moveZerosToEnd([0, 1, 0, 3, 12]));                        // [1, 3, 12, 0, 0]
console.log(moveZerosToEnd([1, 2, 3, 4]));                           // [1, 2, 3, 4]
console.log(moveZerosToEnd([0, 0, 0, 0]));                          // [0, 0, 0, 0]
console.log(moveZerosToEnd([0, 0, 1, 0, 2, 0, 3]));                // [1, 2, 3, 0, 0, 0, 0]
console.log(moveZerosToEnd([]));                                  // []
console.log(moveZerosToEnd([7, 0, 8, 0, 0, 9, 0]));              // [7, 8, 9, 0, 0, 0, 0]
console.log(moveZerosToEnd([10, 0, 5, 0, 20, 0, 12, 0]));       // [10, 5, 20, 12, 0, 0, 0]  
console.log(moveZerosToEnd([0, 1, 0, 3, 12]));                 // [1, 3, 12, 0, 0]  