// 839. Similar String Groups

function similarStringGroups(words: string[]): number {
    const n: number= words.length;
    const visited: boolean[]= Array(n).fill(false);

    // Function to check if two words are similar
    function areWordsSimilar(a: string, b: string): boolean {
        let diffs: number= 0;

        for(let i=0;i<a.length;i++) {
            if(a[i]!==b[i]) diffs++;
            // more than two difference (not similar)
        }

        // Similarities if exactly 0 or 2
        return diffs=== 0 || diffs=== 2;
    }

    // DFS to make all connected similar words
    function dfs(index: number): void {
        visited[index]= true;

        for (let i = 0; i < n; i++) {
            if(!visited[i] && areWordsSimilar(words[index], words[i])) {
                dfs(i);
            }
            
        }
    }

    let groupCount: number= 0;

    // counting connected groups
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            groupCount++;
        }
        
    }

    return groupCount;
}

// inputs
console.log(similarStringGroups(["tars", "rats", "arts", "star"]));                 // 2
console.log(similarStringGroups(["omv", "ovm"]));                                  // 1
console.log(similarStringGroups(["abc", "acb", "bac", "bca", "cab", "cba"]));     // 1
/* 
console.log(similarStringGroups(["a"]));                                         // 1
console.log(similarStringGroups([""]));                                         // 1 (single empty string)
console.log(similarStringGroups([]));                                          // 0 (no strings)
console.log(similarStringGroups(["", "", ""]));                               // 1 (all identical)
console.log(similarStringGroups(["", "a"]));                                 // 1 (different lengths, not similar)
*/