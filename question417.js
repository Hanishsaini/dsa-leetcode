/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const rows = heights.length;
    const cols = heights[0].length;

    const pacific = new Set();
    const atlantic = new Set();

    // DFS function
    const dfs = (r, c, visited, prevHeight) => {
        if (
            r < 0 || c < 0 || r >= rows || c >= cols || 
            visited.has(r + ',' + c) || 
            heights[r][c] < prevHeight
        ) {
            return;
        }
        visited.add(r + ',' + c);
        dfs(r + 1, c, visited, heights[r][c]);
        dfs(r - 1, c, visited, heights[r][c]);
        dfs(r, c + 1, visited, heights[r][c]);
        dfs(r, c - 1, visited, heights[r][c]);
    };

    // Run DFS from Pacific (top and left edges)
    for (let c = 0; c < cols; c++) {
        dfs(0, c, pacific, heights[0][c]); // Top row
        dfs(rows - 1, c, atlantic, heights[rows - 1][c]); // Bottom row
    }

    for (let r = 0; r < rows; r++) {
        dfs(r, 0, pacific, heights[r][0]); // Left column
        dfs(r, cols - 1, atlantic, heights[r][cols - 1]); // Right column
    }

    const result = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (pacific.has(r + ',' + c) && atlantic.has(r + ',' + c)) {
                result.push([r, c]);
            }
        }
    }

    return result;
};
