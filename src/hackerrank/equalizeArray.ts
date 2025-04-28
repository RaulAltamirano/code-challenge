function equalizeArray(arr: number[]): number {
    // Write your code here
    let frequencyMap: { [key: number]: number } = {}

    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1
    }

    let maxFrequency = 0
    for (const key in frequencyMap) {
        if (Object.prototype.hasOwnProperty.call(frequencyMap, key)) {
            if(frequencyMap[key]> maxFrequency)
            maxFrequency = frequencyMap[key]
            
        }
    }

    return arr.length - maxFrequency
}



equalizeArray([3, 3, 2, 1, 3])