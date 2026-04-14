/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node){
            return null;
        }
        let visited = new Map();
        return this.dfs(node, visited);
    }

    dfs(node, visited){
        if(visited.has(node)){
            return visited.get(node);
        }
        let clone = new Node(node.val);
        visited.set(node, clone);

        for (let neighbor of node.neighbors){
            clone.neighbors.push(this.dfs(neighbor, visited));
        }
    return clone;
    }
    
}
