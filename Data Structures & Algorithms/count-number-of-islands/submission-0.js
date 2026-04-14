class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (!grid || grid.length === 0){
            return 0;
        }
        let rows = grid.length;
        let cols = grid[0].length;
        let count = 0;

        for (let r = 0; r < rows; r++){
            for (let c = 0; c < cols; c++){
                if (grid[r][c] === '1'){
                    count ++;
                    this.dfs(grid, r, c);
                }
            }
        }
        return count;
    }
    dfs(grid, row, col){
        if (row < 0 || row >= grid.length || 
            col < 0 || col >= grid[0].length ||
            grid[row][col] === '0'){
                return;
        }
        grid[row][col] = '0';

        this.dfs(grid, row - 1, col)
        this.dfs(grid, row + 1, col)
        this.dfs(grid, row, col - 1)
        this.dfs(grid, row, col + 1)
    }
}
