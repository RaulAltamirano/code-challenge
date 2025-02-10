function strStr(haystack: string, needle: string): number {
    let index = -1
    const indexFound = []
    let customWord = ''
    for (let index = 0; index < haystack.length; index++) {
        const currentElement = haystack[index];
        for (let pointer = index; pointer < haystack.length; pointer++) {
            const currentPointer = haystack[pointer];
            customWord += currentPointer
            // console.log(currentElement, currentPointer, customWord);
            if (customWord === needle) indexFound.push(index)
        }
        customWord = ''

    }
    console.log({ indexFound });
    if (indexFound.length > 0) return indexFound[0]
    else return -1
};



strStr('sadbutsad', 'sad')
strStr('leetcode', 'leeto')