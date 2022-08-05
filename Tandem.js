function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // if redShirtSpeeds is empty, return 0
    if (redShirtSpeeds.length === 0) return 0;
    // sort redShirtSpeeds in ascending order
    redShirtSpeeds.sort((a, b) => a - b);
    // sort blueShirtSpeeds in descending order
    fastest ? blueShirtSpeeds.sort((a, b) => b - a) : blueShirtSpeeds.sort((a, b) => a - b);
    // calculate the sum of the larger element of each index of the redShirtSpeeds and blueShirtSpeeds arrays in a lambda function
    return redShirtSpeeds.map((a, b) => (a > blueShirtSpeeds[b]) ? a : blueShirtSpeeds[b]).reduce((a, b) => a + b);
}
// test case
console.log(tandemBicycle([3, 6, 7, 2, 1], [5, 5, 3, 9, 2], true));