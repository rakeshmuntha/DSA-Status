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

function sumRootToLeaf(root: TreeNode | null): number {
    return find(root, []);
};

function find(root: TreeNode | null, arr: string[]) {

    if(root === null) return 0;
    if(root.left === null && root.right === null) {

        arr.push(root.val + "");
        let val = parseInt(arr.join(""), 2);
        arr.pop();
        return val;
    }

    arr.push(root.val + "");

    let sum = find(root.left, arr) + find(root.right, arr);
    arr.pop();
    return sum;
}