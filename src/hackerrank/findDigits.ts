
function findDigits(n: number): number {
    const stringNum = n.toString()
    let count = 0
    for (const element of stringNum) {
        if (n % Number(element) === 0) {
            count++
        }
        console.log(element, );
    }

    return count

}


findDigits(124)