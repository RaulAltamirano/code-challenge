
function lastSurvivors(arr: string[], nums: number[]): string {
    const columns: string[][] = Array.from({ length: String[0].length }, () => [] as string[]);
    for (let row of arr) {
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            if (row[colIndex] !== " ") {
                columns[colIndex].push(row[colIndex]);
            }
        }
    }

    nums.forEach((count, colIndex) => {
        while (count > 0 && columns[colIndex].length > 0) {
            columns[colIndex].pop();
            count--;
        }
    });

    const res = columns.flat().join("")
    console.log(res);
    return res
}



lastSurvivors(
    [
        "abc",
        " z ",
        " a "
    ],
    [0, 4, 1]
)