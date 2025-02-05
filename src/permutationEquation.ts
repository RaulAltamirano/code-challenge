function permutationEquation(p: number[]): number[] {
    const mapping = new Map()
    for (let index = 0; index < p.length; index++) {
        mapping.set(p[index], index + 1)
    }


    const results = []
    for (let index = 1; index <= p.length; index++) {
        const y = mapping.get(mapping.get(index))
        results.push(y)
    }

    console.log({ results });
    return results
}


permutationEquation([2, 3, 1])