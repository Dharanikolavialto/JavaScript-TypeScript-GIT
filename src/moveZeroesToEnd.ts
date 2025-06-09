// Write a function to move all zeroes in an array to the end

/* 
function moveZeroesToEnd(arr:number[]): number[] {
    const nonZeroes= arr.filter(num=> num!==0);
    const zeroes= arr.filter(num=> num===0);\
    return [...nonZeroes, ...zeroes];
}

// inputs
const nums= [0, 1, 0, 3, 12];
console.log(moveZeroesToEnd(nums));
*/

function moveZeroesToEnd(arr: number[]): number[] {
    let insertPos= 0;

    // Moving all< non-zero elements to the front
    for(let i=0;i<arr.length;i++) {
        if(arr[i]!==0) {
            arr[insertPos++]= arr[i];
        }
    }

    // Filling the remaining positions with zeroes
    while(insertPos<arr.length) {
        arr[insertPos++]= 0;
    }
    return arr;
}

// inputs
console.log(moveZeroesToEnd([0, 1, 0, 3, 12]));                        // [1, 3, 12, 0, 0]
console.log(moveZeroesToEnd([1, 2, 3, 4]));                           // [1, 2, 3, 4]
console.log(moveZeroesToEnd([0, 0, 0, 0]));                          // [0, 0, 0, 0]
console.log(moveZeroesToEnd([0, 0, 1, 0, 2, 0, 3]));                // [1, 2, 3, 0, 0, 0, 0]
console.log(moveZeroesToEnd([]));                                  // []
console.log(moveZeroesToEnd([7, 0, 8, 0, 0, 9, 0]));              // [7, 8, 9, 0, 0, 0, 0]
console.log(moveZeroesToEnd([10, 0, 5, 0, 20, 0, 12, 0]));       // [10, 5, 20, 12, 0, 0, 0]  
console.log(moveZeroesToEnd([0, 1, 0, 3, 12]));                 // [1, 3, 12, 0, 0]  