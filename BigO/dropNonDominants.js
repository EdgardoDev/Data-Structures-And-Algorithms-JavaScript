// Here we have the nested for loop running on O(n2) and the last loop on O(n).
// Adding this two together it becomes O(n2 + n). n2 is the dominant and n the non dominant.
// We drop the non dominant so it'll be O(n2).

function logItems(n) {
    for (let i = 0; i < n; i++) {          
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }

    for (let k = 0; k < n; k++) {
        console.log(k);
    }
}

logItems(10)