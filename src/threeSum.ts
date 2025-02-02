function threeSum(nums: number[]): number[][] {
    const sortNumbs = nums.sort((a, b) => a - b);
    const res: number[][] = [];

    for (let index = 0; index < sortNumbs.length - 2; index++) {
        if (index > 0 && sortNumbs[index] === sortNumbs[index - 1]) {
            continue;
        }

        let left = index + 1;
        let right = sortNumbs.length - 1;

        while (left < right) {
            const sum = sortNumbs[index] + sortNumbs[left] + sortNumbs[right];

            if (sum === 0) {
                res.push([sortNumbs[index], sortNumbs[left], sortNumbs[right]]);
                
                while (left < right && sortNumbs[left] === sortNumbs[left + 1]) {
                    left++;
                }
                while (left < right && sortNumbs[right] === sortNumbs[right - 1]) {
                    right--;
                }

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return res;
}


threeSum([-1, 0, 1, 2, -1, -4])