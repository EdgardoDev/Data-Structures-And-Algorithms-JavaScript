// This code will run (n + n) times or (n + n = 2n).
// Simplified it'll be O(2n) = O(n), (Drop Constants).

function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }

    // Here we add a second forr loop using 'j'.
    for (let j = 0; j < n; j++) {
        console.log(j);
    }
}

logItems(5)