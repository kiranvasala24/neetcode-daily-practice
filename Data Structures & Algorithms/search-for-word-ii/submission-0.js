class TrieNode{
    constructor(){
        this.children = {}
        this.word = null;
    }
}
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let root = new TrieNode();
        for (let word of words){
            this.addWord(root, word);
        }
        let result = new Set();
        let rows = board.length;
        let cols = board[0].length;

        for (let r = 0; r < rows; r++){
            for (let c = 0; c < cols; c++){
                this.dfs(board, r, c, root, result);
            }
        }
        return Array.from(result);
    }
    addWord(root, word){
        let node = root;
        for (let char of word){
            if (!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.word = word;
    }
    dfs (board, row, col, node, result){
        if (row < 0 || row >= board.length ||
            col < 0 || col >= board[0].length){
                return;
        }
        let char = board[row][col];
        if (char === '#'){
            return;
        }
        if (!node.children[char]){
            return;
        }
        node = node.children[char];
        if (node.word !== null){
            result.add(node.word);
            node.word = null;
        }
        board[row][col] = '#';
        this.dfs(board, row - 1, col, node, result);
        this.dfs(board, row + 1, col, node, result);
        this.dfs(board, row, col - 1, node, result);
        this.dfs(board, row, col + 1, node, result);

        board[row][col] = char;
    }
}
