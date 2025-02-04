function searchInsert(nums: number[], target: number): number {
    let left = 0
    let right = nums.length

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;

        (nums[mid] < target)
            ? left = mid + 1
            : right = mid
    }
    console.log({ left });
    return left
};



const example = searchInsert([1, 3, 5, 6], 7)
const exampleOne = searchInsert([1, 3], 2)

console.log({ example });
console.log({ exampleOne });
