function circularArrayRotation(a: number[], k: number, queries: number[]): number[] {
    const n = a.length;
    k = k % n; 
    
    const rotatedArray = [...a.slice(n - k), ...a.slice(0, n - k)];
    return queries.map(index => rotatedArray[index]);
}



circularArrayRotation([1, 2, 3], 2, [0, 1, 2])