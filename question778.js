/**
 * @param {number[][]} grid
 * @return {number}
 */



var swimInWater = function(grid) {
    const n = grid.length;
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    
    // Simple custom min-heap (priority queue)
    class MinHeap {
        constructor() { this.data = []; }
        push(val) {
            this.data.push(val);
            this.data.sort((a, b) => a[0] - b[0]); // sort by time (first element)
        }
        pop() {
            return this.data.shift();
        }
        isEmpty() {
            return this.data.length === 0;
        }
    }

    const heap = new MinHeap();
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    
    heap.push([grid[0][0], 0, 0]); // [time, row, col]
    visited[0][0] = true;
    
    while (!heap.isEmpty()) {
        const [time, r, c] = heap.pop();
        
        if (r === n - 1 && c === n - 1) return time;

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr >= 0 && nc >= 0 && nr < n && nc < n && !visited[nr][nc]) {
                visited[nr][nc] = true;
                heap.push([Math.max(time, grid[nr][nc]), nr, nc]);
            }
        }
    }
};
