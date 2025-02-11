import { TreeNode } from "./hasPathSum";

// Nodos del árbol
const node20 = new TreeNode(1);
const node21 = new TreeNode(2);
const node22 = new TreeNode(2);
const node23 = new TreeNode(3);
const node24 = new TreeNode(3);

// Construir el árbol
node20.left = node21;
node20.right = node22;
node21.left = node23;
node22.right = node24;

// Árbol resultante:
//       1
//      / \
//     2   2
//    /     \
//   3       3


function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true
    if (!p || !q) return false

    const sideB = []
    const sideQ = []
    console.log(p, q);
    let headP = p
    while (headP.val) {
        console.log(p)
        if (p.left) {
            sideB.push(headP.left) || null
            headP.val = headP.left.val
        }

        if (p.right){

            sideQ.push(headP.right) || null
            headP.val = headP.right.val
        } 
    }
    console.log(sideB)
    return false
};


isSameTree(node20, node21)