function sumTwoSmallestNumbers(numbers: Array<number>): number {
    //Code here
    const sort = numbers.sort((a,b) => a- b)
    const first = sort[0]
    const second = sort[1]
    const sum = first + second
    console.log(sum);
    return sum
}



// sumTwoSmallestNumbers()
sumTwoSmallestNumbers([5, 8, 12, 19, 22])// 13 
sumTwoSmallestNumbers([15, 28, 4, 2, 43])// 6 
sumTwoSmallestNumbers([3, 87, 45, 12, 7])// 10 
sumTwoSmallestNumbers([23, 71, 33, 82, 1])// 24 
sumTwoSmallestNumbers([52, 76, 14, 12, 4])// 16 