function nonConstructibleChange(coins) {
    // sort the array in ascending order
    coins.sort((a, b) => a - b);
    // print out the sorted array
    console.log(coins);
    let change = 0;
    // loop through the array
    for (let i = 0; i < coins.length; i++) {
        // if the current coin is greater than the change
        if (coins[i] > change + 1) {
            // return the change
            return change + 1;
        }
        // if the current coin is less than the change or equal to the change
        if (coins[i] <= change + 1) {
            // add the current coin to the change
            change += coins[i];
        }
    }
    return change + 1;
}
// test case
console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));