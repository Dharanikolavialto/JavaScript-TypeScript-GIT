// 3295. Report Spam Message

function spamReport(message: string[], bannedWords: string[]): boolean {
    const bannedSet= new Set(bannedWords);
    let bannedCount= 0;

    for(const word of message) {
        if(bannedSet.has(word)) {
            bannedCount++;
            if(bannedCount>=2) return true;
        }
    }
    return false;
}

// inputs
console.log(spamReport(["hello","world","leetcode"], ["world","hello"]));                        // true
console.log(spamReport(["hello","programming","fun"], ["world","programming","leetcode"]));     // false