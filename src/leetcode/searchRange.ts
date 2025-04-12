function searchRange(nums: number[], target: number): number[] {
    const left = binarySearchLeft(nums, target);
    const right = binarySearchRight(nums, target);
    if (left === -1 || right === -1) return [-1, -1];

    return [left, right];
}

function binarySearchLeft(items: number[], target: number): number {
    let left = 0;
    let right = items.length - 1;
    let index = -1; 

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (items[mid] === target) {
            index = mid;
            right = mid - 1; 
        } else if (items[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return index;
}

function binarySearchRight(items: number[], target: number): number {
    let left = 0;
    let right = items.length - 1;
    let index = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (items[mid] === target) {
            index = mid;
            left = mid + 1; 
        } else if (items[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return index;
}

console.log(searchRange([5,7,7,8,8,10], 8)); // Output: [3, 4]
console.log(searchRange([5,7,7,8,8,10], 6)); // Output: [-1, -1]
console.log(searchRange([], 0)); // Output: [-1, -1]

searchRange([5, 7, 7, 8, 8, , 8, 8, 8, 8, 10], 8)