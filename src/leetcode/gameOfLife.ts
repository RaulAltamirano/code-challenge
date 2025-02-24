function gameOfLife(board: number[][]): void {
    const m = board.length;
    const n = board[0].length;
    const result = Array.from({ length: m }, () => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let liveCount = 0;

            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    if (x === 0 && y === 0) continue;
                    const ni = i + x;
                    const nj = j + y;

                    if (ni >= 0 && ni < m && nj >= 0 && nj < n && board[ni][nj] === 1) {
                        liveCount++;
                    }
                }
            }

            if (board[i][j] === 1 && (liveCount < 2 || liveCount > 3)) {
                result[i][j] = 0; 
            } else if (board[i][j] === 1 && (liveCount === 2 || liveCount === 3)) {
                result[i][j] = 1; 
            } else if (board[i][j] === 0 && liveCount === 3) {
                result[i][j] = 1; 
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = result[i][j];
        }
    }

}

const example1 = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]
gameOfLife(example1)