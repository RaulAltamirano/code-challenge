function utopianTree(n: number): number {
    let res = 1
    for (let index = 1; index <= n; index++) {
        const cycle = index
        console.log(cycle, 'of', n);
        if(cycle % 2 === 0) res ++
        else res = res * 2
    }
    return res
}



const test1 = utopianTree(4)
const test2 = utopianTree(3)
console.log(
    test1,
    test2
);