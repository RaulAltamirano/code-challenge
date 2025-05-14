export function getNumbers(numbers: number[], target: number): number[] {
    // TODO
    const result: number[] = []
    let remaining = target

    for (const num of numbers) {
        while (remaining >= num) {
            result.push(num)
            remaining -= num
        }
    }

    return remaining === 0 ? result : []
}






const numbers = [100, 25, 15, 7, 3];  //res [15, 3, 3]
getNumbers(numbers, 24)
