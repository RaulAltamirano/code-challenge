export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

// Create the example tree
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);


function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) return false;
    const currentPathSum = root.val;

    if (root.left === null && root.right === null) 
        return currentPathSum === targetSum;

    return hasPathSum(root.left, targetSum - currentPathSum) || 
           hasPathSum(root.right, targetSum - currentPathSum); 
}

hasPathSum(root, 22)
