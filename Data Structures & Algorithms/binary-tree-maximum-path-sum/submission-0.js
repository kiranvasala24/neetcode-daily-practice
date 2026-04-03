/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        this.maxSum = -Infinity;
        this.maxPath(root);
        return this.maxSum;
    }
    maxPath(node){
        if (!node){
            return 0;
        }
        let leftMax = Math.max(0, this.maxPath(node.left));
        let rightMax = Math.max(0, this.maxPath(node.right));

        let pathThroughNode = leftMax + node.val + rightMax;

        this.maxSum = Math.max(this.maxSum, pathThroughNode);

        return node.val + Math.max(leftMax, rightMax);
    }
    
}
