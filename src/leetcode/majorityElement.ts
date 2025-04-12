function majorityElement(nums: number[]): number {
    let count = 0
    let candidate = 0
    for (const element of nums) {
        if (count === 0) {
            candidate = element
        }
        count += (element === candidate) ? 1 : -1

    }
    console.log(candidate);
    return candidate
};


majorityElement([3, 3, 4])
majorityElement([3, 2, 3])