export function findOutlier(integers: number[]): number {
    let isEvenArray = false;
    const firstThree = integers.slice(0, 3);
    const evenCount = firstThree.filter(num => num % 2 === 0).length;

    if (evenCount >= 2) {
        isEvenArray = true;
    }

    for (const num of integers) {
        if (isEvenArray) {
            if (Math.abs(num % 2) === 1) {
                return num;
            }
        } else {
            if (num % 2 === 0) {
                return num;
            }
        }
    }
    return 0;
}



findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])