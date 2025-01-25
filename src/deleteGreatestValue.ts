function deleteGreatestValue(grid: number[][]): number {
    let result = 0;

    while (grid[0]?.length) {
        const maxValues = [];

        for (const row of grid) {
            const max = Math.max(...row);
            maxValues.push(max);
            row.splice(row.indexOf(max), 1);
        }
        console.log(maxValues);
        result += Math.max(...maxValues);
    }

    return result;
}



const grid = [[1, 2, 4], [3, 3, 1]]
// const grid = [[10, 20, 30], [5, 15, 25], [7, 17, 27]]
// const grid = [[10]]

const result = deleteGreatestValue(grid)
console.log(result);