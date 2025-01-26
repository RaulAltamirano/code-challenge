function latestClock(a: number, b: number, c: number, d: number): string {
    const arr = [a, b, c, d]
    let validMinutes = 0
    const permutations = generatePermutations(arr)
    let validHour = 0
    for (const permutacion of permutations) {
        const hours = Number(`${permutacion[0]}${permutacion[1]}`)
        const minuts = Number(`${permutacion[2]}${permutacion[3]}`)
        
        if (hours > 0 && hours < 23)
            if (hours > validHour) validHour = hours
        if (minuts > 0 && minuts < 60)
            if (minuts > validMinutes) validMinutes = minuts
    }
    const format = `${validHour}:${validMinutes}`
    console.log(format);

    return format
}

function generatePermutations(arr: any[]) {
    const digits = [...arr];
    const length = digits.length;
    const count = new Array(length).fill(0);
    const permutations = new Set<string>();
    permutations.add(digits.join(''));

    let i = 0;
    while (i < length) {
        if (count[i] < i) {
            const swapPos = i % 2 === 0 ? 0 : count[i];
            [digits[swapPos], digits[i]] = [digits[i], digits[swapPos]];

            permutations.add(digits.join(''));
            count[i]++;
            i = 0;
        } else {
            count[i] = 0;
            i++;
        }
    }
    return Array.from(permutations).map((perm) => perm.split('').map(Number));
}


// for (let index = 0; index < arr.length; index++) {
//     const currentItem = arr[index];
//     for (let pointer = 0; pointer < arr.length; pointer++) {
//         const currentPointer = arr[pointer];
//         combinations.add(Number(`${currentItem}${currentPointer}`));

//         console.log(currentItem, currentPointer, 'combination');
//     }
//     console.log(currentItem);
//     arr
// }

latestClock(1, 9, 8, 3)
latestClock(9, 1, 2, 5)