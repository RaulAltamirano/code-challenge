function maxCount(banned: number[], n: number, maxSum: number): number {
    let count = 0;
    let currentSum = 0;
    const bannedSet = new Set(banned);

    for (let i = 1; i <= n; i++) {
        if (!bannedSet.has(i)) {
            if (currentSum + i <= maxSum) {
                currentSum += i;
                count++;
            } else {
                break;
            }
        }
    }
    console.log(count);
    return count;
}

maxCount([1, 6, 5], 5, 6)
maxCount([11], 7, 50)
