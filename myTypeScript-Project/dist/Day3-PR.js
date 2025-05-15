"use strict";
function findDuplicate(paths) {
    const contMap = new Map();
    const ans = [];
    for (const pStr of paths) {
        let i = 0;
        let j;
        let k;
        // Find the first space which separates the root directory
        while (pStr.charAt(i) !== ' ')
            i++;
        const path = pStr.slice(0, i);
        for (j = ++i; i < pStr.length; i++) {
            if (pStr.charAt(i) === '(') {
                k = i;
            }
            else if (pStr.charAt(i) === ')') {
                const fileName = pStr.slice(j, k);
                const content = pStr.slice(k + 1, i);
                const fullPath = path + '/' + fileName;
                if (!contMap.has(content)) {
                    contMap.set(content, [fullPath]);
                }
                else {
                    contMap.get(content).push(fullPath);
                }
                j = i + 2; // Skip past ') '
            }
        }
    }
    for (const group of contMap.values()) {
        if (group.length > 1) {
            ans.push(group);
        }
    }
    return ans;
}
const paths1 = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"];
console.log(findDuplicate(paths1));
const paths2 = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)"];
console.log(findDuplicate(paths2));
