function beautifulDays(i: number, j: number, k: number): number {
    let count = 0;

    for (let num = i; num <= j; num++) {
        let reversedNum = 0;
        let temp = num;

        while (temp > 0) {
            reversedNum = reversedNum * 10 + (temp % 10);
            temp = Math.floor(temp / 10);
        }
        if ((num - reversedNum) % k === 0) count++;
    }
    console.log({count});
    return count;
}

beautifulDays(20, 23, 6)
beautifulDays(13, 45, 3)