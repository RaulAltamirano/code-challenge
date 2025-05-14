function wordPattern(pattern: string, s: string): boolean {
    const patternCount: Record<string, number> = {};
    const patternSrt = ''
    const currentArr = s.split(' ')
    console.log(currentArr);
    for (let index = 0; index < currentArr.length; index++) {
        const value = currentArr[index];
        const word =  
    }
    console.log(patternCount);
    return true
};



wordPattern("aaaa", "dog cat cat dog")