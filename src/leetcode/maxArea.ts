function maxArea(height: number[]): number {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const currentHeight = Math.min(height[left], height[right]);
        const currentWidth = right - left;
        const currentArea = currentHeight * currentWidth;

        maxArea = Math.max(maxArea, currentArea);
        
        (height[left] < height[right])
            ? left++
            : right--
    }
    console.log(maxArea);
    return maxArea;
}



maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])