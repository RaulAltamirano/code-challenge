export function persistence(num: number): number {
    let count = 0
    const lengthNum = num.toString().length
    if (!count && lengthNum === 1) return count
    let result = num
    while (result.toString().length > 1) {
        const stringWord = result.toString()
        const ar = new Array(...stringWord)
        let total = parseInt(ar[0])
        for (let index = 1; index < ar.length; index++) {
            const element = parseInt(ar[index])
            total = total * element
            result = total
        }
        console.log(total);
        count++
    }
    console.log({ count });
    return count
}

// persistence(39)
// persistence(4)*
persistence(999)