// Here the number of items we output in this case is (n * n * n) or (n * n * n = n3).
// This equals to O(n2).

function logItems(n) {
    for (let i = 0; i < n; i++) {          
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(i, j, k);
            }
        }
    }
}

logItems(10)