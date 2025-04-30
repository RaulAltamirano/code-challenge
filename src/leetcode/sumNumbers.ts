


class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function sumNumbers(root: TreeNode | null): number {
    return dfsSum(root, 0);
}

function dfsSum(node: TreeNode | null, currentSum: number): number {
    if (!node) return 0;
    
    const newSum = currentSum * 10 + node.val;

    if (!node.left && !node.right) return newSum;
    
    return dfsSum(node.left, newSum) + dfsSum(node.right, newSum);
}





let root = new TreeNode(4);
root.left = new TreeNode(9);
root.right = new TreeNode(0);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(1);

sumNumbers(root)