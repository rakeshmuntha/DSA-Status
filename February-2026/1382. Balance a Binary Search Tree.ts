/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function balanceBST(root: TreeNode | null): TreeNode | null {
    let arr = [];
    preorder(root, arr);

    return construct(arr, 0, arr.length - 1);
};

function preorder(root: TreeNode | null, arr: number[]): void {

    if(root === null) return;
    preorder(root.left, arr);
    arr.push(root.val);
    preorder(root.right, arr);
}

function construct(arr: number[], left: number, right: number): TreeNode | null {
    if(left > right) return null;
    const mid = Math.floor((left + right) / 2), node = new TreeNode(arr[mid]);

    node.left = construct(arr, left, mid - 1);
    node.right = construct(arr, mid + 1, right);
    return node;
}