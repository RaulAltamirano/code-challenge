function pivotInteger(n: number): number {
    const totalSum = (n * (n + 1)) / 2;
    let leftSum = 0;
    let i = 1;

    while (i <= n) {
        leftSum += i;
        if (leftSum === totalSum - leftSum) {
            return i;
        }
        i++;
    }
    return -1;
};

// pivotInteger(-1)
// pivotInteger(1)`
pivotInteger(8)