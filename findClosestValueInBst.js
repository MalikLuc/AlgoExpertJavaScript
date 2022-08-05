function findClosestValueInBst(tree, target) {
    // Write your code here.
    let closest = tree.value;
    let current = tree;
    while (current) {
        if (Math.abs(target - closest) > Math.abs(target - current.value)) {
            closest = current.value;
        }
        if (target < current.value) {
            current = current.left;
        } else if (target > current.value) {
            current = current.right;
        } else {
            return current.value;
        }
    }
    return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
