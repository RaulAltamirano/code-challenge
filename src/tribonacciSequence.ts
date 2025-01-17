function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
    if (n === 0) return [];
    const result = [a, b, c].slice(0, n);

    for (let i = 3; i < n; i++) {
        const next = result[i - 1] + result[i - 2] + result[i - 3];
        console.log(next);
        result.push(next);
    }
    console.log(result);
    return result
}

tribonacci([1, 1, 1], 10)  // [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]