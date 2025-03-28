function canConstruct(ransomNote: string, magazine: string): boolean {
    const charCount: number[] = new Array(26).fill(0)
    for (const char of magazine) {
        const index: number = char.charCodeAt(0) - 97;
        charCount[index]++;
    }
    for (const char of ransomNote) {
        if (--charCount[char.charCodeAt(0) - 97] < 0) {
            return false;
        }

    }
    return true

};

canConstruct("aab", "baa")
// canConstruct("aa", "aab")