export function findEvenIndex(arr: number[]): number {
    const total = arr.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const rightSum = total - leftSum - arr[i];
        
        if (leftSum === rightSum) {
            return i;
        }
        
        leftSum += arr[i];
    }
    
    return -1;
}

findEvenIndex([1, 2, 3, 4, 3, 2, 1])