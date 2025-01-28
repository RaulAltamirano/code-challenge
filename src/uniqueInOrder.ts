export function uniqueInOrder(iterable: string | (string | number)[]): (string | number)[] {
    const res: (string | number)[] = [];

    for (let index = 0; index < iterable.length; index++) {
        const currentElement = iterable[index];
        const nextElement = iterable[index + 1];

        if (currentElement !== nextElement) {
            res.push(currentElement);
        }
    }

    console.log({ res });
    return res;
}

uniqueInOrder('AAAABBBCCDAABBB')
uniqueInOrder([1, 2, 2, 3, 3])
uniqueInOrder([1, 2, 2, 3, 3])





// if (typeof (element) === 'number') {
//     lastElement = Number(iterable[index + 1])
//     if (element !== lastElement) res.push(element)
// }
// else {
//     const currentWord = element.toString().charCodeAt(0);
//     const nextElement = iterable[index + 1];

//     if (nextElement !== undefined) {
//         const nextWord = nextElement.toString().charCodeAt(0);
//         console.log(nextWord, currentWord);
//         if ((currentWord + 1) !== nextWord) {
//             res.push(element);
//         }else if(currentWord === nextWord) continue
//         console.log(currentWord, 'next', nextWord);
//     } else {
//         res.push(element);
//     }
// }