export function decoder(sequence: string): number[] {
    const results: number[] = []
    let index = 0
    while (index < sequence.length) {
        let leadingZeros = 0

        while (sequence[index] == '0') {
            leadingZeros++
            index++
        }

        const totalBits = leadingZeros + 1
        const bin = sequence.slice(index, index + totalBits)
        const num = parseInt(bin, 2) - 1

        results.push(num)
        index+= totalBits
    }
    console.log(results);
    return results
}



decoder('01001100100')