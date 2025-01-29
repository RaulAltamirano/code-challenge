function hurdleRace(k: number, height: number[]): number {
    // Write your code here
    let minimun = 0
    const sort = height.sort((a,b) => a - b)
    const talles = sort[sort.length - 1]
    console.log(talles - k);
    const res = talles - k
    if(res < 0) return 0 
    return talles - k
}


hurdleRace(4, [1, 6, 3, 5, 2])