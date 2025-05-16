function simplifyPath(path: string): string {
    // Split the path by "/"
    const components: string[] = path.split('/');

    // Initialize an empty array (stack) to store the valid directories
    const stack: string[] = [];

    // Process each component
    for (const component of components) {
        if (component === '' || component === '.') {
            // Skip empty parts or current directory (.)
            continue;
        } else if (component === '..') {
            // Go up one directory if possible
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            // Otherwise, add the valid directory to the stack
            stack.push(component);
        }
    }

    // Join stack and return the simplified path
    return '/' + stack.join('/');
}

// Test cases
console.log(simplifyPath("/home/"));                                // /home
console.log(simplifyPath("/home//foo/"));                          // /home/foo
console.log(simplifyPath("/home/user/Documents/../Pictures"));    // /home/user/Pictures
console.log(simplifyPath("/../"));                               // /
console.log(simplifyPath("/.../a/../b/c/../d/./"));             // /.../b/d