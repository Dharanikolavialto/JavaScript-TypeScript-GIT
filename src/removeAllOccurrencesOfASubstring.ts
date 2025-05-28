function removeOccurrences(s: string, part: string): string {
    while (s.includes(part)) {
        s = s.replace(part, '');
    }
    return s;
}
// inputs
console.log(removeOccurrences("daabcbaabcbc", "abc"));      // dab
console.log(removeOccurrences("axxxxyyyyb", "xy"));        // ab
