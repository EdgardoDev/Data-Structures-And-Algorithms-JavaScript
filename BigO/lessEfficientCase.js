// Less Efficient case on Big O => O(n)

// Here we have a for loop running 'n' times. 
function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

logItems(10)
