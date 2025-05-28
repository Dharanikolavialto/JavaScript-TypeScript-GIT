function removeOccurrences(s: string, part: string): string {
    while (s.includes(part)) {
        s = s.replace(part, '');
    }
    return s;
}
console.log(removeOccurrences("daabcbaabcbc", "abc")); // Output: "dab"
console.log(removeOccurrences("axxxxyyyyb", "xy"));    // Output: "ab"
