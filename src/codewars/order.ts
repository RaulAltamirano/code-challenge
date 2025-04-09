export function order(words: string): string {
    if(!words) return ''
    const wordsArray = words.split(' ');
    const wordsWithNumbers = wordsArray.map(word => {
        const numberMatch = word.match(/\d+/); 
        if (!numberMatch) {
            throw new Error(`La palabra '${word}' no contiene un número válido.`);
        }
        return {
            word,
            number: parseInt(numberMatch[0], 10) 
        };
    });

    wordsWithNumbers.sort((a, b) => a.number - b.number);
    const orderedWords = wordsWithNumbers.map(item => item.word);
    return orderedWords.join(' ');
}


order('is2 Thi1s T4est 3a')