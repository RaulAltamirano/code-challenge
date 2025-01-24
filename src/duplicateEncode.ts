export function duplicateEncode(word: string): string {
    const lowerWord = word.toLowerCase(); // Asegúrate de ignorar mayúsculas/minúsculas.
    const charCount: Record<string, number> = {};

    for (const char of lowerWord) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let result = '';
    for (const char of lowerWord) {
        result += charCount[char] > 1 ? ')' : '(';
    }
    console.log(result);
    return result;
}



// duplicateEncode('din')
duplicateEncode('recede')
// for (let index = 0; index < word.length; index++) {
//     const currentIndex = word[index];
//     let isRepeat = false
//     for (let pointer = 0; pointer < word.length; pointer++) {
//         const currentPointer = word[pointer];
//         if (currentIndex === currentPointer) isRepeat = true
//         console.log(currentPointer, currentIndex, 'results');
//     }
//     if (isRepeat)
//         result = result.concat(')')
//     else
//         result = result.concat('(')

//     // if (words.has(currentIndex)) {
//     // } else {
//     // }
//     // words.add(currentIndex)
// }