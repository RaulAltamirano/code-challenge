export function spinWords(words: string): string {
    //TODO Have fun :)
    console.log(words);
    let str = []
    const arrStr = words.split(' ')
    console.log(arrStr);
    for (let index = 0; index < arrStr.length; index++) {
        const element = arrStr[index];
        if (element.length > 5) {
            const reverseWord = element.split('').reverse().join('')
            console.log('is more', reverseWord);
            str.push(reverseWord)
        } else {

            str.push(element)
        }
    }
    const res = str.join(' ')
    return res
}


spinWords('This is another test')