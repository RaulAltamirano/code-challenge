const isPangram = (phrase: string): boolean => {
    const formatPhrase = phrase.trim().toLowerCase();
    const uniqueLetters = new Set<string>();

    const regex = /^[a-z]$/

    for (let index = 0; index < formatPhrase.length; index++) {
        const char = formatPhrase[index];
        if (regex.test(char)) uniqueLetters.add(char)
    }

    console.log({ uniqueLetters });
    return uniqueLetters.size === 26
}


isPangram("The quick brown fox jumps over the lazy dog.")

