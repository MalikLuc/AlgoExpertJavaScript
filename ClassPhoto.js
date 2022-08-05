function classPhotos(redShirtHeights, blueShirtHeights) {
    // sort the redShirtHeights and blueShirtHeights arrays in ascending order
    redShirtHeights.sort((a, b) => a - b);
    blueShirtHeights.sort((a, b) => a - b);
    // check if each element in the redShirtHeights array is greater than the corresponding element in the blueShirtHeights array
    return (redShirtHeights[0] > blueShirtHeights[0]) ? strictlySmaller(blueShirtHeights, redShirtHeights) : strictlySmaller(redShirtHeights, blueShirtHeights);
}

function strictlySmaller(smallerHeights, largerHeights) {
    // check if each element in the smallerHeights array is strictly smaller than the corresponding element in the largerHeights array
    //return smallerHeights.every((a, b) => a < largerHeights[b]);
    for (let i = 0; i < smallerHeights.length; i++)
        if (smallerHeights[i] >= largerHeights[i]) return false;
    return true;
}