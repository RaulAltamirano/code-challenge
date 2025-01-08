function pickingNumbers(a: number[]): number {
    const objNum: { [key: number]: number } = {};
    const sorted = a.sort((a, b) => a - b);
    for (let index = 0; index < a.length; index++) {
        const num = sorted[index];
        objNum[num] = (objNum[num] || 0) + 1;
    }

    let maxCount = 0;
    let maxSubarrayLength = 0;
    for (const key in objNum) {
        if (objNum.hasOwnProperty(key)) {
            const element = objNum[parseInt(key)];
            maxCount = Math.max(maxCount, element);
            const nextNum = parseInt(key) + 1;
            if (objNum[nextNum]) {
                maxSubarrayLength = Math.max(maxSubarrayLength, element + objNum[nextNum]);
            }
        }
    }
    const res = Math.max(maxSubarrayLength, maxCount);
    return res;
}

// pickingNumbers([1, 2, 2, 3, 1, 2])
pickingNumbers([4, 6, 5, 3, 3, 1])
// pickingNumbers([1, 1, 2, 2, 2, 3])