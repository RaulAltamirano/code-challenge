function search(nums: number[], target: number): number {
    const res = binarySearch(nums, target)
    console.log({ res });
    return 1

};



function binarySearch<T>(
    sortedArray: T[],
    target: T,
): any {
    if (!Array.isArray(sortedArray)) {
        throw new TypeError('First argument must be an array');
    }

    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const current = sortedArray[mid];

        if (mid === 0) {
            return current; // Found the target
        } else if (mid < 0) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }

    return -1; // Target not found
}

search([4, 5, 6, 7, 0, 1, 2], 0)
search([4,5,6,7,0,1,2], 3)