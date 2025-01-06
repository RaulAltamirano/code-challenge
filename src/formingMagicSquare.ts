const magicSquares = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
];

function formingMagicSquare(s: number[][]): number {
    let minCost = Infinity;
    for (const magic of magicSquares) {
        const cost = calculateCost(s, magic);
        if (cost < minCost) minCost = cost;
    }
    console.log(minCost);
    return minCost;
}

function calculateCost(current: number[][], magic: number[][]): number {
    let cost = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            cost += Math.abs(current[i][j] - magic[i][j]);
        }
    }
    return cost;
}




formingMagicSquare([[6, 4, 6], [9, 9, 3], [9, 9, 7]])
// formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]])