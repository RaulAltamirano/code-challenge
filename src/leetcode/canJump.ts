function canJump(nums: number[]): boolean {
    let maxReach = 0
    for (let index = 0; index < nums.length; index++) {
        if(index > maxReach) return false
        console.log(index, nums[index]);
        maxReach = Math.max(maxReach, index + nums[index])
        console.log(maxReach);
        if(maxReach >= nums.length -1) return true
    }
};



// const buenosdias2 = canJump([3, 2, 1, 0, 4])
// console.log(buenosdias2);

const buenosdias = canJump([2, 3, 1, 1, 4])
// console.log( buenosdias);

