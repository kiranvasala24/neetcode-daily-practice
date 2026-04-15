class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        if (!heights || heights.length === 0 || heights[0].length === 0) {
            return [];
        }

        const rows = heights.length;
        const cols = heights[0].length;
        const pacificReachable = Array.from({ length: rows }, () => Array(cols).fill(false));
        const atlanticReachable = Array.from({ length: rows }, () => Array(cols).fill(false));

        const dfs = (r, c, reachable, prevHeight) => {
            if (
                r < 0 || r >= rows || 
                c < 0 || c >= cols || 
                reachable[r][c] || 
                heights[r][c] < prevHeight
            ) {
                return;
            }

            reachable[r][c] = true;
            dfs(r + 1, c, reachable, heights[r][c]);
            dfs(r - 1, c, reachable, heights[r][c]);
            dfs(r, c + 1, reachable, heights[r][c]);
            dfs(r, c - 1, reachable, heights[r][c]);
        };
        for (let c = 0; c < cols; c++) {
            dfs(0, c, pacificReachable, heights[0][c]);
        }
        for (let r = 0; r < rows; r++) {
            dfs(r, 0, pacificReachable, heights[r][0]);
        }
        for (let c = 0; c < cols; c++) {
            dfs(rows - 1, c, atlanticReachable, heights[rows - 1][c]);
        }
        for (let r = 0; r < rows; r++) {
            dfs(r, cols - 1, atlanticReachable, heights[r][cols - 1]);
        }

        const result = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (pacificReachable[r][c] && atlanticReachable[r][c]) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }
}
