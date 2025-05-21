"use strict";
function findNumOfValidWords(words, puzzles) {
    const result = [];
    for (let i = 0; i < puzzles.length; i++) {
        const puzzle = puzzles[i];
        const firstLetter = puzzle[0];
        let count = 0;
        for (let j = 0; j < words.length; j++) {
            const word = words[j];
            if (!word.includes(firstLetter))
                continue;
            let isValid = true;
            for (let k = 0; k < word.length; k++) {
                if (!puzzle.includes(word[k])) {
                    isValid = false;
                    break;
                }
            }
            if (isValid)
                count++;
        }
        result.push(count);
    }
    return result;
}
const words = ["aaaa", "asas", "able", "ability", "actt", "actor", "access"];
const puzzles = ["aboveyz", "abrodyz", "abslute", "absoryz", "actresz", "gaswxyz"];
console.log(findNumOfValidWords(words, puzzles));
