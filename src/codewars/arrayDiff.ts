function arrayDiff(a: number[], b: number[]): number[] {
    const res = []
    const customSet = new Set(b)
    console.log({ res });
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        if (!customSet.has(element)) res.push(element)
        console.log(element, customSet);

    }
    console.log({ res });
    return res
}


arrayDiff([1, 2, 2, 2, 3], [2])