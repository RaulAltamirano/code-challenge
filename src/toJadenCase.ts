function toJadenCase(str: string): string {
    const separed = str.split(' ')
    for (let i = 0; i < separed.length; i++) {
        const word = separed[i];
        if (word.length > 0)
            separed[i] = word[0].toLocaleUpperCase() + word.substring(1)
    }
    const newStr = separed.join(" ")
    return newStr
}


toJadenCase(`How can mirrors be real if our eyes aren't real`)