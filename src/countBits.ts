export function countBits(n: number): number {
    // Program Me
    if (n === 0) return 0
    let binaryNum = ''
    let count = 0
    let res = n
    while (res > 0) {
        const quotient = Math.floor(res / 2);
        const remainder = res % 2
        if(remainder === 1) count++
        binaryNum = remainder.toString() + binaryNum;
        res = quotient
    }
    console.log({ count });
    return count
}

countBits(0) // 0
countBits(10) // 10
countBits(1234) // 10