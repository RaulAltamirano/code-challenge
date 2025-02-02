function maximumValue(strs: string[]): number {
    let biggestNum = 0;

    for (let i = 0; i < strs.length; i++) {
        const element = strs[i];
        if (!isNaN(Number(element))) {
            const val = Number(element);
            if (val > biggestNum) {
                biggestNum = val;
            }
        } else {
            const strLength = element.length;
            if (strLength > biggestNum) {
                biggestNum = strLength;
            }
        }
    }
    console.log(biggestNum);
    return biggestNum;
}



const strs = ["3glko", "1"]
maximumValue(strs)
