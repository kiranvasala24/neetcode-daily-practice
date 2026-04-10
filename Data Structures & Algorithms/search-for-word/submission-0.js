class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length;
        let cols = board[0].length;

        for (let r = 0; r < rows; r++){
            for (let c = 0; c < cols; c++){
                if (this.dfs(board, word, r, c, 0)){
                    return true;
                }
            }
        }
        return false;
    }
    dfs (board, word, row, col, index){
        if (index === word.length){
            return true;
        }
        if (row < 0 || row >= board.length || 
            col < 0 || col >= board[0].length){
                return false;
        }
        if (board[row][col] !== word[index]){
            return false;
        }
        if (board[row][col] === '#'){
            return false;
        }
        let temp = board[row][col];
        board[row][col] = '#';

        let found = this.dfs(board, word, row - 1, col, index + 1 ) ||
                    this.dfs(board, word, row + 1, col, index + 1 ) ||
                    this.dfs(board, word, row, col - 1, index + 1 ) ||
                    this.dfs(board, word, row, col + 1, index + 1 );

        board[row][col] = temp;
        return found;            
    }
}
